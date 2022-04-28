import {Shape} from "./Shape";
export class Rectangle extends Shape{
    private _width : number;
    private _length : number;

    constructor(color: string, filled: boolean, width: number, length: number) {
        super(color, filled);
        this._width = width;
        this._length = length;
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    get length(): number {
        return this._length;
    }

    set length(value: number) {
        this._length = value;
    }

    getArea() : number{
        return this.width * this.length;
    }

    getPeri() : number{
        return (this.width + this.length)*2;
    }

    toString(): string {
        return `A Rect with width = ${this.width} and length = ${this.length}, which is a subclass of Shape`;
    }
}