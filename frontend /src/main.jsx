import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/store.jsx";
import { Provider } from "react-redux";
import { CartContextProvider } from "./Context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
