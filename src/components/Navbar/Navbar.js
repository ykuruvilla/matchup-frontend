import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../SidebarData/SidebarData";
import "./Navbar.scss";

const Navbar = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSidebar = () => setIsSidebarActive(!isSidebarActive);

  return (
    <>
      <div className="navbar">
        <NavLink to="#" className="navbar__bars" onClick={toggleSidebar}>
          <FaIcons.FaBars />
        </NavLink>
      </div>
      <nav
        className={
          isSidebarActive ? "navbar__menu navbar__menu--active" : "navbar__menu"
        }
      >
        <ul className="navbar__menu-items" onClick={toggleSidebar}>
          <li className="navbar__toggle">
            <NavLink to="#" className="navbar__bars">
              <AiIcons.AiOutlineClose />
            </NavLink>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <NavLink to={item.path}>
                  {item.icon}
                  <span className="navbar__menu-item-text">{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
