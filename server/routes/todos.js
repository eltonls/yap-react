const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

router.get("/", (req, res) => {

});

router.get("/:id", (req, res) => {
    res.send("Getting todo by id");
});

router.get("/:id/edit", (req, res) => {
    res.send("Editing todo by id");
})

router.post("/", async (req, res) => {
    // Create the new todo object
    const todo = new Todo({
        title: "New Todo",
    });

    // Use the built-in save method to save it in the DB
    await todo.save();

    // Send it back to the page
    res.send(camp);
})

module.exports = router;
