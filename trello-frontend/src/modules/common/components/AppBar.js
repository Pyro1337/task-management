import {
  CaretDown,
  Bell,
  InfoCircle,
  RSquare,
  PersonPlusFill,
} from "react-bootstrap-icons";
import { ReactComponent as TrelloLogo } from "../../common/icons/trello-icon.svg";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import { InputText } from "./InputText";
import { Description, Diversity3 } from "@mui/icons-material";

export function AppBar() {
  const navigate = useNavigate();
  const items = [
    {
      label: "Espacios de trabajo",
      options: [
        {
          label: "Crear Espacio de trabajo",
          action: () => {
            navigate("/crear-espacio-trabajo");
          },
          icon: <Diversity3 />, // Icono de creación
          description:
            "Un Espacio de trabajo es un conjunto de tableros y personas. Utilízalo para organizar tu empresa, tu proyecto paralelo y tus planes con familiares o amigos.", // Descripción debajo
        },
        {
          label: "Espacios de trabajo de Trello",
          action: () => {
            navigate("/mis-espacios-trabajo");
          },
          icon: <RSquare />, // Icono del espacio de trabajo
        },
      ],
    },
    { label: "Marcado", options: [] },
    { label: "Plantillas", options: [] },
    {
      label: "Opciones",
      options: [
        {
          label: "Crear usuario",
          action: () => {
            navigate("/miembros");
          },
          icon: <PersonPlusFill />, // Icono del usuario
        },
      ],
    },
  ];

  return (
    <div className="flex flex-row gap-0 w-100 border-b border-gray-600 justify-between text-sm px-6">
      <div className="flex flex-row justify-start items-center p-2 gap-2">
        <div
          className="flex flex-row justify-start items-center p-2 gap-2 hover:bg-gray-600 cursor-pointer rounded"
          onClick={() => navigate("/mis-espacios-trabajo")}
        >
          <TrelloLogo className="w-4 h-4" />
          <div className="text-xl font-bold">Trello</div>
        </div>
        {items.map((item, index) => (
          <Dropdown key={index} label={item.label} options={item.options} />
        ))}
        <button className="bg-blue-500 text-black rounded px-3 py-2 hover:bg-blue-400">
          Crear
        </button>
      </div>
      <div className="flex flex-row justify-end items-center p-2 gap-4">
        <InputText />
        <Bell className="w-4 h-4 cursor-pointer" />
        <InfoCircle className="w-4 h-4 cursor-pointer" />
        <div className="flex justify-center items-center w-5 h-5 rounded-full bg-orange-600 text-white">
          A
        </div>
      </div>
    </div>
  );
}
