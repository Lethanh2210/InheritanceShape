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
exports.Square = void 0;
var Rectangle_1 = require("./Rectangle");
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color, filled, side) {
        var _this = _super.call(this, color, filled, side, side) || this;
        _this._side = side;
        return _this;
    }
    Object.defineProperty(Square.prototype, "side", {
        get: function () {
            return this._side;
        },
        set: function (value) {
            this._side = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Square.prototype, "width", {
        get: function () {
            return this.side;
        },
        set: function (side) {
            this.side = side;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Square.prototype, "length", {
        get: function () {
            return this.side;
        },
        set: function (side) {
            this.side = side;
        },
        enumerable: false,
        configurable: true
    });
    Square.prototype.toString = function () {
        return "A Square with side= ".concat(this.side, ", which is a subclass of yyy");
    };
    return Square;
}(Rectangle_1.Rectangle));
exports.Square = Square;
