import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {AiOutlineArrowLeft} from "react-icons/ai"
import {BiSearchAlt2} from "react-icons/bi"
import randomColorRGB from 'random-color-rgb'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import EditProject from './EditProject'

const SingleProjectDashboard = ({projectName="Project Name"}) => {

    const[colorState,setColorState]=useState("")

  useEffect(()=>{
     setColorState(randomColorRGB({max: 100}))
  },[])

  return (
    <Box border={"1px solid black"} bgColor={colorState} height="150px">
        <Flex justifyContent={"space-between"} mt="3%">
            <Box ml={"5%"}>
                <Button> <Icon as={AiOutlineArrowLeft} mr="7%"/><Text>Projects</Text></Button>
            </Box>
            <Flex justifyContent={"space-around"} width={"35%"}>
                <Box>
                <Button><Icon as={BiSearchAlt2} fontSize="large" /></Button>
                </Box>
                <Box>
                    <EditProject/>
                </Box>
                <Box>
                <Button><Text fontWeight={"bold"}>...</Text></Button>
                </Box>
            </Flex>
        </Flex>
        <Box>
            <Text bgColor={"lightgray"} width="8%" m={"auto"}>{projectName}</Text>
        </Box>

        {/* Tabs */}
            <Tabs variant='unstyled' size={"sm"} >
                <TabList mt={"1.4%"} ml="3%">
                    <Tab _selected={{ color: 'black', bg: 'white' }} bgColor="gray">Status</Tab>
                    <Tab _selected={{ color: 'black', bg: 'white' }} bgColor="gray">Tasks</Tab>
                    <Tab _selected={{ color: 'black', bg: 'white' }} bgColor="gray">Activities</Tab>
                    <Tab _selected={{ color: 'black', bg: 'white' }} bgColor="gray">Timesheets</Tab>
                    <Tab _selected={{ color: 'black', bg: 'white' }} bgColor="gray">Report</Tab>
                    <Tab _selected={{ color: 'black', bg: 'white' }} bgColor="gray">Invoice</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>

    </Box>
  )
}

export default SingleProjectDashboard