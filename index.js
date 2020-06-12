const express = require('express');
var app = express();
var server = require('http').Server(app);

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/index.html');
});
app.use('/client', express.static(__dirname + '/client'));

const PORT = process.env.PORT || 2000;
server.listen(PORT);