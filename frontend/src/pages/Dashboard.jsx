import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const loadTasks = async () => {
    const response = await api.get("/tasks");
    setTasks(response.data);
  };

  const addTask = async () => {
    if (!newTask.trim()) return;

    await api.post("/tasks", {
      title: newTask,
    });

    setNewTask("");
    loadTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div style={{ padding: "2rem", backgroundColor: "#dbeafe", minHeight: "100vh" }}>
      <h1 style={{ color: "#1d4ed8" }}>Cloud Task Manager</h1>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Wpisz nowe zadanie..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Dodaj zadanie</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}{" "}
            <button onClick={() => deleteTask(task.id)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;