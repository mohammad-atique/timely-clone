import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, ResourcesDirective, ResourceDirective } from '@syncfusion/ej2-react-schedule';
import { DataManager, UrlAdaptor } from "@syncfusion/ej2-data";
import { useState, useEffect } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import Sidebar from './Sidebar';


const ownerData = [
  { OwnerText: 'others', EventsType: "others", OwnerColor: 'grey' },
  { OwnerText: 'Public Event', EventsType: "public-event", OwnerColor: 'green' },
  { OwnerText: 'Commercial Event', EventsType: "commercial-event", OwnerColor: 'red' },
  { OwnerText: 'Family Event', EventsType: "family-event", OwnerColor: 'yellow' }
];

const Tasks = () => {
  const [datas, setdata] = useState([])
 
  const toast = useToast();

  console.log(datas)

  // ..............................................CRUD............................................................

  // const { isAuth, token } = useSelector((store) => store.AuthReducer)
  
  const getData = () => {
    fetch("https://mysterious-fjord-00613.herokuapp.com/tasks", {
        method: "GET",
        // headers: {
        //     'Authorization': `Bearer ${token}`
        // }
    })
        .then((res) => res.json())
        .then((res) => setdata(res))
        .catch((err) => console.log(err));

}


const posttask = (data) => {
  // console.log(username)
  


  fetch('https://mysterious-fjord-00613.herokuapp.com/tasks/create', {
      method: 'POST',
      headers: {
          // 'Authorization': `Bearer ${token}`,

          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify( data )
  })
      .then((res) => toast({
          title: 'Task Added Successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
        }))
      .catch((err) => console.log(err))}



const deletetask = (did) => {
console.log(did)

  fetch(`https://mysterious-fjord-00613.herokuapp.com/tasks/delete/${did}`, {
      method: 'DELETE',
      headers: {
          // 'Authorization': `Bearer ${token}`,

          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },

  })
      .then((res) => toast({
          title: 'Task deleted Successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
        }))

}

const edittask = (data,did) => {
console.log(did)


  fetch(`https://mysterious-fjord-00613.herokuapp.com/tasks/edit/${did}`, {
      method: 'PATCH',
      headers: {
          // 'Authorization': `Bearer ${token}`,

          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data })

  })
  .then((res) => toast({
      title: 'Task Edited..',
      status: 'success',
      duration: 3000,
      isClosable: true,
    }))
}
useEffect(() => {
  getData()
}, [])

//.................................................Frontend...................................................................................

  const dataManger = new DataManager({
    url: "http://localhost:54738/Home/LoadData", 
    crudUrl: "http://localhost:54738/Home/UpdateData",
    crossDomain: true,
    adaptor: new UrlAdaptor()
  });

  function onPopupClose(args) {
    // console.log(args.data)
    var datacard = args.data
    if (datacard) {
      let subject = datacard.Subject
      let StartTime = datacard.StartTime
      let EndTime = datacard.EndTime
      let IsAllDay = datacard.IsAllDay
      let EventType = datacard.EventsType
      // console.log(datas.length)
      

      if(ed==true)
      {
        var robin = {
          Id: id,
          Subject: subject,
          StartTime: StartTime,
          EndTime: EndTime,
          IsAllDay: IsAllDay,
          EventsType: EventType,
          Status: 'Completed',
          Priority: 'High'
        }
        edittask(robin,id)
        ed=false
      }
      if(pos==true)
      {
        var robin = {
          Id: datas.length + 1,
          Subject: subject,
          StartTime: StartTime,
          EndTime: EndTime,
          IsAllDay: IsAllDay,
          EventsType: EventType,
          Status: 'Completed',
          Priority: 'High'
        }
        posttask(robin)
        pos=false
      }
      if(dt==true)
      {
        
        deletetask(id)
        dt=false
      }
    }
  }
  var ed = false
  var pos = false
  var dt = false
  var id
  function onPopupOpen(args) {
    // console.log(args.data)
    console.log(args.data.Id)
    if (args.type == "DeleteAlert") {
        dt = true
        console.log("delete")
        id=args.data.Id

    }
    if (args.type == "Editor") {
      if (args.data.Id) {
        console.log("edit")
        id=args.data.Id
        ed=true
        pos = false
      }
      else {
        pos = true
        ed = false
        console.log("post")
      }
    }
  }

  
  return (
    <Flex width="100%">

      <Box><Sidebar/></Box>

      <Box width="75%">
        <ScheduleComponent
          height='550px'
          selectedDate={new Date()}
          showQuickInfo={false}
          popupOpen={(args) => onPopupOpen(args)}
          currentView="Week"
          popupClose={(args) => onPopupClose(args)}
          eventSettings={{
            dataSource: datas,
            fields: {
              id: "Id",
              subject: { name: "Subject" },
              startTime: { name: "StartTime" },
              endTime: { name: "EndTime" }
            }
          }}>
          <ResourcesDirective>
            <ResourceDirective field='EventsType' title='Event Type' name='Owners' allowMultiple={false} dataSource={ownerData} textField='OwnerText' idField='EventsType' colorField='OwnerColor'>
            </ResourceDirective>
          </ResourcesDirective>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent></Box>
      <Box width="15%" pt="10vh">

        <Flex width="100%" ml="10px" height="3vh"><Box width="10%" borderRadius='10px' bg="green"></Box><Text fontSize={"14px"} ml="7px">Public Event</Text></Flex><br />
        <Flex width="100%" ml="10px" height="3vh"><Box width="10%" borderRadius='10px' bg="red"></Box><Text fontSize={"14px"} ml="7px">Commercial Event</Text></Flex><br />
        <Flex width="100%" ml="10px" height="3vh"><Box width="10%" borderRadius='10px' bg="yellow"></Box><Text fontSize={"14px"} ml="7px">Family Event</Text></Flex><br />
        <Flex width="100%" ml="10px" height="3vh"><Box width="10%" borderRadius='10px' bg="grey"></Box><Text fontSize={"14px"} ml="7px">Other Events</Text></Flex>
      </Box>


    </Flex>
  )
}

export default Tasks