"use strict";

export default class ExceptionView{

	constructor(){
	}

	show(data){
		let preElement=document.createElement("pre");
		let exception=data.exception;
		let output=exception + "\n";
		let textNode=document.createTextNode(output);
		preElement.appendChild(textNode) ;
		document.getElementById('output').appendChild(preElement);
	}
}
