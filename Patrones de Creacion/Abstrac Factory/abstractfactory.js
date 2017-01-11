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

class SportsCar extends Car
{
	constructor()
	{
		super();
		this.name = 'Deportivo';
		this.maxSpeed = '250 km/hr';
	}
}

class FamilyCar extends Car
{
	constructor()
	{	
		super();
		this.name ='Familiar';
		this.maxSpeeed ='150 km/hr';
	}
};

class AbstractFactory
{
	constructor()
	{
		console.log('fabrica construida')
		this.manufacture = null;
	}
	mensaje()
	{
		return 'fabricante '+ this.manufacture + ' and the maxspeed '+this.maxSpeed;
	}
	createCar(carType)
	{
		console.log('fabrica 1003')
	}
	get_factory(factoryName)
	{
		if(factoryName=='vm')
		{
			var newFactory = new VWFactory();
			return newFactory;
		}
		else if(factoryName == 'mb')
		{
			var newFactory = new MBFactory();
			return newFactory;
		}
		else
			console.log('Fabrica desconocida');
	}

};

class VWFactory extends AbstractFactory
{
	constructor()
	{
		super();
		this.manufacture = 'VW';
	}
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
class MBFactory extends AbstractFactory
{
	constructor()
	{
		super();
		this.manufacture = 'MB';
	}
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

AbstractFactory = new AbstractFactory();
VMFactory = AbstractFactory.get_factory('vm');
MBFactory = AbstractFactory.get_factory('mb')
console.log(VMFactory);
S = VMFactory.createCar('sports');
F = MBFactory.createCar('family');
console.log(S);
console.log(F);