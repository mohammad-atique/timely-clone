import { Box, Grid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProjects } from '../../Redux/App-reducer/action'
import ProjectComp from './ProjectComp'

const AllProjects = () => {


    const { token } = useSelector((store) => store.AuthReducer);
    const projects=useSelector((store)=>store.AppReducer.projectsData)
    // console.log(projects)
    const dispatch=useDispatch()


    useEffect(()=>{

        
            dispatch(getProjects(token))
        

    },[])

  return (
    <Grid gridTemplateColumns={"repeat(3,1fr)"}>
        {
            projects?.map((elem)=>(
                <ProjectComp key={elem.projectName} id={elem._id} projectName={elem.projectName} client={elem.client} />
            ))
        }


    </Grid>
  )
}

export default AllProjects