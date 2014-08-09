var express = require('express'),
    server = express(),
    email = require('./email'),
    fs =  require('fs');


server.configure(function(){
    server.post('/submit', express.bodyParser(), mail);
    server.use('/', express.static(__dirname + '/../static'));
    server.use(express.static(__dirname + '/../static'));
});

server.listen(process.env.PORT || 80);

function mail(req, res) {
    console.log('got mail', req.body);

    if(!req.body)
    {
        res.send(200);
        return
    }

    var sender = req.body.email;
    var message = req.body.message;

    email.send(sender, message);

    fs.appendFile('emails.txt', new Date().toString() + ' ' + sender + ': ' + message + '\n');

    res.send(200);
}
