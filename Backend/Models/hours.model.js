const mongoose=require("mongoose")

const hoursSchema=new mongoose.Schema({

        note:{type:String,required:true},
        projectId:{type:mongoose.Schema.Types.ObjectId,ref:"timelyproject",required:true},
        userId : {type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}
},{
    versionKey:false,
    timestamps:true
})


const HoursModel=mongoose.model("hours",hoursSchema)

module.exports= HoursModel


