
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaUserCircle } from "react-icons/fa";
import { Box, Flex, Text, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Select, Textarea, useToast } from "@chakra-ui/react";
//Init


const locales = {
  "en-In": require("date-fns/locale/en-IN"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2022, 9, 26),
    end: new Date(2022, 9, 26),
  },
  {
    title: "Vacation",
    allDay: true,
    start: new Date(2022, 12, 25),
    end: new Date(2023, 1, 2),
  },
  {
    title: "Conference",
    allDay: true,
    start: new Date(2022, 10, 1),
    end: new Date(2022, 10, 1),
  },
];
const Tasks = () => {
  const toast = useToast();
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sy, setsy] = useState("")
  const [sd, setsd] = useState("")
  const [sm, setsm] = useState("")
  const [ey, setey] = useState("")
  const [ed, seted] = useState("")
  const [em, setem] = useState("")
  const [selectedDate, setselectedDate] = useState("");
  const [endselectedDate, setendselectedDate] = useState("");
  const [title,settitle]= useState("");
  console.log(allEvents)
  // console.log(ed,em,ey)

  let y = ""
  let m = ""
  let d = ""
  // console.log(newEvent)

  // console.log(ey,ed,em)

  const handleAddEvent = async() => {
    await setNewEvent({ title: title,allDay: true, start: new Date(sy,sm,sd), end: new Date(ey,em,ed) });
    console.log(newEvent)
    setAllEvents([...allEvents, newEvent]);
  };


  const handleEvent = () => {
    setNewEvent({ title: title, start: new Date(sy,sm,sd), end: new Date(ey,em,ed) });
  };
  const handleselect = (value) => {
    console.log(value)
  }

// Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec
  
  const robin=(date)=>{
    let a = JSON.stringify(date)
    let sub =  a.substring(1, 11)
    let b = sub.split("-")
     y = parseInt(b[0])
    if(b[1][0]==0){
       m = parseInt(b[1][1])
    }
    else
    { m = parseInt(b[1])}
    if(b[2][0]==0){
       d = parseInt(b[2][1])
    }
    else
    { d = parseInt(b[2])}
    setsy(y)
    setsm(m-1)
    setsd(d+1)
  }


  const robins=(date)=>{
    let a = JSON.stringify(date)
    let sub =  a.substring(1, 11)
    let b = sub.split("-")
     y = parseInt(b[0])
    if(b[1][0]==0){
       m = parseInt(b[1][1])
    }
    else
    { m = parseInt(b[1])}
    if(b[2][0]==0){
       d = parseInt(b[2][1])
    }
    else
    { d = parseInt(b[2])}
    setey(y)
    setem(m-1)
    seted(d+1)
  }
  return (
    <div>

      <Box w="82.5%" margin={"auto"} mt="30px">
        <Button
          variant="solid"
          colorScheme="messenger"
          borderRadius="3px"
          size="md"
          position="absolute"
          right="21%"
          mt="-2px"
          onClick={onOpen}
        >
          Create Post
        </Button>
        <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader borderBottom="1px solid grey">
              <Flex
                alignItems="center"
                ml="5px"
                mr="5px"
                justifyContent="space-between"
              >
                <Text fontSize="sm">Campaign</Text>
                <Box w="280px">
                  <Select borderRadius="3px" placeholder="No Campaign" />
                </Box>
              </Flex>
            </ModalHeader>
            <ModalBody>
              <FaUserCircle icon="fa-duotone" size="26px" swapopacity="true" />
              <Textarea
                h="250px"
                mt="10px"
                onChange={(e) => settitle(e.target.value)}
                placeholder="What would you like to share?"
              />
              
              <Flex>
              <Box><Text>Start Date</Text>
                <DatePicker
                // // border={"1px solid balck"}
                selected={selectedDate}
                onChange={(date) => {setselectedDate(date);robin(date)}}
                placeholderText={'dd/mm/yyyy'}
                filterDate={date => date.getDay() !== 6 && date.getDay() !== 0} // weekends cancel
                showYearDropdown // year show and scrolldown alos
                scrollableYearDropdown
              /></Box>
              <Box><Text>End Date</Text>
              <DatePicker
                selected={endselectedDate}
                onChange={(date) => {setendselectedDate(date);robins(date);}}
                placeholderText={'dd/mm/yyyy'}
                filterDate={date => date.getDay() !== 6 && date.getDay() !== 0} // weekends cancel
                showYearDropdown // year show and scrolldown alos
                scrollableYearDropdown
              /></Box>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Flex gap="10px">
                <Button
                  colorScheme="gray"
                  borderRadius="3px"
                  onClick={() => {
                    handleAddEvent();
                    toast({
                      description: "Great! Your draft is saved.",
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });
                    onClose();
                  }}
                >
                  Save as Draft
                </Button>
                <Button
                  colorScheme="blue"
                  borderRadius="3px"
                  onClick={() => {
                    handleAddEvent();
                    toast({
                      description:
                        "Great! The post has been added to your queue.",
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });
                    onClose();
                  }}
                >
                  Add to Queue
                </Button>
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "83vh" }}
          defaultView='week'
          onSelectSlot={(slotInfo) => {
            slotInfo.style = { backgroud: "balck" }
          }}
          selectable
          popup={true}
        />
      </Box>
    </div>
  );
};
export default Tasks;
