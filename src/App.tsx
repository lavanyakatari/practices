import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Todo from "./pages/todo";
import NavBar from "./components/NavBar";
import "./App.css";

const App = () => {
  return (
    <div className="flex flex-col bg-red-500 flex  h-screen">
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
};

export default App;
