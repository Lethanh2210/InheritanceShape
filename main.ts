import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";
import {Cylinder} from "./Cylinder";

let square: Square = new Square("Blue",true,10);
console.log(square);
console.log(square.toString());
let cycle : Cylinder = new Cylinder('Red', true, 10,10);
let result = cycle.getV().toFixed(2);
console.log(result);