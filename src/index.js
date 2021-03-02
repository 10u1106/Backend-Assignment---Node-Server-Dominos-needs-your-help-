var http = require('http');
const port = 8081;
const httpServer = http.createServer(handleServer);
var text = 

function handleServer(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200
    var url = req.url;

    if(url == '/welcome'){
        res.write('Welcome to Dominos!');
        res.end();
    }
    else if(url == '/contact'){
        res.write(`phone: '18602100000',
        email: 'guestcaredominos@jublfood.com'`);
        res.end();
    }
    else{
        res.statusCode = 404;
        end();
    }
}

handleServer.listen(port);
module.exports = httpServer;