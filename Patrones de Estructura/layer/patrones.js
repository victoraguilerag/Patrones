//Patrones Layers
//Presentation Tier
class PresentationLayer
{
	constructor()
	{
		this.name = 'PresentationLayer';
	}
	setLowerLayer(lowerLayer)
	{
		this.lowerLayer = lowerLayer;
	}
	s3(param)
	{
		document.write('Entramos al servicio '+ this.name + '\n');
		this.lowerLayer.s2(param);
		document.write('Terminamos servicio '+this.name + '\n');	
	}
}
//Logic Tier
class LogicLayer
{
	constructor()
	{
		this.name = 'LogicLayer'
	}
	setLowerLayer(lowerLayer)
	{
		this.lowerLayer = lowerLayer;
	}
	s2(param)
	{
		document.write('Entramos al servicio ' + this.name + '\n');
		this.lowerLayer.s1(param);
		document.write('Terminamos servicio ' + this.name + '\n');	
	}
}

//Data Tier
class DataLayer
{
	constructor()
	{
		this.name = 'DataLayer';
	}
	setLowerLayer(lowerLayer)
	{
		this.lowerLayer = lowerLayer;
	}
	s1(param)
	{
		document.write('dentro de ' + this.name + '\n');
		document.write('ejecutamos s1 con ' + param + '\n');	
	}
}