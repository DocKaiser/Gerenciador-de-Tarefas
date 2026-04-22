import { useState } from "react";
import Input from "./Input";

// ADICIONE ISSO AQUI: { onAddTaskSubmit }
function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-400 text-black rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          if (title.trim() === "" || description.trim() === "") {
            alert("Por favor, preencha o título e a descrição da tarefa.");
            return;
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-600 text-white p-2 rounded-md font-medium"
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}

export default AddTask;
