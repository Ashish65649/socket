const express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile('C:\\Users\\imash\\OneDrive\\Desktop\\express\\index.html');
});

io.on('connection', function(socket){
    
    socket.on('mytype' , function(data) {
        socket.broadcast.emit('send', data);
    });

});

http.listen(8000, function(){
    console.log('listening on :8000');
});