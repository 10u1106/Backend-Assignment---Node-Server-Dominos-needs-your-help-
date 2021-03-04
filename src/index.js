var http = require('http');
const port = 8081;
const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
    // res.setHeader('Content-Type', 'text/plain');
    // res.statusCode = 200
    var url = req.url;

    if(url === '/welcome'){ 
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 200
        res.write('Welcome to Dominos!');
        res.end();
    }
    else if(url === '/contact'){
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200
        res.write(JSON.stringify({phone: '18602100000',
        email: 'guestcaredominos@jublfood.com'}));
        res.end();
    }
    else{
        res.statusCode = 404;
        res.end();
    }
}
httpServer.listen(port);
module.exports = httpServer;