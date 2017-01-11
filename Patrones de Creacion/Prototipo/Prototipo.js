class Shape{
	constructor(){
		var id;
		var type;		
	}

	getType(){
		var type = this.type;
		return type;
	}
	getId(){
		var id = this.id;
		return id;
	}
	setId(id){
		this.id = id;
	}
	clone(){
		var clone = this;
		return clone;
	}
}

class Rectangle extends Shape{
	constructor(){
		super();
		this.type = 'Rectangle';
	}
	draw(){
		console.log('Inside Rectangle: draw() method.');
	}
}

class Square extends Shape{
	constructor(){
		super();
		this.type = 'Square';
	}
	draw(){
		console.log('Inside Square: draw() method.');
	}
}

class Circle extends Shape{
	constructor(){
		super();
		this.type = 'Circle';
	}
	draw(){
		console.log('Inside Circle: draw() method.');
	}
}

class ShapeCache{
	constructor(){
		var Hash;
	}
	getShape(shapeId){
		var clon;
		this.Hash.map(function(Shape){
			if(Shape.id == shapeId){
				clon = Shape.clone();
			}
		})
		console.log(clon)
		return clon;
	}
	loadCache(){
		var Shapes = [];

		var circulo = new Circle();
		circulo.setId('1');
		Shapes.push(circulo);

		var cuadro = new Square();
		cuadro.setId('2');
		Shapes.push(cuadro);

		var rectangulo = new Rectangle();
		rectangulo.setId('3');
		Shapes.push(rectangulo);
		
		this.Hash = Shapes;
	}
}

var hash = new ShapeCache();
hash.loadCache();
var clon1 = hash.getShape('1');
clon1.draw();
var clon2 = hash.getShape('2');
clon2.draw();
var clon3 = hash.getShape('3');
clon3.draw();


/*console.log(clon1);
console.log(clon2);
console.log(clon3);*/
