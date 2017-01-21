var Shapes = require('./Shapes.js');

//create a Square constructor,, using length as parameter
function Pentagon (length1, length2, length3, length4, length5){

	//properties
	 this.type = "Pentagon";
	 this.side1 = length1;
	 this.side2 = length2;
	 this.side3 = length3;
	 this.side4 = length4;
	 this.side5 = length5;
}

//export the Pentagon function
module.exports = Pentagon;