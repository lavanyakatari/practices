import React from "react";
import { useLocation, NavLink } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  return (
    <div className="flex justify-between w-full bg-gray-500 p-4">
      <NavLink
        className={`${
          location.pathname === "/todo" && " text-red-500 underline"
        }`}
        to="/login"
      >
        Login
      </NavLink>
      <NavLink
        className={`${
          location.pathname === "/todo" && " text-red-500 underline"
        }`}
        to="/todo"
      >
        Todo
      </NavLink>
    </div>
  );
};

export default NavBar;
