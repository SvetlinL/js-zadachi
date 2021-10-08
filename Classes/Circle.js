class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get area(){
        return this._radius *2;
    }

    set area(value){
        this._radius = value / 2;
    }
}


const c = new Circle(4);
console.log(c.diameter);


console.log(c.diameter = 5);