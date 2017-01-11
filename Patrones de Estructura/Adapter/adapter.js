function AdapteeShipping(){
	this.request = function(origen, destino, peso){
		this.origen = origen;
		this.destino = destino;
		this.peso = peso;
		this.total = peso * 100;
		return this.total;
	}
}

function TargetShipping(){
	this.login = function(credentials){
		// TODO
	};
	this.setOrigen = function(origen){
		//this.origen = origen;
	};
	this.setDestino = function(destino){
		//this.destino = destino;
	};
	this.calculate = function(peso){
		//this.peso = peso;
		total = peso * 100; //Math.round(Math.random()*4321);
		return total;
	};

}
function ShippingAdapter(credentials){

	var targetShipping = new TargetShipping();

	targetShipping.login();

	return {
		request: function(origen,destino, peso){
			targetShipping.setOrigen(origen);
			targetShipping.setDestino(destino);
			return targetShipping.calculate(peso);
		}
	}
}

function Client(){
	this.run = function() {
		var oldInterface = new AdapteeShipping();
		var cost = oldInterface.request("1234", "321", 123.45);
		console.log(cost);
		
		var mycred ='user/pass';
		var adapter = new ShippingAdapter(mycred);
		var newCost = adapter.request('1234','321',123.45);
		
		console.log('nuevo costo ' + newCost);
	}	
	
}

cliente = new Client();
cliente.run();