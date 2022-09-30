import React from "react";
import { Route, Routes } from "react-router-dom";
import Tasks from "../Components/Task";
import HomePage from "./HomePage";
import Login from "./Login";
import Signup from "./Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  );
};

export default AllRoutes;
