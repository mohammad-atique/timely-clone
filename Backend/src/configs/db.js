const mongoose = require("mongoose");

require("dotenv").config();
// console.log(process.env.mongo_url)

module.exports = () => {
  return mongoose.connect(
    process.env.MONGO_URL ,
    {useNewUrlParser: true,useUnifiedTopology: true,}
  );
};