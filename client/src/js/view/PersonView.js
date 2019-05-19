"use strict";

export default class PersonView{

	constructor(){
	}

	show(data){
		let preElement=document.createElement("pre");
		let person=data.person;
		let output=person.id+" "+person.name+ "\n";
		let textNode=document.createTextNode(output);
		preElement.appendChild(textNode) ;
		document.getElementById('output').appendChild(preElement);
	}
}
