# Gryffin UI: React + Redux + HeroUI + Chart.js + TypeScript + Vite

[![Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://github.com/anchit-choudhry/gryffin-ui/blob/main/LICENSE)
[![CodeQL](https://github.com/anchit-choudhry/gryffin-ui/actions/workflows/codeql.yml/badge.svg)](https://github.com/anchit-choudhry/gryffin-ui/actions/workflows/codeql.yml)
[![DevSkim](https://github.com/anchit-choudhry/gryffin-ui/actions/workflows/devskim.yml/badge.svg)](https://github.com/anchit-choudhry/gryffin-ui/actions/workflows/devskim.yml)
[![ESLint](https://github.com/anchit-choudhry/gryffin-ui/actions/workflows/eslint.yml/badge.svg)](https://github.com/anchit-choudhry/gryffin-ui/actions/workflows/eslint.yml)
[![Lint Code Base](https://github.com/anchit-choudhry/gryffin-ui/actions/workflows/super-linter.yml/badge.svg)](https://github.com/anchit-choudhry/gryffin-ui/actions/workflows/super-linter.yml)
[![OSV Scanner](https://github.com/anchit-choudhry/gryffin-ui/actions/workflows/osv-scanner.yml/badge.svg)](https://github.com/anchit-choudhry/gryffin-ui/actions/workflows/osv-scanner.yml)
[![GitHub Pages](https://github.com/anchit-choudhry/gryffin-ui/actions/workflows/static.yml/badge.svg)](https://github.com/anchit-choudhry/gryffin-ui/actions/workflows/static.yml)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)
  uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable
type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also
install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x)
and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom)
for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
Powered by

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev)
[![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?logo=chartdotjs&logoColor=fff)](https://www.chartjs.org)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com)
