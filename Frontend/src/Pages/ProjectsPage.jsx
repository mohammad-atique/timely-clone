import React from 'react'
import Footer from '../Components/Footer'
import DashboardNavbar from '../Components/ProjectSec/DashboardNavbar'
import Sidebar from '../Components/Sidebar'

const ProjectsPage = () => {
  return (
    <div style={{display:"flex"}}>
      <Sidebar />
      <DashboardNavbar/>
     
    </div>
  )
}

export default ProjectsPage