from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import psycopg2
import os

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allow requests from frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATABASE_URL = "postgresql://user:password@db/todo_db"

# Connect to PostgreSQL
conn = psycopg2.connect(DATABASE_URL)
cur = conn.cursor()

# Create table if not exists
cur.execute("""
    CREATE TABLE IF NOT EXISTS task (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        completed BOOLEAN DEFAULT FALSE
    )
""")
conn.commit()

class Task(BaseModel):
    title: str
    description: str

@app.post("/tasks/")
def create_task(task: Task):
    cur.execute("INSERT INTO task (title, description) VALUES (%s, %s) RETURNING id", (task.title, task.description))
    conn.commit()
    return {"message": "Task added!"}

@app.get("/tasks/")
def get_tasks():
    cur.execute("SELECT id, title, description FROM task WHERE completed = FALSE ORDER BY id DESC LIMIT 5")
    tasks = cur.fetchall()
    return [{"id": t[0], "title": t[1], "description": t[2]} for t in tasks]

@app.put("/tasks/{task_id}/done")
def mark_task_done(task_id: int):
    cur.execute("UPDATE task SET completed = TRUE WHERE id = %s", (task_id,))
    conn.commit()
    return {"message": "Task marked as done!"}
