import { TareaItem, type Tarea } from "./Tarea";

interface ListaTareasProps {
    tareas: Tarea[],
    onToggle: (id: number) => void,
}

export function ListaTareas({ tareas, onToggle }: ListaTareasProps) {
    return (
        <ul className="list-group">
            {tareas.map((tarea) => (
                <TareaItem
                    key={tarea.id}
                    tarea={tarea}
                    onToggle={onToggle}
                />
            ))}
        </ul>
    );
}

