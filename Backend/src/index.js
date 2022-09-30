const express = require("express");
const cors = require('cors');
const { projectController } = require("./routes/project.Route");
const userRoute = require("./routes/auth.routes");
const authenticate = require("./middlewares/authMiddleware")
const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: false,limit :'50mb' }));
app.use(express.json());


app.get("/", (req,res)=> {
    res.send({
        "message":"Home Page"
    })
})
app.use("/auth",userRoute);
app.use("/projects",projectController)







module.exports = app;