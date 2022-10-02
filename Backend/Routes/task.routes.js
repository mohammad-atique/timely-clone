const {Router} = require("express")
// const bcrypt = require("bcrypt")
// const jwt = require("jsonwebtoken")
require("dotenv").config()
// const {authentication} = require("../middlewares/authentication")

const {TaskModel} = require("../models/task.model")

const tasksController = Router();


tasksController.get("/", async (req, res) => { 
    const tasks = await TaskModel.find()
    res.send({tasks:tasks})
})


tasksController.post("/create", async (req, res) => {
   
    // const {Id,Subject,StartTime,EndTime,IsAllDay,EventsType,Status,Priority} = req.body;
    console.log(req.body)
    const task = new TaskModel(req.body)
    try{
        await task.save()
        res.send({task:task})
    }
    catch(err){
        res.send("something went wrong")
    }
})


tasksController.delete("/delete/:taskId", async (req, res) => {
    let {taskId} = req.params
    const deletedtask = await TaskModel.findOneAndDelete({Id:taskId},{new:true})
    // console.log(deletedtask,req.body.userId)
    if(deletedtask){
        res.status(200).send({task:deletedtask})
    }
    else{
        res.send("couldn't delete")
    }
})

tasksController.patch("/edit/:taskId", async (req, res) => {
    let {taskId} = req.params
    // taskId = parseInt(taskId)
    // console.log(taskId,typeof(taskId),req.body)

    const eiditedtask = await TaskModel.findOneAndUpdate({Id : taskId},req.body,{new:true})
    // console.log(eiditedtask)
    if(eiditedtask){
        res.send({task:eiditedtask})
    }
    else{
        res.send("couldn't edit");
    }
})


module.exports = {
    tasksController
}