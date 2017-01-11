class DrawApi{
	drawCircle(radius, x, y){
		console.log('draw');
	}
}

class RedCircle extends DrawApi {
	drawCircle(radius, x, y) {
		console.log('Dibujando Circulo Color Rojo: radio'+ radius + ' x:'+x+' y:'+y);
	}
}

class GreenCircle extends DrawApi {
	drawCircle(radius, x, y){
		console.log('Dibujando Circulo  color Verde')
	}
}

class Shape{
	constructor(){
		var drawApi;
	}
}
class Circle extends Shape {
	constructor(x, y, radius, drawApi){
		super();
		this.drawApi = drawApi;
		this.x = x;
		this.y = y;
		this.radius = radius;
	}
	draw(){
		this.drawApi.drawCircle(this.radius, this.x, this.y);	}
}

var redCircle = new Circle(100,100,10, new RedCircle());
var greenCircle = new Circle(100,100,10, new GreenCircle());
console.log(redCircle);
redCircle.draw();
greenCircle.draw();