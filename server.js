const express = require("express");
const path = require("path");



const app = express();
const PORT = process.env.PORT || 8080;


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
    
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
    
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// If no matching route is found default to home
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
//This starts the server
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
