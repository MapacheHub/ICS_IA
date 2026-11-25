interface Producto {
    id: number;
    nombre: string;
    precio: number;
};

interface LineaCarrito {
    producto: Producto;
    cantidad: number;
};

type Accion =
    | { tipo: "anadir"; producto: Producto }
    | { tipo: "quitar"; idProducto: number }
    | { tipo: "cambiarCantidad"; idProducto: number; cantidad: number }
    | { tipo: "vaciar" };

interface EstadoCarrito {
    lineas: LineaCarrito[];
    historial: LineaCarrito[][];
}

const catalogo: Producto[] = [
    {id: 1, nombre: "Galletas", precio: 5.49},
    {id: 2, nombre: "Leche", precio: 0.70},
    {id: 3, nombre: "Pan", precio: 1.5},
    {id: 4, nombre: "Huevos", precio: 1.21},
];

const formateadorEuro = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
});

function carritoReducer(estado: EstadoCarrito, accion: Accion): EstadoCarrito {
    switch (accion.tipo) {
    case "anadir": {
        const existe = estado.lineas.some(
        (l) => l.producto.id === accion.producto.id
        );
        const nuevasLineas = existe
        ? estado.lineas.map((l) =>
            l.producto.id === accion.producto.id
                ? { ...l, cantidad: l.cantidad + 1 }
                : l
            )
        : [...estado.lineas, { producto: accion.producto, cantidad: 1 }];

        return {
        lineas: nuevasLineas,
        historial: [...estado.historial, estado.lineas],
        };
    }

    case "quitar": {
        return {
        lineas: estado.lineas.filter((l) => l.producto.id !== accion.idProducto),
        historial: [...estado.historial, estado.lineas],
        };
    }

    case "cambiarCantidad": {
        const nuevasLineas =
        accion.cantidad <= 0
          ? estado.lineas.filter((l) => l.producto.id !== accion.idProducto)
          : estado.lineas.map((l) =>
              l.producto.id === accion.idProducto
                ? { ...l, cantidad: accion.cantidad }
                : l
            );

      return {
        lineas: nuevasLineas,
        historial: [...estado.historial, estado.lineas],
      };
    }

    case "vaciar": {
      return {
        lineas: [],
        historial: [...estado.historial, estado.lineas],
      };
    }

    case "deshacer": {
      if (estado.historial.length === 0) return estado;
      const anterior = estado.historial[estado.historial.length - 1];
      return {
        lineas: anterior,
        historial: estado.historial.slice(0, -1),
      };
    }
  }
}

export function Carrito() {
  const [estado, dispatch] = useReducer(carritoReducer, {
    lineas: [],
    historial: [],
  });

  const totalArticulos = estado.lineas.reduce(
    (acc, linea) => acc + linea.cantidad,
    0
  );
  const importeTotal = estado.lineas.reduce(
    (acc, linea) => acc + linea.producto.precio * linea.cantidad,
    0
  );

  return (
    <section>
      <h2>Catálogo</h2>
      <ul>
        {CATALOGO.map((prod) => (
          <li key={prod.id}>
            {prod.nombre} — {formateadorEuro.format(prod.precio)}{" "}
            <button onClick={() => dispatch({ tipo: "anadir", producto: prod })}>
              Añadir
            </button>
          </li>
        ))}
      </ul>

      <h2>Carrito ({totalArticulos} artículos)</h2>
      {estado.lineas.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {estado.lineas.map(({ producto, cantidad }) => (
            <li key={producto.id}>
              {producto.nombre} ({formateadorEuro.format(producto.precio)}) —
              Cantidad:{" "}
              <input
                type="number"
                value={cantidad}
                onChange={(e) =>
                  dispatch({
                    tipo: "cambiarCantidad",
                    idProducto: producto.id,
                    cantidad: Number(e.target.value),
                  })
                }
              />
              <button
                onClick={() =>
                  dispatch({ tipo: "quitar", idProducto: producto.id })
                }
              >
                Quitar
              </button>
            </li>
          ))}
        </ul>
      )}

      <p>
        <strong>Total: {formateadorEuro.format(importeTotal)}</strong>
      </p>
      <button
        onClick={() => dispatch({ tipo: "vaciar" })}
        disabled={estado.lineas.length === 0}
      >
        Vaciar carrito
      </button>
      <button
        onClick={() => dispatch({ tipo: "deshacer" })}
        disabled={estado.historial.length === 0}
      >
        Deshacer
      </button>
    </section>
  );
}