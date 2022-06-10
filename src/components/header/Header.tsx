import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <NavLink to="/" className="header__item">
          Posts
        </NavLink>
        {/*<NavLink to="/favourites" className="header__item">*/}
        {/*  Любимые котики*/}
        {/*</NavLink>*/}
      </div>
    </header>
  );
};

export default Header;
