import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navigation></Navigation>
      <main></main>
      <Footer></Footer>
    </div>
  );
}

export default App;
