const {Router}=require("express")

const projectController=Router()

projectController.get("/",(req,res)=>{

    res.status(200).json({msg:"Welcome to projects page"})
    
})

module.exports={
    projectController
}