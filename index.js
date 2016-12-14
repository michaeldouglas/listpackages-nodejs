/**
 * Exec command
 */
var Packages = require(__dirname + '/build/Packages');
Packages.setProcess(process.argv);
Packages.execute('teste');