# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

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

<!-- Ejercicio -->
A1 · Predice y comprueba

por consola saldra "Consola:3" y en el h3 saldra "3" (mentira, por consola sale "Consola:0" y en el h3 sale 1)

tras el 1º click sale 2, tras el 2º click sale 6. Predigo que primero saldra 1 y luego saldra 2

da igual que pongas la misma operacion 3 veces si no te cercionas de que los cambios que haga la naterior se guarden para que puda hacerlo la siguiente

A2 · Carrito con useReducer



B1 · Reloj con limpieza



B2 · ¿Necesito un efecto?



C1 · Foco inteligente

El cursor aparece en el campo donde falla
Usamos el interrogate porque el ejecutarlo el campo es null, sin la interrogante saltaria un error

C2 · Cronómetro con vueltas



D · Cuaderno de notas del grupo


