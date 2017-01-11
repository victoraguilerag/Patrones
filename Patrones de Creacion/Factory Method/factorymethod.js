// AbstractProduct
class Car
{
	constructor()
	{
		this.name = null;
		this.maxSpeed = null;
	}
	mensaje()
	{
		return 'name is '+ this.name + ' and the maxspeed '+this.maxSpeed;
	}

};
// ConcreteFactory
class SportsCar extends Car
{
	constructor()
	{
		super();
		this.name = 'Deportivo';
		this.maxSpeed = '250 km/hr';
	}
}
// ConcreteFactory
class FamilyCar extends Car
{
	constructor()
	{	
		super();
		this.name ='Familiar';
		this.maxSpeeed ='150 km/hr';
	}
};
//  AbstractFactory
class MyFactory
{
	createCar(carType)
	{
		this.car = null;
		if(carType == 'sports')
			this.car = new SportsCar();
		else if(carType == 'family')
			this.car = new FamilyCar();
		else
			console.log('Car type ' + carType +'is not defined')
		return this.car;
	}
	doSomething()
	{
		console.log(this.car)
	}
}

Factory = new MyFactory();

// Products
S = Factory.createCar('sports');
F = Factory.createCar('family');
console.log(S);
console.log(F);