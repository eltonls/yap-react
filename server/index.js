const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Routes
const todosRouter = require("./routes/todos");

mongoose.connect("mongodb://127.0.0.1:27017/plannerApp", 
  { useNewUrlParser: true, useUnifiedTopology: true }); 

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connectio error"));
db.once("open", () => {
    console.log("Database connected");
});

app.listen("8080", () => {
  console.log("Listenning on port 8080");
})

app.use("/todos", todosRouter);
