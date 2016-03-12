var estilo1=function(){
	var myDiv=document.getElementById('midiv');
	myDiv.className="rojo";
};

var estilo2=function(){
	var myDiv=document.getElementById('midiv');
	myDiv.className="azul";
};



var permutar=function(){
	var myDiv=document.getElementById('midiv');
	var x=myDiv.className;
	if (x=="rojo"){
		myDiv.className="azul";
	}
	if (x=="azul"){
		myDiv.className="";
	}
	if (x==""){
		myDiv.className="rojo";
	}
};


var todos=function(){
	var misdivs=document.getElementsByTagName('div');
	for (var i=0;i<misdivs.length;i++){
		misdivs[i].className="azul";
	}
};


var nuevo=function(){
	var element = document.createElement("div");
	element.className ="rojo";
	var textNode = document.createTextNode("Hello world!");
	element.appendChild(textNode);
	document.body.appendChild(element);
};
