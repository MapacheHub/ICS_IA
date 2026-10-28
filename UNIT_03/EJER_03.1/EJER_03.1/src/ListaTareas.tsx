import type { Tarea } from "./Tarea";

interface ListaTareasProps {
    tarea: Tarea,
    onToggleTarea: (id: number) => void,
}

