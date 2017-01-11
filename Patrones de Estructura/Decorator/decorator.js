//Interface
class Shape
{
	draw()
	{
		console.log('figura')
	}
}
//Component
class Circle extends Shape
{
	draw()
	{
		console.log('soy un circulo')
	}
}
//Component
class Rectangle extends Shape
{
	draw()
	{
		console.log('soy un rectangulo')
	}
}
//Decorator
class ShapeDecorator
{
	constructor(decoratedShape)
	{
		this.decoratedShape = decoratedShape;
	}
	draw()
	{
		this.decoratedShape.draw();
	}
}
//ConcreteDecorator
class ColorRedShapeDecorator extends ShapeDecorator
{

	draw()
	{
		this.decoratedShape.draw();
		this.doSomethingElse();
	}
	doSomethingElse()
	{
		console.log('Coloreando de rojo')
	}
}

var circle = new Circle();
var redCircle = new ColorRedShapeDecorator(new Circle());
circle.draw();
redCircle.draw();