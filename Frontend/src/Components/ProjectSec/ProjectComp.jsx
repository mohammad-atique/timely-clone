import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import {IoMdBriefcase} from "react-icons/io" 
import randomColorRGB from 'random-color-rgb'
import { Link } from 'react-router-dom'

const ProjectComp = ({projectName,client,id}) => {

    

  return (
        <>
            <Flex width={"160px"} height={"50px"}  >
                <Box>
                    <Link to={`/projects/${id}`}>
                    <Text fontWeight={"bold"}><Icon as={IoMdBriefcase} color={randomColorRGB({max: 100})} /> {projectName}</Text></Link>
                </Box>
                <Box>
                    <Text fontWeight={"semibold"}>{client}</Text>
                </Box>
            </Flex>
        </>
  )
}

export default ProjectComp