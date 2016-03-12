var estilo1=function(){
	var myDiv=document.getElementById('myDiv');
	myDiv.className="rojo";
}

var estilo2=function(){
	var myDiv=document.getElementById('myDiv');
	myDiv.className="azul";
}

var noEstilo=function(){
	var myDiv=document.getElementById('myDiv');
	myDiv.className="";
}
 var permutar=function(){
	var myDiv=document.getElementById('myDiv');
	var x=myDiv.className;
	if (x==""){
		myDiv.className="rojo";
	}
	if (x=="rojo"){
		myDiv.className="azul";
	}
	if (x=="azul"){
		myDiv.className="";
	}
}
 var todos=function(){
	var misdivs=document.getElementsByTagName('div');
	for (var i = 0; i < misdivs.length; i++){
		misdivs[i].className="azul";
	}
}

var text=function(){
	var element = document.createElement("div");
		element.className ="texto";
	var textNode = document.createTextNode("Hello world!");
		element.appendChild(textNode);
		document.body.appendChild(element);
}

var left=function(){
	var misdivs=document.getElementById('myDiv');
	var attr =  document.createAttribute("align");
	attr.value = "left";
	myDiv.setAttributeNode(attr);
}

var center=function(){
	var misdivs=document.getElementById('myDiv');
	var attr =  document.createAttribute("align");
	attr.value = "center";
	myDiv.setAttributeNode(attr);
}

var rigth=function(){
	var misdivs=document.getElementById('myDiv');
	var attr =  document.createAttribute("align");
	attr.value = "rigth";
	myDiv.setAttributeNode(attr);
}
