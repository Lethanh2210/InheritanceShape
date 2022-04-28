"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cylinder = void 0;
var Circle_1 = require("./Circle");
var Cylinder = /** @class */ (function (_super) {
    __extends(Cylinder, _super);
    function Cylinder(color, filled, radius, height) {
        var _this = _super.call(this, color, filled, radius) || this;
        _this._height = height;
        return _this;
    }
    Object.defineProperty(Cylinder.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
        },
        enumerable: false,
        configurable: true
    });
    Cylinder.prototype.getV = function () {
        return this.height * _super.prototype.getArea.call(this);
    };
    return Cylinder;
}(Circle_1.Circle));
exports.Cylinder = Cylinder;
