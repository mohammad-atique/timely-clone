const express = require("express");
const cors = require('cors');
const { projectController } = require("./Routes/project.Route");
const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: false,limit :'50mb' }));
app.use(express.json());
app.use("/projects",projectController)



app.get("/", (req,res)=> {
    res.send({
        "message":"Home Page"
    })
})







module.exports = app;