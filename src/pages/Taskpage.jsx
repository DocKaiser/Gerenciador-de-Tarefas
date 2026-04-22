import { ChevronLeft } from "lucide-react";
import { use } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

function Taskpage() {
  const navigate = useNavigate();
  const [SearchParams] = useSearchParams();
  const title = SearchParams.get("title");
  const description = SearchParams.get("description");

  function onBackButtonClick() {
    navigate(-1);
  }

  return (
    <div className="h-screen w-screen bg-slate-500 p-6 space-y-4">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={onBackButtonClick}
            className="bg-slate-700 absolute left-0 bottom-0 p-2 rounded-md text-white"
          >
            <ChevronLeft />
          </button>
          <h1 className="text-3xl text-slate-50 font-bold text-center">
            Detalhes da sua Tarefa
          </h1>
        </div>
      </div>

      <div className="bg-slate-200 p-4 rounded-md shadow">
        <h2 className="text-2xl font-bold text-slate-700">{title}</h2>
        <p className="text-slate-700">{description}</p>
      </div>
    </div>
  );
}

export default Taskpage;
