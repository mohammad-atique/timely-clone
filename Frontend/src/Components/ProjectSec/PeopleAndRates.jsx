import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ChoosePeopleDropdown from './ChoosePeopleDropdown'

const PeopleAndRates = () => {
  return (
        <>
            <Flex border={"1px solid gray"} mt="2%" width={"76%"} ml="5%">
                <Box width={"30%"} m="3% 3% 2% 2%">
                    <Text fontWeight={"semibold"}>Project details</Text>
                    <Text fontSize={"small"}>Choosing a color helps separate projects and the hours logged against them.</Text>
                </Box>
                <Box>
                    <Flex  alignItems={"center"} width="140%" mt={"3%"}>
                     <ChoosePeopleDropdown/>
                     <Text fontWeight={"semibold"} mt="5%"ml={"18%"} >Add Hourly rate</Text>
                    </Flex>
                    <Flex mt={"3%"}>
                    <Box border={"1px solid gray"}>
                        <Text>Person</Text>
                    </Box>
                    </Flex>
                </Box>
            </Flex>
        </>
  )
}

export default PeopleAndRates