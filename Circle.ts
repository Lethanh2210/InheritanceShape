import {Shape} from "./Shape";

export class Circle extends Shape {
    private _radius : number;

    constructor(color: string, filled: boolean, radius: number) {
        super(color, filled);
        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    getArea() : number{
        return this.radius * this.radius * Math.PI;
    }
    getPeri() : number{
        return 2*this.radius*Math.PI;
    }

    toString(): string {
        return `A Circle with radius= ${this.radius}, which is a subclass of Shape`;
    }
}