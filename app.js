var http = require('http');

var server = http.createServer(function(request, response) {
	response.write('hi');
	response.end();
})

server.listen(3333, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log( 'Example app listening at http://%s', host, port);
});
