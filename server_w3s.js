var http = require('http');
var url = require('url');

http.createServer(function(request, response){
response.writeHead(200,{"Content-Type": "text/plain"});
//response.write("Hello me to");
//response.write(request.url);
var q = url.parse(request.url, true).query;
var txt = q.year + " " + q.month;
response.end(txt);
response.end();
}).listen(8888);

