import axios from "axios"
import * as types from "./actionTypes"


export const getProjects=(params)=>(dispatch)=>{

    

        dispatch({type:types.GET_PROJECTS_REQUEST})
        const token=localStorage.getItem("")
        return axios.get("http://localhost:5000/projects",{
                        headers:{
                            "Authorization":`Bearer ${token}`
                        }
        })              
                    .then((res)=>dispatch({type:types.GET_PROJECTS_SUCCESSFULL,payload:{data:res.data.projects,name:res.data.name}}))
                    .catch((err)=>dispatch({type:types.GET_PROJECTS_FAILURE}))

}

export const addProject=(payload)=>(dispatch)=>{

        dispatch({type:types.ADD_PROJECT_REQUEST})
        const token=localStorage.getItem("")
        return axios.post("http://localhost:5000/projects/create",payload,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        })
            .then((res)=>dispatch({type:types.ADD_PROJECT_SUCCESSFULL}))
            .catch((err)=>dispatch({type:types.ADD_PROJECT_FAILURE}))

}


export const updateProject=(payload,id)=>(dispatch)=>{

        dispatch({type:types.UPDATE_PROJECT_REQUEST})
        const token=localStorage.getItem("")
        return axios.patch(`http://localhost:5000/projects/update/${id}`,payload,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        })
            .then((res)=>dispatch({type:types.UPDATE_PROJECT_SUCCESS}))
            .catch((err)=>dispatch({type:types.UPDATE_PROJECT_FAILURE}))

}

export const deleteProject=(id)=>(dispatch)=>{

        dispatch({type:types.DELETE_PROJECT_REQUEST})
        const token=localStorage.getItem("")
        return axios.delete(`http://localhost:5000/projects/${id}`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        })
            .then(()=>dispatch({type:types.DELETE_PROJECT_SUCCESS}))
            .catch(()=>dispatch({type:types.DELETE_PROJECT_FAILURE}))

}










