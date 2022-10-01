import React from "react";

import {
  Box,
  Text,
  Image,
  
} from "@chakra-ui/react";

const LeftSec = () => {
  return (
    <Box
      margin={"auto"}
      w={"100%"}
      //   h={"600px"}
      border={"1px solid white"}
      marginTop={"40px"}
      textAlign="center"
    >
      <Text fontSize={{
      base: "1xl", // 0-48em
      md: "2xl", // 48em-80em,
      xl: '3xl', // 80em+
    }} fontWeight={"500"} color="#64657e">
        Top rated time tracking
      </Text>
      <Box display="flex" justifyContent={"center"} alignItems="center" margin={"auto"}>
        <Box margin={"auto"}>
          <Image
            src="https://d1vbcromo72rmd.cloudfront.net/assets/join/g2_badge_leader_2022-bbf17b5daa62a554f0d55c4af7e835f9896cf15fdd80e72261c40a8744894fb3.svg"
            alt="images"
            width={"100%"}
          />
        </Box>
        <Box margin={"auto"}>
          <Image
            src="https://d1vbcromo72rmd.cloudfront.net/assets/join/g2_badge_users_love_us-4fca521cb6d80c30d02e3df6bd0013f5395fb3ae22e81b3e3608e258d8feba63.svg"
            alt="images"
            width={"100%"}
          />
        </Box>
        <Box margin={"auto"}>
          <Image
            src="https://d1vbcromo72rmd.cloudfront.net/assets/join/g2_badge_usability_2022-f0f22abd17173b279e3d0568aa55411971f2b3f5840cc89ae913be4aebee42a7.svg"
            alt="images"
            width={"100%"}
          />
        </Box>
      </Box>
      <Box>
      <Box>
          <Text fontSize={['md', 'lg', 'xl']} fontWeight={"500"} color="#64657e">“The best way to measure exactly where your time goes.”</Text>
          <Box display="flex" justifyContent={"center"} fontSize={['sm','md', 'lg']}>
            <label>Brian,{"\u00a0\u00a0"}</label>
            <label style={{ color: "#7b90bf" }}>Accountant</label>
          </Box>
        </Box>
        <Box>
          <Text fontSize={['md', 'lg', 'xl']} fontWeight={"500"} color="#64657e">“Timely takes a load off my brain.”</Text>
          <Box display="flex" justifyContent={"center"} fontSize={['sm','md', 'lg']}>
            <label>Erik,{"\u00a0\u00a0"}</label>
            <label style={{ color: "#7b90bf" }}> Digital Designer</label>
          </Box>
        </Box>
        <Box>
          <Text fontSize={['md', 'lg', 'xl']} fontWeight={"500"} color="#64657e">“Easy to use and I love the project level summaries.”</Text>
          <Box display="flex" justifyContent={"center"} fontSize={['sm','md', 'lg']}>
            <label>Jonathan,{"\u00a0\u00a0"}</label>
            <label style={{ color: "#7b90bf" }}>Software Engineer</label>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftSec;
