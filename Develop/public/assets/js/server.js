// adding the packages required 

const express = require("express");

const app = express();


// adding req to code 

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

//routes are defined here

app.use(express.static(path.join(__dirname, "./public")))
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "./public/index.html")));
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "./public/notes.html")));
app.get("/api/notes", (req, res) => { res.json(notesDB)})

app.listen(3001, () => {  console.log(`API server now on port 3001!`);
});
