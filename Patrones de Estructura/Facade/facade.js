class Scanner{
	constructor(){
		this.name = 'Scanner';
	}
}
class Parser{
	constructor(){
		this.name = 'Parser';

	}
}
class Compilador{
	constructor()
	{
		this.name = 'Compiler';
		this.scanner = new Scanner();
		this.parser = new Parser();
	}
	compile()
	{
		console.log('Compilando');
		console.log(this.scanner.name +'  '+ this.parser.name);
	}
}

compiler = new Compilador();
compiler.compile();

