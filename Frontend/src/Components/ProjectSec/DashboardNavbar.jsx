import React from 'react'
import {Box, Button, Flex, Icon, Input, Text} from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {BsFillPersonFill} from "react-icons/bs"
import ImportDropdown from './ImportDropdown'
import RecentPinnedProjects from './RecentPinnedProjects'
import LatestActivities from './LatestActivities'
import { useNavigate } from 'react-router-dom'
import AllProjects from './AllProjects'



const DashboardNavbar = () => {

          const navigate=useNavigate()
   
  return (
       <Box  height="110px"  backgroundColor="#f2f4f8">
            <Flex justifyContent={"space-between"} mb="0.5%"  >
              <Text fontSize={"2xl"} color="#343a3f" mt="2%" ml={"3%"} fontWeight="semibold">Projects</Text>
              <Flex width={"48%"} justifyContent="space-around" mt="2%">
                <Input width={"200px"} bgColor="white" height={"30px"} borderRadius="5px" mt={"1%"}  placeholder='Client or project'/>
                <Button bgColor={"gray.300"} height={"30px"} mt={"1%"}><Icon as={BsFillPersonFill}/> Manage Clients</Button>
                <ImportDropdown/>

                <Button colorScheme={"facebook"} onClick={()=>navigate("/projects/create")} height={"30px"} mt={"1%"} >+ New project</Button>

              </Flex>
            </Flex>  

            {/* tabs section        */}

               <Tabs ml={"3%"} size={"sm"} variant='enclosed'>
                    <TabList>
                        <Tab bgColor={"white"} mr="0.5%" mt={"0.6%"}><Text fontSize={"md"} fontWeight="semibold" >Dashboard</Text></Tab>

                        <Tab bgColor={"white"} mt={"0.6%"}><Text fontSize={"md"} fontWeight="semibold">All Projects</Text></Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Box >
                                <RecentPinnedProjects/>
                                <LatestActivities/>
                            </Box>
                        </TabPanel>
                        <TabPanel>
                            <Box>
                                <AllProjects/>
                            </Box>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
       </Box> 
  )
}

export default DashboardNavbar