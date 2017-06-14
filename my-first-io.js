var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var str = buffer.toString().split('\n');

console.log(str.length - 1);

//solution
// var fs = require('fs');

// var contents = fs.readFileSync(process.argv[2]);
// var lines = contents.toString().split('\n').length - 1;
// console.log(lines);