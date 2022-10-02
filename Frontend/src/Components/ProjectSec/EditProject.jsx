import React from 'react'
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton, Button, useDisclosure, FormLabel, Input, Box,} from '@chakra-ui/react'

const EditProject = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

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
                        <Input placeholder='project name' />
                    </Box>  
                    <Box>
                        <FormLabel>Client:</FormLabel>
                        <Input placeholder="client" />
                    </Box> 
                    <Box>
                        <FormLabel>Tag:</FormLabel>
                        <Input placeholder="tag" />
                    </Box> 
                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Update 
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
   
        </>

  )
}

export default EditProject