const {Router} = require("express")
const {TaskModel} = require("../models/task.model")

const tasksController = Router();


tasksController.get("/", async (req, res) => { 
    const tasks = await TaskModel.find({userId : req.body.userId})
    res.send(tasks)
})


tasksController.post("/create", async (req, res) => {
    const {userId,Id,Subject,StartTime,EndTime,IsAllDay,EventsType,Status,Priority} = req.body;
    console.log(req.body)
    const task = new TaskModel({
        userId,Id,Subject,StartTime,EndTime,IsAllDay,EventsType,Status,Priority
    })
    try{
        await task.save()
        res.json("task created")
    }
    catch(err){
        res.send("something went wrong")
    }
})


tasksController.delete("/delete/:taskId", async (req, res) => {
    let {taskId} = req.params
    taskId = parseInt(taskId)
    console.log(taskId,typeof(taskId))
    const deletedtask = await TaskModel.findOneAndRemove({Id : taskId})
    // console.log(deletedtask,req.body.userId)
    if(deletedtask){
        res.status(200).send("Deleted")
    }
    else{
        res.send("couldn't delete")
    }
})

tasksController.patch("/edit/:taskId", async (req, res) => {
    let {taskId} = req.params
    taskId = parseInt(taskId)
    console.log(taskId,typeof(taskId),req.body)

    const eiditedtask = await TaskModel.findOneAndUpdate({Id : taskId},req.body)
    console.log(eiditedtask)
    if(eiditedtask){
        res.send("Edited")
    }
    else{
        res.send("couldn't edit");
    }
})


module.exports = {
    tasksController
}