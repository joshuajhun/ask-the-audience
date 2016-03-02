const http     = require('http');
const express  = require('express');
const app     = express()
var server    = http.createServer(app)
const socketIo = require('socket.io');
const io       = socketIo(server);
var port      = process.env.PORT || 3000;

server.listen(port, function(){
  console.log('listening on port '+ port + '.');
});


app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFil(__dirname + '/public/index.html');
})



io.on('connection', function(socket){
  console.log('Suh dude.A user has connected.', io.engine.clientsCount);

  io.sockets.emit('userConnected', io.engine.clientsCount);

  socket.on('disconnect', function(){
    console.log('A user has disconnected.', io.engine.clientsCount);
  });
});



module.exports = server;
