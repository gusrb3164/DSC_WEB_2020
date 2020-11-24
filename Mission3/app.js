const fs = require("fs");
var dbFile = "db.json";
var dbDataBuffer = fs.readFileSync(dbFile);
var dbJSON = dbDataBuffer.toString();

const express = require("express");
const { captureRejectionSymbol } = require("events");
const { type } = require("os");
const e = require("express");
const app = express();
const PORT = 5000;
app.use(express.json());
app.get("/", (req, res) => {
  console.log("GET\t/");
  res.send("HELLo World!");
});

/*
 **	GET /todos/
 */

app.get("/todos/", (req, res) => {
  console.log("GET\t/todos/");
  //  dbJSON.success = true;
  try {
    res.json(dbJSON);
  } catch (e) {
    console.log("err");
  }
});

/*
 ** POST /todos/
 */

app.post("/todos/", (req, res) => {
  console.log("POST\t/todos/");
  try {
    const todo = req.body;
    var arr = new Array();
    var temp = JSON.parse(dbJSON).todos;
    arr = temp;
    arr.push(todo);
    const result = JSON.parse(dbJSON);
    result.todos = arr;
    var dataJson = JSON.stringify(result);
    fs.writeFileSync(dbFile, dataJson);
    res.send("success");
  } catch (e) {
    console.log(e);
  }
  console.log(req.body);
  console.log(dataJson);
});

/*
 **	PATCH /todos/:todo_id
 */

app.patch("/todos/:todo_id", (req, res) => {
  console.log("PATCH\t/todos/");
  try {
    var id = req.params.todo_id;
    var data = JSON.parse(dbJSON);
    for (var i = 0; i < data.todos.length; i++) {
      if (data.todos[i].id === Number(id)) {
        data.todos[i] = req.body;
        break;
      }
      if (i === data.todos.length - 1) {
        throw e;
      }
    }
    var dataJson = JSON.stringify(data);
    fs.writeFileSync(dbFile, dataJson);
    res.send("success");
  } catch (e) {
    res.send("fail");
    console.log("don't find data");
  }
});

/*
 **	DELETE /todos/:todo_id
 */

app.delete("/todos/:todo_id", (req, res) => {
  console.log("DELETE\t/todos/");
  try {
    var id = req.params.todo_id;
    var data = JSON.parse(dbJSON);
    for (var i = 0; i < data.todos.length; i++) {
      if (data.todos[i].id === Number(id)) {
        data.todos.splice(i, 1);
        break;
      }
      if (i === data.todos.length - 1) {
        throw e;
      }
    }
    var dataJson = JSON.stringify(data);
    fs.writeFileSync(dbFile, dataJson);
    res.send("success");
  } catch (e) {
    res.send("fail");
    console.log("don't find data");
  }
});

app.listen(PORT, () => {
  console.log("Something behind... you have to implement this...!");
  console.log(`Server is running and listening on port ${PORT}!`);
});
