import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8000/tasks/";

function App() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get(API_URL);
            setTasks(response.data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    const addTask = async () => {
        try {
            await axios.post(API_URL, { title, description });
            fetchTasks();
            setTitle("");
            setDescription("");
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    const markDone = async (id) => {
        await axios.put(`${API_URL}${id}/done`);
        fetchTasks();
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>To-Do List</h1>
            <div style={styles.inputContainer}>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    style={styles.input}
                />
                <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    style={styles.input}
                />
                <button onClick={addTask} style={styles.addButton}>
                    Add Task
                </button>
            </div>

            <ul style={styles.taskList}>
                {tasks.map((task) => (
                    <li key={task.id} style={styles.taskItem}>
                        <div style={styles.taskContent}>
                            <h3 style={styles.taskTitle}>{task.title}</h3>
                            <p style={styles.taskDescription}>{task.description}</p>
                        </div>
                        <button onClick={() => markDone(task.id)} style={styles.doneButton}>
                            Done
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const styles = {
    container: {
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    header: {
        textAlign: "center",
        color: "#333",
    },
    inputContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginBottom: "20px",
    },
    input: {
        padding: "10px",
        fontSize: "16px",
        borderRadius: "4px",
        border: "1px solid #ccc",
    },
    addButton: {
        padding: "10px",
        fontSize: "16px",
        backgroundColor: "#28a745",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    taskList: {
        listStyle: "none",
        padding: "0",
    },
    taskItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        borderRadius: "4px",
        marginBottom: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    taskContent: {
        flex: "1",
    },
    taskTitle: {
        margin: "0",
        fontSize: "18px",
        color: "#333",
    },
    taskDescription: {
        margin: "0",
        fontSize: "14px",
        color: "#666",
    },
    doneButton: {
        padding: "8px 12px",
        fontSize: "14px",
        backgroundColor: "#dc3545",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
};

export default App;