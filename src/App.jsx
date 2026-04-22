import { useEffect, useState } from "react";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import "./App.css";
import { v4 } from "uuid";

function App() {
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  useEffect(() => {
    if (task.length > 0) return;

    const fetchTasks = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
      );
      const data = await response.json();

      const tasksFromApi = data.map((t) => ({
        id: v4(),
        title: t.title,
        description: "Tarefa vinda da API",
        isCompleted: t.completed,
      }));

      setTask(tasksFromApi);
    };

    fetchTasks();
  }, []);

  function onTaskClick(taskId) {
    const newTasks = task.map((t) => {
      if (t.id === taskId) {
        return { ...t, isCompleted: !t.isCompleted };
      }
      return t;
    });
    setTask(newTasks);
  }

  function onDeleteTask(taskId) {
    const newTasks = task.filter((t) => t.id !== taskId);
    setTask(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTask([...task, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-600 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-50 font-bold text-center">
          Meu Gerenciador de tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Task
          task={task}
          onTaskClick={onTaskClick}
          onDeleteTask={onDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
