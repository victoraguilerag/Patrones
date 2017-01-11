class Image{
	display(){
		console.log('interfaz');
	}
}

class RealImage extends Image {
	constructor(filename){
		super();
		this.filenam = filename;
		this.loadFromDisk(this.filenam);
	}
	display(){
		console.log('Displaying ' + this.filenam);
	}
	loadFromDisk(){
		console.log('Loading '+ this.filenam);
	}

}

class ProxyImage extends Image{
	constructor(filenam){
		super();
		this.filename = filenam;
		var realImage = null;
	}
	display(){
		if(this.realImage == null){
			this.realImage = new RealImage(this.filename);
		}
		this.realImage.display();
	}
}

var proxyImage = new ProxyImage('perrito caliente');

proxyImage.display();
proxyImage.display();