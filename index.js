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
    .option('-P, --pineapple', 'Add pineapple')
    .option('-b, --bbq-sauce', 'Add bbq sauce')
    .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
    .parse(process.argv);

console.log('you ordered a pizza with:');
if (execFunc.peppers) console.log('  - peppers');
if (execFunc.pineapple) console.log('  - pineapple');
if (execFunc.bbqSauce) console.log('  - bbq');
console.log('  - %s cheese', execFunc.cheese);

// var cmd = 'ls -la';
//
// execFunc(cmd, function(error, stdout, stderr) {
//     console.log(stdout);
// });

// console.log(Packages.VERSION);