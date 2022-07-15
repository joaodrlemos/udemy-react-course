import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { useOrigContext } from "./context";

const Home = () => {
  const { openSidebar } = useOrigContext();

  return <FaBars className="sidebar-toggle" onClick={() => openSidebar()} />;
};

export default Home;
