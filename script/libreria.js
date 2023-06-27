
const obj=(selector, array=false )=>{

	if(array){
		return document.querySelectorAll(selector)
	}


	return document.getElementById(selector) || document.querySelector(selector)
}

const listen=( { element,event,action } )=>{

	if(typeof element=="object"){
		element.addEventListener(event,action)
		return element
	}

	obj(element).addEventListener(event,action)

	return obj(element)
	
}