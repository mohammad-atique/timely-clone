import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage/>}/>
    </Routes>
  );
};

export default AllRoutes;
