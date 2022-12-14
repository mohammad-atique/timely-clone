const mongoose=require("mongoose")

const projectSchema=new mongoose.Schema({

        userId:{type:String,required:true},
        projectName:{type:String,required:true},
        client:{type:String,required:true},
        tag:String
},{
    versionKey:false,
    timestamps:true
})


const ProjectModel=mongoose.model("timelyproject",projectSchema)

module.exports=ProjectModel


