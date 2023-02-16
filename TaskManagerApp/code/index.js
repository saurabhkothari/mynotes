const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//const dbHost = process.env.DB_HOST || mongodb;
//const dbPort = process.env.DB_PORT || 27017 ;


app.use(express.static("public"));

// Connect to MongB
mongoose.connect("mongodb://mongodb:27017/taskmanager", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

console.log(process.env.DB_HOST);
console.log(process.env.DB_PORT);

// Create the task schema
const taskSchema = new mongoose.Schema({
  task: String,
});

// Create the Task model
const Task = mongoose.model("Task", taskSchema);

// Use body-parser to parse the request body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.json())
app.use(express.urlencoded())

// Get the list of tasks
app.get("/tasks", function(req, res) {
  Task.find({}, function(err, tasks) {
    res.send(tasks);
    
  });
});

// Add a new task
app.post("/tasks", function(req, res) {
  Task.create({ task: req.body.task }, function(err, task) {
    res.send({ task });
    
  });
});

// Delete a task
app.delete("/tasks/:id", function(req, res) {
  Task.findByIdAndDelete(req.params.id, function(err, task) {
    res.send(task);
  });
});

// Start the server
app.listen(3000, function() {
  console.log("Task manager app listening on port 3000!");
});
