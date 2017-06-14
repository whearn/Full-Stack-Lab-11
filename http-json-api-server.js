var http = require('http');
var url = require('url');
var port = Number(process.argv[2]);

var server = http.createServer(function(req, res) {
    url = url.parse(request.url, true);
});
server.listen(port);