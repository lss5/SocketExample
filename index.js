var app = require('express')();
var http = require('http').Server(app);

http.listen(3000, function(){
    console.log('HTTP server started on port 3000');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
    // res.send(html);
});

var io = require('socket.io')(http);
io.on('connection', function(socket){
  setInterval(function() {
    io.emit('testEvent', new Date());
  }, 3000);

    // socket.on('receivedFromClient', function (data) {
    //     console.log(data);
    // });
});