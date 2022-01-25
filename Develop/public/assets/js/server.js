// adding the packages required 

//const PORT = process.env.PORT || 3001 ; 

const fs = require("fs");

const express = require("express");

const app = express();

const path = require("path");

var notesDB = require("db/db.json");

// adding routes to code 

app.post("/api/notes", (req, res) => {
    const newNote = req.body;
  
    notesDB.push(newNote);
  
    fs.writeFileSync("db/db.json", JSON.stringify(notesDB));
    res.json(notesDB);
});



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes are defined here

app.use(express.static(path.join(__dirname, "./public")));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "./public/index.html")));
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "./public/notes.html")));

//app.get("/api/notes", (req, res) => { res.json(notesDB)});

app.listen(3001, () => {  console.log(`API server now on port 3001!`);
});
