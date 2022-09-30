import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import SingleRecentProject from './SingleRecentProject'

const RecentPinnedProjects = () => {
  return (
        <Box>
            <Text fontWeight={"semibold"}>Recent and pinned projects</Text>
            <Grid gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(4,1fr)"}} mt={"2%"}>
                <GridItem>
                    <SingleRecentProject/>
                </GridItem>
            </Grid>
        </Box>
  )
}

export default RecentPinnedProjects