var Car = function (model,noise){
	this.model = model;
	this.noise = noise;
	this.number_wheels = 4;
};

Car.prototype.makeNoise = function(){
		console.log(this.noise + "!!!");
};

var car1 = new Car("porsche","brrrrr");
var car2 = new Car("ferrari","brrrrrrrrrrrrrr");

car1.makeNoise();
car2.makeNoise();



