var socket = io();

var connectionCount = document.getElementById('connection-count');

socket.on('userConnected', function(count){
  connectionCount.innerText = 'Connected Users: ' + count;;
})
