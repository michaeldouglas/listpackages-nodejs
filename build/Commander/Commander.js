"use strict";
var Commander = (function () {
    function Commander() {
    }
    Commander.prototype.execCommand = function (type) {
        if (type.listpackages) {
            console.log('  - %s peppers', type.listpackages);
        }
    };
    return Commander;
}());
exports.Commander = Commander;
