class Command
{
	execute()
	{}
}
class Light
{
	//Receiver
	prendido()
	{
		console.log('foco prendido');
	}
	apagado()
	{
		console.log('foco apagado');
	}
}
class Switch
{
	//Invoker
	constructor(onCommand,offCommand)
	{
		//boolean prendido;
		this.onCommand = new OnCommand();
		this.offCommand = new OffCommand();
	}

	on()
	{
		this.onCommand.execute();
	}

	off()
	{
		this.offCommand.execute();
	}

}	
class OnCommand
{
	constructor()
	{
		this.light = new Light();
	}
	setLight(light)
	{
		this.light = light;
	}
	execute()
	{
		this.light.prendido();
	}
}
class OffCommand
{
	constructor()
	{
		this.light = new Light();
	}
	setLight(light)
	{
		this.light = light;
	}
	execute()
	{
		this.light.apagado();
	}

}

class LightSwitch
{
	constructor()
	{
		this.foco = new Light();
		this.switchup = new OnCommand();
		this.switchup.setLight(this.foco);
		this.switchdown = new OffCommand();
		this.switchdown.setLight(this.foco);
		this.switch = new Switch(this.switchup,this.switchdown);
	}
	operation(cmd)
	{
		if(cmd =='On'){
			this.switch.on();
		}
		else if(cmd=='Off'){
			this.switch.off();
		}
		else{
			console.log('Operacion Invalida');
		}
	}
}

client = new LightSwitch();
console.log('probando');
client.operation('On');
client.operation('Off');