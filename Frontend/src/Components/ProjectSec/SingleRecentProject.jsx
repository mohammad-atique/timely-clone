import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import {IoMdBriefcase} from "react-icons/io" 

const SingleRecentProject = ({name}) => {
  return (

        <Box height={"60px"} border={"1px solid gray"}>
            <Flex gap={"4%"} alignItems="center">
                <Icon as={IoMdBriefcase} color="green" ml="2%"/>
                <Box>
                <Text fontWeight={"semibold"}>Communication</Text>
                <Text>{name}</Text>
                </Box>
            </Flex>
        </Box>

  )
}

export default SingleRecentProject