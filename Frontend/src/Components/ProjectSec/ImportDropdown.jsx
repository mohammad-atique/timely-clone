import React from 'react'
import {Popover,PopoverTrigger,PopoverContent,PopoverHeader,PopoverBody,PopoverArrow,PopoverCloseButton, Button, Text, Flex, Icon, Box,} from '@chakra-ui/react'
import {FaPowerOff} from "react-icons/fa"
const ImportDropdown = () => {
  return (
    <>
        <Popover>
            <PopoverTrigger>
                <Button bgColor={"gray.300"} height={"30px"} mt={"1%"} >Import</Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader bgColor="#f2f4f8">
                    <Text fontSize={"large"} >Import projects</Text>
                    <Text>Import projects from other tools</Text>
                </PopoverHeader>
                <PopoverBody>
                        <Text fontSize={"large"}>Available to connect</Text>
                        <hr style={{color:"gray"}} />
                        <Flex  alignItems="center">
                            <Icon as={FaPowerOff} mr="5%"/>
                            <Box>
                                <Text fontSize={"small"} fontWeight={"bold"}>Toggl</Text>
                                <Text fontSize={"smaller"}>Quickly import Toggl users and projects into Timely.</Text>
                            </Box>
                        </Flex>
                        <hr style={{color:"gray"}} />
                        <Flex alignItems="center">
                            <Icon mr="5%"/>
                            <Box>
                                <Text fontSize={"small"} fontWeight={"bold"}>Harvest</Text>
                                <Text fontSize={"smaller"}>Quickly import Harvest users and projects into Timely.</Text>
                            </Box>
                        </Flex>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    </>
  )
}

export default ImportDropdown