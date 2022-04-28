import {Circle} from "./Circle";
export class Cylinder extends Circle{
    private _height : number;

    constructor(color: string, filled: boolean, radius: number, height: number) {
        super(color, filled, radius);
        this._height = height;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

    getV() : number{
        return this.height * super.getArea();
    }
}