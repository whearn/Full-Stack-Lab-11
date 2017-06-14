var fs = require('fs');
fs.readFile(process.argv[2], function(err, contents) {
    var str = contents.toString().split('\n');

    console.log(str.length - 1);
});

// Solution
// var fs = require('fs');
// var file = process.argv[2];

// fs.readFile(file, function(err, contents) {
//     if (err) {
//         return console.log(err);
//     }
//     var lines = contents.toString().split('\n').length - 1;
//     console.log(lines);
// })