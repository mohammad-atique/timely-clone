
const express = require("express");
const User = require("../models/user.model");
const uploads = require("../middlewares/uploads");
const uploadToCloudinary = require("../middlewares/cloudinary.upload");
require("dotenv").config();
const router = express.Router();

router.get("/",async(req,res)=>{
  try{
      const userId = req.user._id
      // console.log(userId)
      const user=await User.findOne({_id:userId})
      return res.status(200).json({msg:"user Fetched",user:user})
      
  
  }catch(err){
      return res.status(404).json({msg:err.message})
  }

})

router.patch("/edit",uploads.single("image"),async(req,res)=>{
    try {
        const user1 = await User.findOne({ email: req.user.email });
        // console.log("user1===>",req.body)
        if (user1) {

            var locaFilePath = req.file.path;
            // console.log("locaFilePath===>",locaFilePath)
            var result = await uploadToCloudinary(locaFilePath);
            // console.log("result===>",result)
            const user = await User.findOneAndUpdate({email:req.user.email},{profilePic: result.url,...req.body},{new:true})
            // console.log("res===.>",user)
            res.status(200).send({messsage:"Successfully Updated",data:user})
            
        } else {
            return res.status(401).send({
                message:"Not authorized"
               });
        }
      } catch (err) {
        return res.status(500).send({ message: err.message, data: err });
      }
    })

module.exports = router;