import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const SignupNavbar = () => {
    const navigate = useNavigate();
  return (
    <Box
    display={"flex"}
    alignItems={"center"}
    justifyContent="space-between"
    h={"60px"}
    border={"1px solid white"}
    marginTop="1rem"
  >
    <Image
      onClick={() => navigate("/")}
      cursor={"pointer"}
      marginLeft={"5%"}
      src="https://d1vbcromo72rmd.cloudfront.net/assets/memory_logo-2b0e14e1b9caec121a1ba0e1fc28d171afe00a656378f9bb2b6ff43d6273e8b3.svg"
      width={"90px"}
    />
    <Image
      onClick={() => navigate("/")}
      cursor={"pointer"}
      marginRight={"50%"}
      src="https://d1vbcromo72rmd.cloudfront.net/assets/timely_icon_with_bg-fff8d0307178d5b60fec3a9eda6e91f90d873f80680991fc1dde04e5be6d27bb.svg"
      width={"40px"}
      borderRadius="10px"
    />
  </Box>
  )
}

export default SignupNavbar