import React from 'react'
import { Box, Button, LinkBox } from '@chakra-ui/react'
import { Stack, Grid, Heading, FormControl,
    FormLabel,Input, Radio, RadioGroup} from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'react-bootstrap/lib/Navbar'


const ProfileEditPage = () => {
    const [name, setName] = useState("Full Name");
    const [primaryEmail] = useState("Email");
    const [email, setEmail] = useState("Another Email")
    const [auth, setAuth] = useState('google');
    const [time, setTime] = useState('24');
    const [date, setDate] = useState('dmy');
    const [profile, setProfile] = useState("");


  return (
    <Box p="30px">
        <Heading p="7px" as='h1' size='2xl' fontWeight="">Edit Your Profile</Heading>
        <Box>
            <Stack direction={['column', 'column', 'row']} spacing='50px'>
                <Box p="3px">
                    <Grid  py="20px" gap="15px">
                        <Box>
                            <FormControl >
                                <FormLabel>Full Name</FormLabel>
                                <Input placeholder={name} />
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl >
                                <FormLabel>Primary Email</FormLabel>
                                <Input placeholder={primaryEmail}  color="black" isDisabled/>
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl >
                                <FormLabel>Add another Email</FormLabel>
                                <Input placeholder={email} />
                            </FormControl>
                        </Box>

                        <Box>
                            <FormLabel>Auth</FormLabel>
                            <RadioGroup onChange={setAuth} value={auth}>
                                <Stack direction='column'>
                                <Radio value='google'>Sign in with Google</Radio>
                                <Radio value='apple'>Sign in with Apple</Radio>
                                <Radio value='microsoft'>Sign in with Microsoft</Radio>
                                <Radio value='epassword'>Use email and password</Radio>
                                </Stack>
                            </RadioGroup>
                        </Box>

                        <Box>
                            <FormLabel>Time Zone</FormLabel>
                            <Input size="md"/>
                        </Box>

                        <Box>
                            <FormLabel>Time Format</FormLabel>
                            <RadioGroup onChange={setTime} value={time}>
                                <Stack direction='column'>
                                <Radio value='24'>16:34</Radio>
                                <Radio value='12'>4:34 PM</Radio>
                                </Stack>
                            </RadioGroup>
                        </Box>

                        <Box>
                            <FormLabel>Date Format</FormLabel>
                            <Box>
                                Only supported in report exports
                            <RadioGroup onChange={setDate} value={date}>
                                <Stack direction='column'>
                                <Radio value='dmy'>29/09/2022 (dmy)</Radio>
                                <Radio value='mdy'>09/29/2022 (mdy)</Radio>
                                </Stack>
                            </RadioGroup>
                            </Box>
                        </Box>

                        <Box>
                            <Text><Link>Download and email my personal data</Link></Text>
                        </Box>

                        <Box>
                            <Text><Link>Delete memories</Link></Text>
                        </Box>
                    </Grid>
                </Box>
                <Box>
                    <Box>
                        <Image height="100px" width="100px" src="https://www.gravatar.com/avatar/703cdd8e3cf3943cd35a09b2f5117aff?d=https%3A%2F%2Fd1vbcromo72rmd.cloudfront.net%2Fassets%2Fthumbs%2Fuser_large_retina-c403e04ad44c7d8b8c7904dc7e7c1893101f3672565370034edbe3dee9985509.jpg&s=200" />
                        <Text>
                            <Link color='#0099ff'>
                                Add Photo
                            </Link>
                        </Text>
                    </Box>
                </Box>
            </Stack>
        </Box>
        <Button colorScheme='whatsapp' size='md'>
            Update User
        </Button>
    </Box>
  )
}

export default ProfileEditPage