"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Commander_1 = require("./Commander/Commander");
var Packages = (function (_super) {
    __extends(Packages, _super);
    function Packages() {
        _super.apply(this, arguments);
        this.VERSION = "0.0.1";
    }
    Packages.prototype.setCommander = function (exec) {
        this.exec = exec;
    };
    Packages.prototype.getCommander = function () {
        return this.exec;
    };
    return Packages;
}(Commander_1.Commander));
var Package = new Packages();
module.exports = Package;
