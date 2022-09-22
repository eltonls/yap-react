const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/plannerApp", 
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Succesfully connected!");
  })
  .catch((err) => {
    console.log("Error :" + err);
  })


app.listen("3000", () => {
  console.log("Listenning on port 3000");
})
