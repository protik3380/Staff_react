import React from "react";
import { NavLink } from "react-router-dom";
import "./MenuBar.css";

function MenuBar() {
  return (
    <div className="menu-bar">
      <div className="logo">ECO SCAN LOGO</div>
      <div className="menu-items">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          ⬜ Overview
        </NavLink>
        <NavLink
          to="/dashboard/staff"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          👥 Staff
        </NavLink>
        {/* Add other menu items here if needed */}
      </div>
      <div className="user-name">UserName Username</div>
    </div>
  );
}

export default MenuBar;
