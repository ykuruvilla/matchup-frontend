import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/matchfit-logo.png";
import "./Header.scss";
import Navbar from "../Navbar/Navbar";

const Header = ({ currentUser }) => {
  return (
    <header className="header">
      <NavLink className="header__logo-link" to="/">
        <img src={logo} alt="Matchup Logo" className="header__logo" />
      </NavLink>
      <Navbar />
    </header>
  );
};

export default Header;
