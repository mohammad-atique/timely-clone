import { Box, Button, Flex, FormLabel, Icon, Input, Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineArrowLeft} from"react-icons/ai"
import PeopleAndRates from './PeopleAndRates'
import ProjectDetailsForm from './ProjectDetailsForm'

const NewProject = () => {
  return (
       <Box>
        <Box width={"100%"} height="120px"  backgroundColor="#f2f4f8" pos="fixed" top={"0"} zIndex="2">
        <Flex justifyContent={"space-between"} >
                <Box ml={"5%"}>
                    <Text fontSize={"md"} fontWeight="semibold" mt={"5%"}><Icon as={AiOutlineArrowLeft} mr="2%" />  Back</Text>
                    <Text fontSize={"2xl"} fontWeight="bold" mt={"24%"}>New project </Text> 
                </Box>
                <Button size={"sm"} colorScheme={"facebook"} m="2% 10% 0 0">Create project</Button>
            </Flex>
        </Box>

        {/* Project Details Section */}

        <ProjectDetailsForm/>

        {/* People & Hourly Rates */}

        <PeopleAndRates/>

        {/* Burdget */}

        <Flex justifyContent={"space-between"} border={"1px solid gray"} height="80px" mt="3%" width={"76%"} ml="5%" alignItems={"center"} >
            <Box ml={"4%"}>
              <Text fontSize={"large"} color="gray">Budget</Text>
              <Text fontSize={"small"}>Use a time or money budget.</Text>
            </Box>
            <Text fontWeight={"semibold"} mr="4%">Enable Budget</Text>
        </Flex>

          {/* Tags */}

        <Flex justifyContent={"space-evenly"} border={"1px solid gray"} height="80px" mt="3%" mb={"4%"} width={"76%"} ml="5%" alignItems={"center"}>
          <Box>
            <Text fontWeight={"semibold"}>
              Tags
            </Text>
            <Text fontSize={"small"} mt="1%">Tags describe the hours users log to your project.</Text>
            <Text fontSize={"small"} mt="2%">Set defined tag lists for set activities, or enable all the tags on your account.</Text>
          </Box>
          <Box>
            <FormLabel>Tag:</FormLabel>
            <Input size={"sm"} placeholder='tag'/>
          </Box>
        </Flex>

        </Box>
  )
}

export default NewProject