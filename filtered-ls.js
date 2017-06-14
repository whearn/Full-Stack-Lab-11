var fs = require('fs');
var path = require('path');
var file = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(file, function(err, list) {
    for (var i = 0; i < list.length; i++) {
        if (path.extname(list[i]) === extension) {
            console.log(list[i]);
        }
    }
});

// Solution
// var fs = require('fs');
// var path = require('path');

// var folder = process.argv[2];
// var ext = '.' + process.argv[3];

// fs.readdir(folder, function(err, files) {
//     if (err) {
//         return console.error(err);
//     }

//     files.forEach(function (file) {
//         if (path.extname(file) === ext) {
//             console.log(file);
//         }
//     })
// });