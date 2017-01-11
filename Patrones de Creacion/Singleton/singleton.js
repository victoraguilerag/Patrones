var singleton = (function(){
	
	var instance;

	function init(){
		//Funcion de Creacion
		//Antes que se le asigne valor
		function privateMethod(){

			console.log('Metodo privado del singleton');
		}
		//Codigo de la instacia
		var privateNumber = Math.round(Math.random()*1000);
		
		return {
			//Asignacion de valor
			publicMethod: function(){
				console.log('dentro del metodo publico')
				privateMethod();
			},
			publicProperty: 'I am also public',
			getRandomNumber: function(){
				return privateNumber;
			}
		};		 
	};

	return {
		getInstance: function() {
			if ( !instance ){
				//Creacion de la instancia
				instance = init();
			}
			//Salida
			return instance;
		}
	};

})();	

var testOne = singleton.getInstance();
var testTwo = singleton.getInstance();
testOne.publicMethod();

console.log(testOne.getRandomNumber()+'  '+ testTwo.getRandomNumber())