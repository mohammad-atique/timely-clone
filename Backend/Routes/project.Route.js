const {Router}=require("express")
const  ProjectModel  = require("../models/project.model")

const projectController=Router()

projectController.get("/",async(req,res)=>{

    const {userId,name}=req.body
    const projects=await ProjectModel.find({userId:userId})

    if(!projects){
        return res.status(404).json({msg:"Something went wrong"})
    }
    
    return res.status(200).json({msg:"Proejcts fetched",name:name,projects:projects})

})
projectController.get("/:id",async(req,res)=>{
    
    const id=req.params.id
    const project=await ProjectModel.findOne({_id:id})
    if(!project){
        return res.status(404).json({msg:"Something went wrong"})
    }
     
    return res.status(200).json({msg:"Project Created",project:project})

})

projectController.get("/search",async(req,res)=>{

    const query=req.query.q 
    let data=await ProjectModel.find({projectName:{$regex:req.query.q}})
    if(!data){
        return res.status(500).json({msg:"Something went wrong, please try again."})
    }
    return res.status(200).json({data:data})

})


projectController.post("/create",async(req,res)=>{

    const{projectName,client,tag}=req.body
    const{_id}=req.user 
    const checkName= await ProjectModel.findOne({projectName:projectName})
    // console.log("checkName-->",checkName)
    if(!checkName){
        if(!_id||!projectName||!client||!tag){
            return res.status(400).json({msg:"Please fill all the input fields"})
        }
        const newPayload={projectName:projectName,client:client,tag:tag,userId:_id}
        const project=await new ProjectModel(newPayload)
    
        try{
            project.save()
            return res.status(201).json({msg:"Project Created"})
        }catch(err){
            console.log(err)
            return res.status(500).json({msg:"Something went wrong, please try again."})
        }
    }else{
        res.status(400).json({msg:"This project already exists, please choose another name for project."})
    }
    
    

})

projectController.patch("/update/:id",async(req,res)=>{
    
    const id=req.params.id
    const payload=req.body

    await ProjectModel.findByIdAndUpdate({_id:id},payload)

    try{
        return res.status(200).json({msg:"Project updated"})
    }catch(err){
        console.log(err)
        return res.status(500).json({msg:"Something went wrong"})
    }
})

projectController.delete("/:id",async(req,res)=>{
    
    const id=req.params.id

    await ProjectModel.findByIdAndDelete({_id:id})
    try{
        return res.status(200).json({msg:"Data deleted"})
    }catch(err){
        console.log(err)
        return res.status(500).json({msg:"Something went wrong"})
    }
})




module.exports=projectController
