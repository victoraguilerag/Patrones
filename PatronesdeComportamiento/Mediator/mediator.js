class ChatRoom {
	showMessage(user, message){
		console.log(user);
		var hora = new Date;
		console.log(hora + ' ['+ user.getName() + '] : ' + message);
	}
}

class User {
	constructor(name){
		this.name = name;
	}
	getName(){

		return this.name;
	}
	setName(name){
		this.name = name;
	}
	sendMessage(message,chatRoom){
		chatRoom.showMessage(this, message);
	}
}

var robert = new User('Robert'),
	john = new User('John');

var chatRoom = new ChatRoom();
robert.sendMessage('Hi! John!',chatRoom);
john.sendMessage('Hello! Robert!',chatRoom);