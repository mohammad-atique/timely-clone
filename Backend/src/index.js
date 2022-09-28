const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: false,limit :'50mb' }));
app.use(express.json());
app.get("/", (req,res)=> {
    res.send({
        "message":"Home Page"
    })
})







module.exports = app;