"use strict";

export default class PersonsView{

	constructor(){
	}

	show(data){
		let preElement=document.createElement("pre");
		let numberOfPersons = data.persons.length;
		let output="";
		for (var i = 0; i < numberOfPersons; i++) {
			let person=data.persons[i];
		    output=output+ person.id+" "+person.name+ "\n";
		}
		let textNode=document.createTextNode(output);
		preElement.appendChild(textNode) ;
		document.getElementById('output').appendChild(preElement);
	}
}
