class Publisher
{
	constructor()
	{
	 console.log('');	
	}
	addObserver()
	{

	}
	removeObserver()
	{

	}
	notifyAll()
	{
		
	}
}
class PlatziForum extends Publisher
{
	constructor()
	{
		super();
		this.userList = [];
		this.post = null;
	}
	addObserver(Observer)
	{
		var o = true;
		console.log(Observer)
		for(var i=0; i<this.userList.length;i++)
		{
			console.log(Observer.name);
			if(this.userList[i].name == Observer.name)
			{
				o = false;
			}
		}
		if(o)
		{
			this.userList.push(Observer);
		}
	}
	removeObserver()
	{
		this.userList.remove(Observer);
	}
	notifyAll()
	{

		for(var i=0;i<this.userList.length;i++)
		{
			this.userList[i].notify(this.post);
		}

	}
	writePost(text){
		this.post = text;
		this.notifyAll();
	}	
}
class Subscriber
{
	constructor(){
		console.log('subscribe')
	}
	
	notify(post)
	{
		console.log('notificando: ')
	}
}
class UserA extends Subscriber{
	
	constructor(){
		super();
		this.name ='usuario tipo A';
	}
	
	notify(post)
	{
		console.log('userA ha sido notificado: ' + post)
	}	
}
class UserB extends Subscriber{
	
	constructor(){
		super();
		this.name = 'usuario tipo B';
	}
	
	notify(post)
	{
		console.log('userA ha sido notificado: ' + post)
	}	
}

foroPlatzi = new PlatziForum()
user1 = new UserA();
user2 = new UserB();

foroPlatzi.addObserver(user1);
foroPlatzi.addObserver(user2);

foroPlatzi.writePost('Enviando desde el centro de informacion')