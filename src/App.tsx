import React from "react";
import "./App.css";
import { CartContextProvider } from "./components/Context";
import { Layout } from "./components/Layout";
import { Register } from "./components/Register";

function App() {
  return (
    <div className="App">
      <CartContextProvider>

      <Layout />
      </CartContextProvider>
    </div>
  );
}

export default App;
