//clase a filtrar
class Person{
	constructor(name,gender,maritalStatus){
		this. name = name;
		this.gender = gender;
		this.maritalStatus = maritalStatus;
	}
	getName(){
		return this.name;
	}
	getGender(){
		return this.gender;
	}
	getMarital(){
		return this.maritalStatus;
	}
}
//interfaz de criterio de filtro
class Criteria{
	constructor(){
		this.meetCriteria = [];
	}
}

// Instancias del filtro
class CriteriaMale extends Criteria {
	constructor(){
		super();
	}
	filtrar(Persons){
		for(var person of Persons){
			if(person.getGender() == 'Male'){
				this.meetCriteria.push(person);
			}
		}
		return this.meetCriteria;
	}
}

class CriteriaFemale extends Criteria {
	constructor(){
		super();
	}
	filtrar(Persons){
		for(var person of Persons){
			if(person.getGender() == 'Female'){
				this.meetCriteria.push(person);
			}
		}
		return this.meetCriteria;
	}
}

class CriteriaSingle extends Criteria {
	constructor(){
		super();
	}
	filtrar(Persons){
		for(var person of Persons){
			if(person.getMarital() == 'Single'){
				this.meetCriteria.push(person);
			}
		}
		return this.meetCriteria;
	}
}

var personas = [];
personas.push(new Person("Robert","Male", "Single"));
personas.push(new Person("John", "Male", "Married"));
personas.push(new Person("Laura", "Female", "Married"));
personas.push(new Person("Diana", "Female", "Single"));
personas.push(new Person("Mike", "Male", "Single"));
personas.push(new Person("Bobby", "Male", "Single"));

var hombres = new CriteriaMale();
var mujeres = new CriteriaFemale();
var soltero = new CriteriaSingle();

console.log(hombres.filtrar(personas));
console.log(mujeres.filtrar(personas));
console.log(soltero.filtrar(personas));