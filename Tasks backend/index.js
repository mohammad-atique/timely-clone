const express = require("express")
const cors = require("cors")
const {tasksController} = require("./routes/tasks.routes")
const {connection} = require("./config/db")
require("dotenv").config()

const app = express();
const PORT = process.env.PORT || 8080

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Home page")
})

app.use(cors())

app.use("/tasks", tasksController)

app.listen(PORT, async () => {
    try{
        await connection;
        console.log("Connected to db")
    }
    catch(err){
        console.log("Error connnecting to DB")
        console.log(err)
    }
    console.log(`listening on PORT ${PORT}`)
})


// var aa ={
//     "Id": 2,
//     "Subject": 'Meeting',
//     "StartTime": new Date(2018, 1, 15, 10, 0),
//     "EndTime": new Date(2018, 1, 15, 12, 30),
//     "IsAllDay": false,
//     "Status": 'Completed',
//     "Priority": 'High',
//     "EventsType":"others"
//   }