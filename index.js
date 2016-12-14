/**
 * Module dependencies.
 */

var program = require('commander');
var Packages = require(__dirname + '/build/Packages');
Packages.setCommander(program);


var execFunc = Packages.getCommander();

execFunc
    .version('0.0.1')
    .option('-p, --peppers', 'Add peppers')
    .parse(process.argv);

if (execFunc.peppers) console.log('  - %s peppers', execFunc.peppers);

// var cmd = 'ls -la';
//
// execFunc(cmd, function(error, stdout, stderr) {
//     console.log(stdout);
// });

// console.log(Packages.VERSION);