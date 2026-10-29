# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

# Dashboard de Tareas Interactiva - Documentación de Componentes

Este proyecto gestiona una lista de tareas dinámica utilizando React, TypeScript y estilos asistidos por Bootstrap.

## Responsabilidad de los Componentes

* **App.tsx**: Centraliza y gestiona los dos únicos estados de la aplicación (lista de tareas y filtro activo) y calcula en tiempo de ejecución los datos derivados de las tareas visibles.
* **Filtros.tsx**: Renderiza iterativamente mediante un array tipado los botones de filtrado y comunica a `App` el cambio del filtro activo seleccionado.
* **ResumenTareas.tsx**: Muestra mensajes informativos condicionales evaluados estrictamente en orden basándose en el volumen y el estado de las tareas visibles.
* **ListaTareas.tsx**: Procesa el subconjunto de tareas filtradas mapeándolas individualmente en componentes atómicos mediante claves únicas y estables.
* **Tarea.tsx**: Renderiza de forma accesible e interactiva cada tarea, aplicando clases visuales dinámicas según su prioridad y estado de compleción mediante eventos nativos de teclado/ratón.
