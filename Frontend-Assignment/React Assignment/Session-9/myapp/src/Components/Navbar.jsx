import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px",
        backgroundColor: "#f2f2f2",
      }}
    >
      <NavLink
        to="/"
        style={({ isActive }) => ({
          textDecoration: "none",
          color: isActive ? "red" : "black",
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Home
      </NavLink>

      <NavLink
        to="/deals"
        style={({ isActive }) => ({
          textDecoration: "none",
          color: isActive ? "red" : "black",
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Deals
      </NavLink>

      <NavLink
        to="/cart"
        style={({ isActive }) => ({
          textDecoration: "none",
          color: isActive ? "red" : "black",
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Cart
      </NavLink>
    </nav>
  );
}

export default Navbar;