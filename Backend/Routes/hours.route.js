const {Router}=require("express")
const  HoursModel  = require("../models/hours.model")

const router=Router()

router.get("/",async(req,res)=>{
try{
    const userId = req.user._id
    // console.log(userId)
    const hours=await HoursModel.find({userId:userId}).populate([{
        path: 'projectId',
        model: 'timelyproject',
        select: 'projectName tag'
        
    },{
        path: 'userId',
        model: 'user',
        select: 'fullName'
    }])
    // console.log(hours)
    return res.status(200).json({msg:"Hours fetched",hours:hours})
    

}catch(err){
    return res.status(404).json({msg:err.message})
}
    

})

router.post("/create",async(req,res)=>{
console.log("body",req.body)
    
        try{
            const hour=new HoursModel(req.body)
            
            await hour.save()
            return res.status(201).json({msg:"Hours Created",hour:hour})
        }catch(err){
            console.log(err)
            return res.status(500).json({msg:err.message})
        }
   
})

router.patch("/update/:id",async(req,res)=>{
    
    try{
        const hour = await HoursModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).json({msg:"Hours updated",hour:hour})
    }catch(err){
        console.log(err)
        return res.status(500).json({msg:"Something went wrong"})
    }
})

router.delete("/:id",async(req,res)=>{
    
    try{
        const hour = await HoursModel.findByIdAndDelete(req.params.id,{new:true})
        return res.status(200).json({msg:"Data deleted",hour:hour})
    }catch(err){
        console.log(err)
        return res.status(500).json({msg:"Something went wrong"})
    }
})




module.exports=router
