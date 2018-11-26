var express = require('express');
var app = express();
var path = require('path');

console.log(__dirname);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.listen(3000);