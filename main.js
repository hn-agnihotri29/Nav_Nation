const express = require('express')
const ejs = require('ejs')
const map = require(__dirname + "/main.js")
const https = require("https")
const path = require('path')

const app = express()

app.use(express.static(__dirname + "/public"))



app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.get("/path", function(req, res) {
    
    https.get("https://api.geoapify.com/v2/places?categories=commercial.supermarket&filter=circle:-87.770231,41.878968,5000&limit=20&apiKey=3027447efc564f43b4d80f1dc3675135"
    , function(response) {
        console.log(response.statusCode)
        response.on('data',  function(data) {
          const marketplace = JSON.parse(data)
          console.log(stringfying)
        })
    })
    res.send("Hello")
})

app.listen(3000, function() {
    console.log("Server is running on port 3000")
})