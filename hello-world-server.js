var http = require("http");
var port = parseInt(process.argv[2])

http.createServer(function (request, response) {
	if(request.url == "/health") {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end();
		return
	} 
	console.log(`Request received on ${request.url}`)
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello World\n');
}).listen(port);

// Console will print the message
console.log(`Server running at http://127.0.0.1:${port}/`);