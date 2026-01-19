var express = require('express');
var bodyParser = require('body-parser');
var app = express(); 
var path = require ('path');

var URL = "http://backend-service:8000/submit";

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.post("/submit", async (req, res) => {
    const formData = req.body;
     console.log(formData)
    const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    });
     // var result = await response.json();
    res.json("Record is added");
    
 });

app.listen(3000, function(){
    console.log("Node js listening on port 3000");
})
