const mongoose = require("mongoose");
const product =require("./product")
const mongoUri = "mongodb://127.0.0.1/phoneStore";
mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{console.log("db mongo connected")}).catch(err=>console.log(err));
const db = mongoose.connection;

module.exports = {
    db,
  };