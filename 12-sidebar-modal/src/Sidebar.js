import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useOrigContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useOrigContext();

  return (
    <section className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img className="logo" src={logo} alt="Coding Addict" />
        <FaTimes className="close-btn" onClick={() => closeSidebar()} />
      </div>
      <div className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;

          return (
            <a key={id} href={url}>
              {icon}
              {text}
            </a>
          );
        })}
      </div>
      <div className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;

          return (
            <a key={id} href={url}>
              {icon}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
