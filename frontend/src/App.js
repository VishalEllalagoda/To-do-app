import React, { useEffect, useState } from "react";
import axios from "axios";

// const API_URL = "http://localhost:8000/tasks/";
const API_URL = process.env.REACT_APP_API_URL + "/tasks/";


function App() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await axios.get(API_URL);
        setTasks(response.data);
    };

    const addTask = async () => {
        await axios.post(API_URL, { title, description });
        fetchTasks();
    };

    const markDone = async (id) => {
        await axios.put(`${API_URL}${id}/done`);
        fetchTasks();
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <button onClick={addTask}>Add Task</button>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.title} - {task.description}
                        <button onClick={() => markDone(task.id)}>Done</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
