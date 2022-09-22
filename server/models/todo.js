const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({ 
      title: String,
      state: Boolean,
      date: Date,
      priority: Number, 
})

// This will return a class
// So now Todo is a class that can be used
// to create the objects that will be passed
// to/from the database itself
const Todo = mongoose.model("Todo", todoSchema);
