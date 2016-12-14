"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Commander_1 = require("./Commander/Commander");
var program = require('commander');
var Packages = (function (_super) {
    __extends(Packages, _super);
    function Packages(program) {
        this.VERSION = "0.0.1";
        this.program = program;
    }
    Packages.prototype.setProcess = function (process) {
        this.setOptions(process);
    };
    Packages.prototype.setOptions = function (process) {
        this.program.version(this.VERSION).option('-l, --listpackages', 'Lista os pacotes NodeJSInstalados').parse(process);
    };
    Packages.prototype.getCommander = function () {
        return this.program;
    };
    Packages.prototype.execute = function (type) {
        this.execCommand(this.program);
    };
    return Packages;
}(Commander_1.Commander));
var Package = new Packages(program);
module.exports = Package;
