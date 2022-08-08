import React from "react";
import { NavLink } from "react-router-dom";
import "../App.scss";

export const Navigation = () => {
  return (
    <nav>
      <span>React TypeScript 2022</span>
      <span>
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? "active" : "none")}
          end
        >
          Products
        </NavLink>
        <NavLink
          to="/about"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          About
        </NavLink>
      </span>
    </nav>
  );
};
