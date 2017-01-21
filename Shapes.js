//import content of Square.js
var Square = require('./Square');

//import content of Triangle.js
var Triangle = require('./Triangle');

//import content of Pentagon.js
var Pentagon = require('./Pentagon');


//create a Constructor 
function Shapes(type){

	//property of type
	this.type = type;
}

//adding a method to the Constructor so that it will be global to all functions
Shapes.prototype.get_type = function(){
	console.log("This shape is " + this.type);
	return;
}

//adding a method to the Constructor so that it will be global to all functions
Shapes.prototype.get_circumference = function(){
	
	//circumference variable
	var circumference;

	//if the type of shape is a (Triangle/Square/Pentagon) to calculate the circumference 
	if (this.type === "Triangle"){
		circumference = this.side1 + this.side2 + this.side3;
	}else if(this.type === "Square"){
		circumference = this.side * this.side;
	}else if(this.type === "Pentagon"){
		circumference = this.side1 + this.side2 + this.side3 + this.side4 + this.side5;
	}

    //console out the circumference of the shape
	console.log("The circumference of this " + this.type + " is " + circumference + ".");
}


//////////////////SHAPE////////////////////

//create an object for the Shape constructor
var myShape = new Shapes("any shapes");

//show the object result 
console.log(myShape);

//calling the get_type method
myShape.get_type();

//check whether object is the instance of the Constructor
console.log("This is an instance of Shape Function: "+(myShape instanceof Shapes));
console.log("----------------------------");



///////////////TRIANGLE/////////////////

//Setting the prototype of Triangle to the prototype of Shape
Triangle.prototype = new Shapes();
Triangle.prototype.constructor = Triangle();

//create an object for the Shape constructor
var myTriangle = new Triangle(3, 4, 5);

//show the object result 
console.log(myTriangle);

//calling the get_type method
myTriangle.get_type();

//calling the get_circumference method
myTriangle.get_circumference();

//check whether object is the instance of the Constructor
console.log("This is an instance of Triangle Function: "+(myTriangle instanceof Triangle));
console.log("----------------------------");



/////////////////SQUARE/////////////////

//Setting the prototype of Square to the prototype of Shape
Square.prototype = new Shapes();
Square.prototype.constructor = Square();

//create an object for the Shape constructor
var mySquare = new Square(4);

//show the object result 
console.log(mySquare);

//calling the get_type method
mySquare.get_type();

//calling the get_circumference method
mySquare.get_circumference();

//check whether object is the instance of the Constructor
console.log("This is an instance of Square Function: "+(mySquare instanceof Square));
console.log("----------------------------");


////////////PENTAGON////////////////

//Setting the prototype of Pentagon to the prototype of Shape
Pentagon.prototype = new Shapes();
Pentagon.prototype.constructor = Pentagon();

//create an object for the Shape constructor
var myPentagon = new Pentagon(3, 3, 4, 4, 5);

//show the object result 
console.log(myPentagon);

//calling the get_type method
myPentagon.get_type();

//calling the get_circumference method
myPentagon.get_circumference();

//check whether object is the instance of the Constructor
console.log("This is an instance of Pentagon Function: "+(myPentagon instanceof Pentagon));
console.log("----------------------------");










