"use strict";
var Commander = (function () {
    function Commander() {
    }
    Commander.prototype.isAcceptable = function (s) {
        return s.length === 5;
    };
    return Commander;
}());
exports.Commander = Commander;
