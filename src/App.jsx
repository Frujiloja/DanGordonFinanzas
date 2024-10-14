import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Contacto from "./components/Contacto"
import AcercaDeMi from "./components/Acercademi";
import "./App.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <AcercaDeMi></AcercaDeMi>
      <Contacto></Contacto>
      <Footer></Footer>
    </>
  );
}

export default App;
