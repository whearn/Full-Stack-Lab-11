// var http = require('http');
// var url = require('url');
// var port = Number(process.argv[2]);

// var server = http.createServer(function(req, res) {
//     url = url.parse(request.url, true);
// });
// server.listen(port);

// In Class
var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    if (req.method === 'GET') {
        // console.log(req.url);
        var urlData = url.parse(req.url, true);
        if (urlData.pathname === '/api/parsetime') {
            var d = new Date(urlData.query.iso);
            var data = {
                hour: d.getHours(),
                minute: d.getMinutes(),
                second: d.getSeconds()
            };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        } else if (urlData.pathname === '/api/unixtime') {
            var d = new Date(urlData.query.iso);
            var data = {
                unixtime: d.getTime()
            };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        } else {
            res.writeHead(404);
            res.end('');
        }
    }
});

server.listen(process.argv[2]);

//Official Solution
// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//  return {
//    hour: time.getHours(),
//    minute: time.getMinutes(),
//    second: time.getSeconds()
//  }
// }

// function unixtime (time) {
//  return { unixtime : time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//  var parsedUrl = url.parse(req.url, true)
//  var time = new Date(parsedUrl.query.iso)
//  var result

//  if (/^\/api\/parsetime/.test(req.url))
//    result = parsetime(time)
//  else if (/^\/api\/unixtime/.test(req.url))
//    result = unixtime(time)

//  if (result) {
//    res.writeHead(200, { 'Content-Type': 'application/json' })
//    res.end(JSON.stringify(result))
//  } else {
//    res.writeHead(404)
//    res.end()
//  }
// })
// server.listen(Number(process.argv[2]))


// function getUnixTimestamp(strtime) {
//   return {
//     unixtime: getTimestamp(strtime)
//   };
// }

// function getTimestamp(strtime) {
//   return Date.parse(strtime);
// }

// function getTimeObj(strtime) {
//   var date = new Date(getTimestamp(strtime));

//   return {
//     hour: date.getHours(),
//     minute: date.getMinutes(),
//     second: date.getSeconds()
//   };
// }