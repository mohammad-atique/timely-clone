import { Box, Checkbox, Flex, FormLabel, Input, Text } from '@chakra-ui/react'
import React from 'react'

const ProjectDetailsForm = () => {
  return (
        <>
            <Flex border={"1px solid gray"} mt="12%" width={"76%"} ml="5%">
                <Box width={"30%"} m="3% 3% 0 2%">
                    <Text fontWeight={"semibold"}>People & Hourly rates</Text>
                    <Text fontSize={"small"}>Add people to allow them to log hours to this project.</Text>
                    <Text fontSize={"small"} mt="2%">Add hourly rate to track money for this project.</Text>
                </Box>
                <Box>
                    <Box>
                    <FormLabel fontSize={"small"} fontWeight={"semibold"}>
                            PROJECT NAME
                    </FormLabel>
                    <Input placeholder='Project name'/>
                    </Box>
                    <Flex mt={"3%"}>
                    <Box>
                    <FormLabel  fontSize={"small"} fontWeight={"semibold"}>
                            CLIENT 
                    </FormLabel>
                    <Input placeholder='Client name'/>
                    </Box>
                    <Text width={"50%"} fontSize={"small"} mt="13%" ml={"2%"} fontWeight="semibold">Create new client</Text>
                    </Flex>
                    
                    <Box>
                    <Checkbox mt={"3%"} color="gray">Set external ID referrence</Checkbox>
                    </Box>
                    <Box>
                    <Checkbox m={"3% 0 2% 0"} color={"gray"}>Require note when logging to project</Checkbox>
                    </Box>
                </Box>
            </Flex>
        </>
  )
}

export default ProjectDetailsForm