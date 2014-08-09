var express = require('express');
var server = express();

server.configure(function(){
    server.use('/', express.static(__dirname + '/../static'));
    server.use(express.static(__dirname + '/../static'));
//    server.use(express.static(__dirname + '/public'));
});

console.log(process.env.PORT);
server.listen(process.env.PORT || 80);
