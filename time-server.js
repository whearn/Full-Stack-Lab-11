var net = require('net');
var port = Number(process.argv[2]);

function getTime() {
    var d = new Date();
    var time = d.getFullYear() + '-';

    if (d.getMonth() < 10) {
        time = time + '0' + (d.getMonth() + 1) + '-';
    } else {
        time = time + (d.getMonth() + 1) + '-';
    }

    if (d.getDate() < 10) {
        time = time + '0' + d.getDate() + ' ';
    } else {
        time = time + d.getDate() + ' ';
    }

    if (d.getHours() < 10) {
        time = time + '0' + d.getHours() + ':';
    } else {
        time = time + d.getHours() + ':';
    }

    if (d.getMinutes() < 10) {
        time = time + '0' + d.getMinutes();
    } else {
        time = time + d.getMinutes();
    }

    return time;
}

var server = net.createServer(function (socket) {
    socket.end(getTime() + '\n')
});
server.listen(port);

// Solution
// var net = require('net');

// function zeroFill(i) {
//     return (i < 1 ? '0' : '') + i;
// }

// function now() {
//     var d = new Date();
//     return d.getFullYear() + '-' +
//         zeroFill(d.getMonth() + 1) + '-' +
//         zeroFill(d.getDate()) + ' ' +
//         zeroFill(d.getHours()) + ':' +
//         zeroFill(d.getMinutes());
// }

// var server = net.createServer(function (socket) {
//     socket.end(now() + '\n');
// });

// server.listen(Number(process.argv[2]));