import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import NavBasic from "./components/NavBasic";
import Home from "./pages/Home";
import axios from "./util/axiosConfig";
import ProductListPage from "./pages/ProductListPage";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
