class iterator{
	constructor(){
		this.hasNext();
	}
	next(){

	}
}
class Container{
	getIterator(){

	}
}
class NameRepository extends Container{
	constructor(){
		super();
		this.names = ['Robert','John','Julie','Lora'];
	}
	getIterator(){
		return new NameIterator(this.names);
	}
	
}
class NameIterator extends iterator{
		constructor(name){
			super();
			this.index = 0;
			this.names = name;
		}
		hasNext(length){
			var lengt = length;
			if(this.index < lengt){
				
				return true;
			}
			return false;
		}
		next(){
			if(this.hasNext(this.names.length)){
				this.index = this.index + 1;			
				return this.names[this.index];
			}
			return null;
		}
	}


var nameRepository = new NameRepository(),
	nameIterator = nameRepository.getIterator();

while(nameIterator.hasNext(nameRepository.names.length)){
	console.log(nameRepository.names[nameIterator.index])
	nameIterator.next();

}
console.log('out')
