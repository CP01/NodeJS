var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
	fs.readFile('TestFile.html', function(err, data){
		res.writeHead(200, {'Content-Type': 'type/html'});
		res.write(data);
		res.end();
		
	});
}).listen(8888);