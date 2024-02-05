  //2.circle

  class Circle{
    constructor(radius,color)
    {
    this.radius=radius;
    this.color=color;
    }}
    var a = new Circle(1.0,"red");
     console.log(a);
     console.log(a.radius);
     console.log(a.radius,a.color);

//output
Circle { radius: 1, color: 'red' }
1
1 red


//getRadius
class Circle{
    constructor(radius, color){
        this.radius=radius;
        this.color=color;
    }
    
}var c= new Circle(1.0,"red");
console.log(c); 
//output Circle { radius: 1, color: 'red' }
console.log(c.radius);
//output 1
console.log(c.radius,c.color);
//output 1, red


//+getRadius()

class Circle{
    constructor(radius, color){
        this.radius=radius;
        this.color=color;
    }
    get value()
    {
        return (`Radius:${this.radius} `)
    }
    
}var c= new Circle(1.0,"red");
console.log(c.value);
 //output Radius:1 

//+setRadius(radius)

class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    
    set value(newRadius) {
        this.radius = newRadius;
    }
}
var c = new Circle(1.0, "red");
c.value = 2.0;
console.log(c.radius);
//output radius; 2

//getcolor
class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    
    get value() {
        return (`Color: ${this.color}`);
    }
}

var c = new Circle(1.0, "red");
console.log(c.value); 
//output color:red

//setcolor

class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    
    set value(newColor) {
        this.color = newColor;
    }
}

var c = new Circle(1.0, "red");
c.value = "black";
console.log(c.color);
//output setcolor ;black

//tostring()

class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    ToString() {
        return `Circle[Radius:${this.radius},Color:${this.color}]`;
    }
}
var c = new Circle(1.0, "red");
console.log(c.ToString()); 
//output; Call the ToString method with parentheses

//getArea ,//get cirumcumference

class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    } 
    getArea() {
        return Math.PI * this.radius* this.radius;
    }
    getCircumference() {
        return 2*Math.PI *this.radius;;
    }
}
var c = new Circle(1.0, "red");
console.log(`Area : ${c.getArea()}`);
console.log(`Circumference :${c.getCircumference()}`);

//output: Area : 3.141592653589793
//Circumference :6.283185307179586