import React from "react";
import ReactDOM from "react-dom/client";
import "src/sass/index.scss";
import App from "src/App";
import { Provider } from "react-redux";
import store from "src/store";
import { Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
