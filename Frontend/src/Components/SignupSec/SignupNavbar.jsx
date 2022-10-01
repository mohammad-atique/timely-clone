import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
  Textarea,
  useToast,
} from "@chakra-ui/react";
const SignupNavbar = () => {
  return (
    <Box
      w={"100%"}
      height="8rem"
      margin={"auto"}
      border="1px solid red"
      p={"2rem 3rem 3rem 3rem"}
      display="flex"
    >
      <div class="header">
        <div>
          
            <img
              
              width="93"
              height="25"
              alt="Memory"
              src="https://d1vbcromo72rmd.cloudfront.net/assets/memory_logo-2b0e14e1b9caec121a1ba0e1fc28d171afe00a656378f9bb2b6ff43d6273e8b3.svg"
            />
        
        </div>
        <div style={{"textAlign":"center"}}>
          
            <img
              class="app_icon"
              alt="Timely"
              src="https://d1vbcromo72rmd.cloudfront.net/assets/timely_icon_with_bg-fff8d0307178d5b60fec3a9eda6e91f90d873f80680991fc1dde04e5be6d27bb.svg"
            />
          
        </div>
        <div></div>
      </div>
    </Box>
  );
};

export default SignupNavbar;
