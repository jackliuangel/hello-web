var http = require('http');

var handleRequest = function(request, response) {
  var os = require("os");
  var hostname = os.hostname();
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello World! from '+ hostname);
};
var www = http.createServer(handleRequest);
www.listen(8080);
