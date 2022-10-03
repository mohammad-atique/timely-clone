const express = require("express");
const cors = require('cors');
const projectController  = require("./routes/project.route");
const userRoute = require("./routes/auth.route");
const authenticate = require("./middlewares/authMiddleware")
const profileRouter = require("./routes/editprofile.route")
const hoursRouter = require("./routes/hours.route")
const connect = require("./configs/db");
require("dotenv").config();
let port=process.env.PORT || 5000;

const app = express();

app.use(cors())

app.use(express.json());

app.get("/", (req,res)=> {
    res.send({
        "message":"Home Page"
    })
})

app.use("/auth",userRoute);
app.use("/profile",authenticate,profileRouter)
app.use("/hours",authenticate,hoursRouter)
app.use("/projects",authenticate,projectController)


app.listen(port, function() {

  try {
    connect();
    console.log(`listening on port ${port}`);
  } catch (err) {
    console.error(err.message);
  }
});


module.exports = app;