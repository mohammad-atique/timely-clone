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
import { getProfile, updateProfile } from "../../Redux/App-reducer/action";
import Sidebar from "../Sidebar";
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
  const [userDataUpdate, setUserDataUpdate] = useState({});
  const inputRef = useRef();
  
  const { userData } = useSelector((store) => store.AppReducer);
  // console.log("userData", userData);
  const { isAuth, token } = useSelector((store) => store.AuthReducer);
  // console.log(isAuth, token);

  const handleChange = (e) => {
        const { name, value } = e.target;
    
        setUserDataUpdate({
          ...userDataUpdate,
          [name]: value,
        });
      };

      const handleSubmit = () => {
            
            const formData = new FormData();
            formData.append("fullName", userDataUpdate.fullName);
            formData.append("email", userDataUpdate.email);
            formData.append("image", inputRef.current.files[0]);
            // console.log("userData Modified==>",userDataUpdate);
           isAuth && dispatch(updateProfile({formData,token})).then(()=>dispatch(getProfile(token)))
          };


 
  
  useEffect(() => {
    const today = new Date();
    const str = today.toGMTString();
    setTimez(str);
  }, []);
  useEffect(() => {
    isAuth && dispatch(getProfile(token));
    setUserDataUpdate(userData);
  }, [isAuth, token]);
  return (
    <Box  display={"flex"}>
      <Sidebar />
      <Box
        display={"flex"}
        border="1px solid white"
        margin={"auto"}
        justifyContent="center"
      >
        <Box p="30px" border="1px solid white" marginLeft={"-25%"}>
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
                          value={userDataUpdate?.fullName ? userDataUpdate?.fullName : userData?.fullName}
                          onChange={handleChange}
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
                          value={userDataUpdate?.email ? userDataUpdate?.email : userData?.email}
                        />
                      </FormControl>
                    </Box>

                    <Box>
                      <FormControl>
                        <FormLabel>Update Email</FormLabel>
                        <Input placeholder={"Update Email"} name="email" onChange={handleChange}/>
                      </FormControl>
                    </Box>

                    <Box>
                      <FormLabel>Auth</FormLabel>
                      <RadioGroup onChange={setAuth} defaultValue="epassword">
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
                      <RadioGroup onChange={setTime} defaultValue="12">
                        <Stack direction="column">
                          <Radio value="24" defaultChecked>
                            18:00
                          </Radio>
                          <Radio value="12">6:00 PM</Radio>
                        </Stack>
                      </RadioGroup>
                    </Box>

                    <Box>
                      <FormLabel>Date Format</FormLabel>
                      <Box>
                        <Box>Only supported in report exports</Box>
                        <RadioGroup onChange={setDate} defaultValue="dmy">
                          <Stack direction="column">
                            <Radio value="dmy" defaultChecked>
                              02/10/2022 (dmy)
                            </Radio>
                            <Radio value="mdy">10/02/2022 (mdy)</Radio>
                          </Stack>
                        </RadioGroup>
                      </Box>
                    </Box>
                  </Grid>
                </Box>
                <Box>
                  <Button colorScheme="whatsapp" size="md" onClick={handleSubmit}>
                    Update User
                  </Button>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
        <Box
          border={"1px solid white"}
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
