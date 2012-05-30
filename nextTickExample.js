var http = require('http');

function compute() {
    // performs complicated calculations continuously
    // ...
    console.log("====");
    process.nextTick(compute);

}

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
}).listen(5000, '127.0.0.1');

compute();