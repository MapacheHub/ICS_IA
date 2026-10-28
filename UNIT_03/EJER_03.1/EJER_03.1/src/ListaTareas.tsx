import { TareaItem, type Tarea } from "./tarea";

interface ListaTareasProps {
    tareas: Tarea[],
    onToggleTarea: (id: number) => void,
}

export function ListaTareas({ tareas, onToggleTarea }: ListaTareasProps) {
    return (
        <ul className="list-group">
            {tareas.map((tarea) => (
                <TareaItem
                    key={tarea.id}
                    tarea={tarea}
                    onToggle={onToggleTarea}
                />
            ))}
        </ul>
    );
}

