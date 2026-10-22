import { useState } from "react";

export interface Producto {
    id: number;
    nombre: string;
    comprado: boolean;
}

export const ListaCompra = () => {
    const [lista, setLista] = useState<Producto[]>([]);                                         // Creo la lista
    const [newNombre, setNewNombre] = useState<string>("");                                     // Creo donde se guardan los nombres

    const pendientes: number = lista.filter((producto) => !producto.comprado).length;           //  Creo el contaodr de productos de lo que hay aun inventario

    const manejarNombre = (evento: React.ChangeEvent<HTMLInputElement>): void => {              //  Maneja el cojer los datos del nombre
        setNewNombre(evento.target.value);
    }
    const manejarAnadir = (evento: React.FormEvent<HTMLFormElement>): void => {                 //  Maneja el añadir un producto
        evento.preventDefault();
        if (newNombre.trim() === "") return;                                                        //  Si esta vacio el nombre devuelve nada

        const newProducto: Producto = {                                                             //  Esto crea el producto cuando añadimos un nuevo producto
        id: Date.now(),
        nombre: newNombre.trim(),
        comprado: false,
        };

        setLista([...lista, newProducto]);                                                          //  
        setNewNombre("");
  };

  const manejarAlternarComprado = (id: number): void => {
    setLista(
      lista.map((producto) =>
        producto.id === id ? { ...producto, comprado: !producto.comprado } : producto
      )
    );
  };

  const manejarQuitar = (id: number): void => {
    setLista(lista.filter((producto) => producto.id !== id));
  };

    return (
        <div>
            <form onSubmit={manejarAnadir}>
                <input 
                    type="text" 
                    name="nombre"
                    value={newNombre}
                    onChange={manejarNombre}
                />
                <button type="submit">Añadir</button>
            </form>

            <p>Pendientes: {pendientes}</p>
            <ul>
               {lista.map((producto) => (
                    <li key={producto.id} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "5px" }}>
                        <input
                        type="checkbox"
                        checked={producto.comprado}
                        onChange={() => manejarAlternarComprado(producto.id)}
                        />
                        <span style={{ textDecoration: producto.comprado ? "line-through" : "none" }}>
                        {producto.nombre}
                        </span>
                        <button 
                            onClick={() => manejarQuitar(producto.id)}
                        >Quitar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}





// export default function ListaCompra(): React.JSX.Element {
//   const [lista, setLista] = useState<Producto[]>([]);
//   const [nuevoNombre, setNuevoNombre] = useState<string>("");

//   // Dato derivado
//   const pendientes: number = lista.filter((producto) => !producto.comprado).length;

//   const manejarCambioTexto = (evento: React.ChangeEvent<HTMLInputElement>): void => {
//     setNuevoNombre(evento.target.value);
//   };

//   const manejarAnadir = (evento: React.FormEvent<HTMLFormElement>): void => {
//     evento.preventDefault();
//     if (nuevoNombre.trim() === "") return;

//     const nuevoProducto: Producto = {
//       id: Date.now(),
//       nombre: nuevoNombre.trim(),
//       comprado: false,
//     };

//     setLista([...lista, nuevoProducto]);
//     setNuevoNombre("");
//   };

//   const manejarAlternarComprado = (id: number): void => {
//     setLista(
//       lista.map((producto) =>
//         producto.id === id ? { ...producto, comprado: !producto.comprado } : producto
//       )
//     );
//   };

//   const manejarQuitar = (id: number): void => {
//     setLista(lista.filter((producto) => producto.id !== id));
//   };

//   return (
//     <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px", marginTop: "20px" }}>
//       <h2>Ejercicio 3: Lista de la Compra</h2>
      
//       <form onSubmit={manejarAnadir} style={{ marginBottom: "15px" }}>
//         <input
//           type="text"
//           value={nuevoNombre}
//           onChange={manejarCambioTexto}
//           placeholder="Nuevo producto..."
//         />
//         <button type="submit" style={{ marginLeft: "5px" }}>Añadir</button>
//       </form>

//       <p style={{ fontWeight: "bold" }}>Pendientes: {pendientes}</p>

//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {lista.map((producto) => (
//           <li key={producto.id} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "5px" }}>
//             <input
//               type="checkbox"
//               checked={producto.comprado}
//               onChange={() => manejarAlternarComprado(producto.id)}
//             />
//             <span style={{ textDecoration: producto.comprado ? "line-through" : "none" }}>
//               {producto.nombre}
//             </span>
//             <button onClick={() => manejarQuitar(producto.id)} style={{ padding: "2px 5px", fontSize: "12px" }}>
//               Quitar
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }