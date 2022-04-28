"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this._color = color;
        this._filled = filled;
    }
    Object.defineProperty(Shape.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "filled", {
        get: function () {
            return this._filled;
        },
        set: function (value) {
            this._filled = value;
        },
        enumerable: false,
        configurable: true
    });
    Shape.prototype.toString = function () {
        return "A Shape with color of xxx and filled/not filled";
    };
    return Shape;
}());
exports.Shape = Shape;
