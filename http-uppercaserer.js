var http = require('http');
//var map = require('through2-map');
var port = Number(process.argv[2]);

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        // req.pipe(map(function (chunk) {
        //     return chunk.toString().toUpperCase();
        // })).pipe(res);
        res.writeHead(200, {'Content-type' : 'text/html'});
        req.on('data', function(chunk) {
            res.write(chunk.toString().toUpperCase());
        })
    }
});
server.listen(port);

// Solution
// var http = require('http');
// var map = require('through2-map');

// var server = http.createServer(function(req, res) {
//     if(req.method !== 'POST') {
//         return res.end('send me a POST\n');
//     }
//     req.pipe(map(function(chunk) {
//         return chunk.toString().toUpperCase();
//     })).pipe(res);
// });

// server.listen(Number(process.argv[2]));

//In Class Solution
var http = require('http');

var server = http.createServer(function(req,res) {
    if (rec.method === 'POST') {
        var incomingData = '';
        //this will always be data
        req.on('data', function(data) {
            incomingData += data;
        });
        req.on('end', function() {
            // at this pint, we are guaranteed that all POST data has come in
            var upper = incomingData.toUpperCase();
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(upper);
        });
    }
})

server.listen(process.argv[2]);