var fs = require('fs');

//read this file (process.argv[2]), and then perform this callback (function(err, contents){})
fs.readFile(process.argv[2], function(err, contents) {
    //always print out the error if there is one
    if (err) {
        console.log(err);
    } else {
        var str = contents.toString().split('\n');

        console.log(str.length - 1);
    }
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