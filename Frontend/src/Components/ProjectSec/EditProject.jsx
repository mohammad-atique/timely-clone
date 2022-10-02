import React from 'react'
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton, Button, useDisclosure, FormLabel, Input, Box, useToast,} from '@chakra-ui/react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProjects, updateProject } from '../../Redux/App-reducer/action'
import { useParams } from 'react-router-dom'
import { UPDATE_PROJECT_FAILURE, UPDATE_PROJECT_SUCCESS } from '../../Redux/App-reducer/actionTypes'

const EditProject = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch=useDispatch()
    const projects=useSelector((store)=>store.AppReducer.userData)
    const { token } = useSelector((store) => store.AuthReducer);
    const[projectName,setProjectName]=useState("")
    const[client,setClient]=useState("")
    const[tag,setTag]=useState("")
    const {id}=useParams()
    const toast=useToast()

    const handleUpdate=()=>{

      const payload={
        projectName:projectName,
        client:client,
        tag:tag
      }

      dispatch(updateProject({data:payload,token}))
      .then((res)=>{

        if(res.type===UPDATE_PROJECT_SUCCESS){
          toast({
            title: 'Project updated.',
            description: "Your Project has been updated.",
            status: 'success',
            duration: 7000,
            isClosable: true,
            position:"top"
          })
        }else if(res.type===UPDATE_PROJECT_FAILURE){
          toast({
            title: 'Failed.',
            description: "Please try again later.",
            status: 'error',
            duration: 7000,
            isClosable: true,
            position:"top"
          })
        }

      })

    }


    useEffect(()=>{
        projects.length===0&&dispatch(getProjects(token))

    },[projects.length,dispatch])

    useEffect(()=>{
        if(id){
          const project=projects.find((elem)=>elem._id===id)
          if(project){
            setProjectName(project.projectName)
            setClient(project.client)
            setTag(project.tag)
          }
        }
    },[id,projects])

  return (
    
        <>

            <Button onClick={onOpen}>Edit project</Button>
      
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    <Box>
                        <FormLabel>Project Name:</FormLabel>
                        <Input name='projectName' value={projectName} onChange={(e)=>setProjectName(e.target.value)} placeholder='project name' />
                    </Box>  
                    <Box>
                        <FormLabel>Client:</FormLabel>
                        <Input name='client' value={client} onChange={(e)=>setClient(e.target.value)} placeholder="client" />
                    </Box> 
                    <Box>
                        <FormLabel>Tag:</FormLabel>
                        <Input tag="tag" value={tag} onChange={(e)=>setTag(e.target.value)}  placeholder="tag" />
                    </Box> 
                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue'  mr={3} onClick={handleUpdate}>
                    Update 
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
   
        </>

  )
}

export default EditProject