import { ChevronRight, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./button";

function Task({ task, onTaskClick, onDeleteTask }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(taskObject) {
    const queryParams = new URLSearchParams();
    queryParams.set("title", taskObject.title);
    queryParams.set("description", taskObject.description);

    navigate(`/task?${queryParams.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {task.map((t) => (
        <li key={t.id} className="flex gap-2">
          <Button
            className={`text-left w-full p-2 rounded-md transition-colors
              ${t.isCompleted ? "bg-green-300 text-gray-700" : "bg-slate-400 text-white"}`}
            onClick={() => onTaskClick(t.id)}
          >
            {t.title}
          </Button>

          <Button
            className="bg-slate-400 p-2 rounded-md text-white"
            onClick={() => onSeeDetailsClick(t)}
          >
            <ChevronRight />
          </Button>

          <Button
            className="bg-slate-400 p-2 rounded-md text-white"
            onClick={() => onDeleteTask(t.id)}
          >
            <Trash />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Task;
