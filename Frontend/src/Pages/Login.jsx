import {
  Box,
  Input,
  Text,
  FormLabel,
  Checkbox,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AiFillApple } from "react-icons/ai"; // FcGoogle
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInFunc} from "../Redux/Auth-reducer/action";
import { Link, useNavigate } from "react-router-dom";
import LeftSec from "../Components/SignupSec/LeftSec";
import SignupNavbar from "../Components/SignupSec/SignupNavbar";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const createAccountError = useSelector(
    (data) => data.AuthReducer.isError
  );
  const successfullyCreated = useSelector(
    (data) => data.AuthReducer.isAuth
  );
  const toast = useToast();
  const errorData = useSelector((data) => data.AuthReducer.errorData);
  
  function SendSignUpRequest() {
    dispatch(
      signInFunc({
        email: email,
        password: password,
      })
    );
  }

  // console.log(successfullyCreated)

  useEffect(() => {
    if (successfullyCreated === true) {
      toast({
        title: `Login Successfull`,
        status: "success",
        duration: 900,
        position: "top",
        isClosable: true,
      });
      // alert("Your Account Sucessfully Created");
      setTimeout(() => {
        navigate("/projects");
      }, 2000);
    }
  }, [successfullyCreated]);

  return (
    <Box>
      <Box>
        <SignupNavbar />
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent="space-between"
        flexDirection={{
          base: "column", // 0-48em
          md: "row", // 48em-80em,
          xl: "row", // 80em+
        }}
      >
        <Box
          marginLeft={"5%"}
          width={[
            "100%", // 0-30em
            "50%", // 30em-48em
            "33%", // 48em-62em
            // 62em+
          ]}
        >
          <LeftSec />
        </Box>

        <Box
          margin={"auto"}
          w={"30%"}
          h={"600px"}
          // border={"1px solid black"}
          marginTop={"40px"}
        >
          <Box mb={"20px"}>
            <Text fontSize={"5xl"} fontWeight={"700"} color="#64657e">
              Log in to Timely
            </Text>
          </Box>
          <Box mb={"20px"}>
            <FormLabel>Enter Email</FormLabel>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              w={"100%"}
              h={"55px"}
              border={`2px solid`}
              type={"email"}
            />
            {createAccountError &&
              errorData
                .filter((e) => {
                  return e.param === "email";
                })
                .map((e, i) => (
                  <FormLabel key={i} mt={"5px"} color={"red"}>
                    {e.msg}
                  </FormLabel>
                ))}
          </Box>
          {/* password */}
          <Box mb={"20px"}>
            <FormLabel>Enter Password</FormLabel>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              w={"100%"}
              h={"55px"}
              border={`2px solid`}
              type={"password"}
            />
            {createAccountError &&
              errorData
                .filter((e) => {
                  return e.param === "password";
                })
                .map((e, i) => (
                  <FormLabel key={i} mt={"5px"} color={"red"}>
                    {e.msg}
                  </FormLabel>
                ))}
          </Box>
          <Box mb={"20px"}>
            <Checkbox size={"lg"} defaultChecked>
              Keep me signed in
            </Checkbox>
          </Box>
          <Box>
            <Text></Text>
          </Box>
          <Box>
            <Button
              onClick={SendSignUpRequest}
              w={"100%"}
              bg={"#0693e3"}
              h={"55px"}
            >
              Sign in
            </Button>
          </Box>
          {/* <Box mt={"15px"} display="flex" justifyContent={"center"}>
            
            <Link to={""} style={{ color: "blue" }}>
              Forgot password?
            </Link>
          </Box> */}
          <Box mt={"15px"} display="flex" justifyContent={"center"}>
            <label htmlFor="">Don't have an account? </label>
            <label style={{ color: "white" }} htmlFor="">
              o
            </label>
            <Link to={"/signup"} style={{ color: "blue" }}>
              {" "}
              Sign up
            </Link>
          </Box>
          <Box mt={"25px"} display="flex" justifyContent={"center"}>
            <label htmlFor="">or continue with</label>
          </Box>
          <Box mt={"10px"} display="flex" justifyContent={"center"}>
            <AiFillApple
              size={"25px"}
              style={{ marginRight: "10px", cursor: "pointer" }}
            />
            <FcGoogle
              size={"25px"}
              style={{ marginRight: "10px", cursor: "pointer" }}
            />
            <AiFillFacebook
              size={"25px"}
              style={{ marginRight: "10px", cursor: "pointer" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
