import React, { useRef } from "react";
import { Box, Button, Image } from "@chakra-ui/react";
import {
  Stack,
  Grid,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "../Navbar";
import FileProf from "./FileProf";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../Redux/App-reducer/action";
var profilePic =
  "https://www.gravatar.com/avatar/15b2ee297b6b04c73a2db2cc1e83735b?d=https%3A%2F%2Fd1vbcromo72rmd.cloudfront.net%2Fassets%2Fthumbs%2Fuser_large_retina-c403e04ad44c7d8b8c7904dc7e7c1893101f3672565370034edbe3dee9985509.jpg&s=200";
const ProfileEditPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
// raw Data
    const [auth, setAuth] = useState("google");
    const [time, setTime] = useState("24");
    const [date, setDate] = useState("dmy");
    const [timez, setTimez] = useState("");
// fileData
    const [fileName, setFileName] = useState("");
// main Data
  const [useData, setUserData] = useState({});
  const inputRef = useRef();
  
  const { userData } = useSelector((store) => store.AppReducer);
  console.log("userData", userData);
  const { isAuth, token } = useSelector((store) => store.AuthReducer);
  console.log(isAuth, token);

  const handleChange = (e) => {
        const { name, value } = e.target;
    
        setUserData({
          ...userData,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append("fullName", userData.fullName);
            formData.append("email", userData.email);
            formData.append("password", userData.password);
        
            formData.append("image", inputRef.current.files[0]);
            // axios
            //   .patch("http://localhost:5000/profile/edit", formData, {
            //     headers: { "Content-Type": "multipart/form-data" ,'Authorization': 'Bearer ' + token},
            //   })
            //   .then((r) => console.log(r.data))
            //   .catch((e) => console.log(e.error));
          };


 
  
  useEffect(() => {
    const today = new Date();
    const str = today.toGMTString();
    setTimez(str);
  }, []);
  useEffect(() => {
    isAuth && dispatch(getProfile(token));
    setUserData(userData);
  }, [isAuth, token]);
  return (
    <Box>
      <Navbar />
      <Box
        display={"flex"}
        border="2px solid green"
        margin={"auto"}
        justifyContent="center"
      >
        <Box p="30px" border="2px solid black" marginLeft={"-25%"}>
          <Heading p="7px" as="h1" size="2xl" fontWeight="">
            Edit Your Profile
          </Heading>
          <Box>
            <Stack direction={["column", "column", "row"]} spacing="50px">
              <Box display={"flex"} flexDirection="column">
                <Box p="3px">
                  <Grid py="20px" gap="15px" width={"40rem"}>
                    <Box>
                      <FormControl>
                        <FormLabel>Full Name</FormLabel>
                        <Input
                            name="fullName"
                          placeholder={"Full Name"}
                          value={useData.fullName}
                        />
                      </FormControl>
                    </Box>

                    <Box>
                      <FormControl>
                        <FormLabel>Primary Email</FormLabel>
                        <Input
                          placeholder={"Email"}
                          color="black"
                          isDisabled
                          value={userData.email}
                        />
                      </FormControl>
                    </Box>

                    <Box>
                      <FormControl>
                        <FormLabel>Update Email</FormLabel>
                        <Input placeholder={"Update Email"} name="email" />
                      </FormControl>
                    </Box>

                    <Box>
                      <FormLabel>Auth</FormLabel>
                      <RadioGroup onChange={setAuth} value={auth}>
                        <Stack direction="column">
                          <Radio value="google">Sign in with Google</Radio>
                          <Radio value="apple">Sign in with Apple</Radio>
                          <Radio value="microsoft">
                            Sign in with Microsoft
                          </Radio>
                          <Radio value="epassword" defaultChecked>
                            Use email and password
                          </Radio>
                        </Stack>
                      </RadioGroup>
                    </Box>

                    <Box>
                      <FormLabel>Time Zone</FormLabel>
                      <Input size="md" value={timez} />
                    </Box>

                    <Box>
                      <FormLabel>Time Format</FormLabel>
                      <RadioGroup onChange={setTime} value={time}>
                        <Stack direction="column">
                          <Radio value="24" defaultChecked>
                            16:34
                          </Radio>
                          <Radio value="12">4:34 PM</Radio>
                        </Stack>
                      </RadioGroup>
                    </Box>

                    <Box>
                      <FormLabel>Date Format</FormLabel>
                      <Box>
                        <Box>Only supported in report exports</Box>
                        <RadioGroup onChange={setDate} value={date}>
                          <Stack direction="column">
                            <Radio value="dmy" defaultChecked>
                              29/09/2022 (dmy)
                            </Radio>
                            <Radio value="mdy">09/29/2022 (mdy)</Radio>
                          </Stack>
                        </RadioGroup>
                      </Box>
                    </Box>
                  </Grid>
                </Box>
                <Box>
                  <Button colorScheme="whatsapp" size="md">
                    Update User
                  </Button>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
        <Box
          border={"1px solid red"}
          textAlign="center"
          height={"fit-content"}
          padding="30px"
        >
          <Box padding="0.5rem">
            <Image
              src={userData?.profilePic ? userData?.profilePic : profilePic}
              width={"10rem"}
            />
          </Box>
          <Box padding="0.5rem">
            <div>
              <button
                onClick={() => {
                  inputRef.current.click();
                }}
                className="super-btn"
              >
                Upload Photo
              </button>
              <div>{fileName}</div>
              <input
                ref={inputRef}
                type="file"
                hidden
                onChange={(e) => {
                  setFileName(e.target.files[0].name);
                }}
              />
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileEditPage;
