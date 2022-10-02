const express = require("express");
const cors = require('cors');
const { projectController } = require("./routes/project.Route");
const userRoute = require("./routes/auth.routes");
const authenticate = require("./middlewares/authMiddleware")
const profileRouter = require("./Routes/editProfile.route")
const hoursRouter = require("./Routes/hours.route")
const connect = require("./configs/db.js");
// const {tasksController} = require("./Routes/task.routes")
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
app.use("/profile",authenticate,profileRouter)
app.use("/hours",authenticate,hoursRouter)
app.use("/projects",authenticate,projectController)
// app.use("/tasks",authenticate,tasksController)



let port=process.env.PORT || 5000;

app.listen(port, function() {

  try {
    connect();
    console.log(`listening on port ${port}`);
  } catch (err) {
    console.error(err.message);
  }
});
module.exports = app;