var http = require('http');

var port = 3333;

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello world\n');
}).listen(port);

console.log('server running @ port', port);