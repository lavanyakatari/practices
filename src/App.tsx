import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Todo from "./pages/todo";
import NavBar from "./components/NavBar";
import "./App.css";
import useDarkMode from "./useDarkMode";
import "./index.css";

const App = () => {
  const { theme, toggleTheme } = useDarkMode();
  return (
    <div className="flex flex-col  flex  h-screen">
      {/* <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
      </Routes> */}
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default App;
