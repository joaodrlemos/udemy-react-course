import React, { useState, useContext } from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";

function App() {
  return (
    <>
      <main>
        <Sidebar />
        <Modal />
        <Home />
      </main>
    </>
  );
}

export default App;
