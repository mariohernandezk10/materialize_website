var express = require('express');    //Express Web Server 
var path = require('path');     //used for file path

var app = express();
app.use(express.static(path.join(__dirname, 'materialize')));
 
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
})
 
app.listen(3000, () => console.log(`Running on port 3000`));