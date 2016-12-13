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
        return _super.apply(this, arguments) || this;
    }
    return Packages;
}(Commander_1.Commander));
Packages.VERSION = "0.0.1";
