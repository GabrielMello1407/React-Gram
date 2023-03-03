import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {createRoot} from 'react-dom/client'
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Redux
import { Provider } from "react-redux";
import { store } from "./store";

const root = document.getElementById("root");

// Substitua ReactDOM.render pelo novo método createRoot
// e use o método render para renderizar o componente raiz
createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Se você quiser começar a medir o desempenho do seu aplicativo, passe uma função
// para registrar os resultados (por exemplo: reportWebVitals(console.log))
// ou enviar para um endpoint de análise. Saiba mais em: https://bit.ly/CRA-vitals
reportWebVitals();
