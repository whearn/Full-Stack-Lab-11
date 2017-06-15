var fs = require('fs');
var http = require('http');
var port = Number(process.argv[2]);
var file = process.argv[3];

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});
    fs.createReadStream(file).pipe(res);
});
server.listen(port);

// Solution
// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function (req, res) {
//     res.writeHead(200, { 'content-type': 'text/plain'});

//     fs.createReadStream(process.argv[3]).pipe(res);
// });
// server.listen(Number(process.argv[2]));

// In Class Solution
// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     // var readStream = fs.createReadStream(process.argv[3]);
//     // readStream.pipe(res);
//     fs.createReadStream(process.argv[3]).pipe(res);
// });

// server.listen(process.argv[2]);