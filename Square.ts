import {Rectangle} from "./Rectangle";
export class Square extends Rectangle{
    private _side : number;

    constructor(color: string, filled: boolean, side: number) {
        super(color, filled, side, side);
        this._side = side;
    }

    get side(): number {
        return this._side;
    }

    set side(value: number) {
        this._side = value;
    }

    get width(): number {
        return this.side;
    }

    set width(side: number) {
         this.side = side;
    }

    get length(): number {
        return this.side;
    }

    set length(side: number) {
        this.side = side;
    }

    toString(): string {
        return `A Square with side= ${this.side}, which is a subclass of yyy`;
    }
}