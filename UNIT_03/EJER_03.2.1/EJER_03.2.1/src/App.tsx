import { useState } from "react";
import { catalogo, type ItemCarrito } from "./adicional";
import { Catalogo } from "./catalogo";
import { Carrito } from "./carrito";

export function App() {
  // El único estado es carrito: ItemCarrito[].
  const [carrito, setCarrito] = useState<ItemCarrito[]>([]);

// Las funciones añadir, incrementar, decrementar, eliminar y vaciar viven en App y se pasan por props.

  const anadir = (idProducto: string) => {
    const producto = catalogo.find((p) => p.id === idProducto);
    if (!producto || producto.stock === 0) return;

    setCarrito((prev) => {
      const existente = prev.find((item) => item.idProducto === idProducto);

      if (existente) {
        if (existente.cantidad >= producto.stock) return prev;
        return prev.map((item) =>
          item.idProducto === idProducto
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }

      return [...prev, { idProducto, cantidad: 1 }];
    });
  };

  const incrementar = (idProducto: string) => {
    const producto = catalogo.find((p) => p.id === idProducto);
    if (!producto) return;

    setCarrito((prev) =>
      prev.map((item) => {
        if (item.idProducto === idProducto && item.cantidad < producto.stock) {
          return { ...item, cantidad: item.cantidad + 1 };
        }
        return item;
      })
    );
  };

  const decrementar = (idProducto: string) => {
    setCarrito((prev) =>
      prev.flatMap((item) => {
        if (item.idProducto !== idProducto) return item;
        // Si la cantidad es 1, al decrementar se elimina la línea
        if (item.cantidad <= 1) return [];
        return { ...item, cantidad: item.cantidad - 1 };
      })
    );
  };

  const eliminar = (idProducto: string) => {
    setCarrito((prev) => prev.filter((item) => item.idProducto !== idProducto));
  };

  const vaciar = () => {
    setCarrito([]);
  };

  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
      <Catalogo
        productos={catalogo}
        carrito={carrito}
        onAnadir={anadir}
      />
      <Carrito
        carrito={carrito}
        catalogo={catalogo}
        onIncrementar={incrementar}
        onDecrementar={decrementar}
        onEliminar={eliminar}
        onVaciar={vaciar}
      />
    </main>
  );
}

export default App;