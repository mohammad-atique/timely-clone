import React from "react";
import { Route, Routes } from "react-router-dom";
import Tasks from "../Components/Task";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";
import Login from "./Login";
import Signup from "./Signup";
import ProfileEditPage from "../Components/ProfileEditor-Frontend/ProfileEditPage";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage/>}/>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/profileedit" element={<ProfileEditPage />} />
    </Routes>
  );
};

export default AllRoutes;
