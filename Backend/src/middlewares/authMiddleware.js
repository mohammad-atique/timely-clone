const jwt = require('jsonwebtoken');

require("dotenv").config();
// console.log(process.env.SECRET)

const auth = (req,res,next)=>{
    var bearer = req.headers["authorization"];
    if(bearer){
        bearer = bearer.split(" ");
        let token = bearer[1];
        if(!token){
            return res.status(401).send({
                message:"Please login to continue."
               });
        }else{
            let SECRET = process.env.SECRET;
            try{

                var decoded = jwt.verify(token, SECRET);
                if(decoded){
                    req.user = decoded.data;
                    next();
                }else{
                    return res.status(401).send({
                        message:"Please login to continue."
                       });
                }
            }catch(err){
                if(err.expiredAt && err.expiredAt< new Date()){
                    return res.status(401).send({
                      message:"Session expired."
                    })
                  }else{
                    return res.status(401).send({
                     message:"Please login to continue."
                    })
                }
            }
        }
    }else{
        return res.status(401).send({
            message:"Please login to continue."
           });
    }
}

module.exports = auth;