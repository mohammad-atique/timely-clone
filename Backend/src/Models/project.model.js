const mongoose=require("mongoose")

const projectSchema=new mongoose.Schema({

        projectName:{type:String,required:true},
        client:{type:String,required:true},
        tag:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
})


const ProjectModel=mongoose.model("timelyproject",projectSchema)

module.exports={
    ProjectModel
}

