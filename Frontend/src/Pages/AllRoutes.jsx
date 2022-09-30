import React from "react";
import { Route, Routes } from "react-router-dom";
import Tasks from "../Components/Task";
import HomePage from "./HomePage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  );
};

export default AllRoutes;
