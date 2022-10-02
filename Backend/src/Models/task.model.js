const mongoose = require("mongoose")


const taskSchema = new mongoose.Schema({
    
    userId : {type : String, required : true},
    Id:Number,
    Subject:String,
    StartTime: Object,
    EndTime: Object,
    IsAllDay: Boolean,
    EventsType: String,
    Status: String,
    Priority:String
})

const TaskModel = mongoose.model("task", taskSchema)


module.exports = {
    TaskModel
}