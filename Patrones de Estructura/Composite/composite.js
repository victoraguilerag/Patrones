class Employee{
	constructor(name, dept, sal){
		this.name = name;
		this.dept = dept;	
		this.salary = sal;
		this.subordinates = [];
	}
	add(e){
		this.subordinates.push(e);
	}
	remove(e){
		this.subordinates.remove(e);
	}
	getSubordinates(){
		return this.subordinates;
	}
	toString(){
		return ('Employee: '+ this.name + '. ')
	}
}

var CEO = new Employee('John','CEO', 30000),
	headSales = new Employee('Robert','HeadSales', 20000),
	headMarketing = new Employee('Michel', 'HeadMarketing', 20000);

var clerk1 = new Employee('Laura', 'Marketing', 10000),
	clerk2 = new Employee('Bob','Marketing', 10000);

var salesExecutive1 = new Employee('Richard','Sales',10000),
	salesExecutive2 = new Employee('Rob', 'Sales', 10000);

CEO.add(headSales);
CEO.add(headMarketing);

headSales.add(salesExecutive1);
headSales.add(salesExecutive2);

headMarketing.add(clerk1);
headMarketing.add(clerk2);

console.log(CEO);

for(var empleado of CEO.getSubordinates()){
	console.log(empleado);
}			
