function cambia(){
	var cual=this.value.charAt(this.value.length-1);
	var que=this.value.substring(0,7);
	var clase="";
	var texto="";
	if (que=="Ocultar"){
		clase="invisible";
		texto="Mostrar";
	}
	else{
		clase="visible";
		texto="Ocultar";
	}
	var elem=document.getElementById("parrafo"+cual);
	elem.className=clase;
	this.value=texto+" parrafo "+cual;
	
	
}

var x=document.getElementsByTagName('input');
for (var i=0;i<x.length;i++){
	//Event Handler
	x[i].onclick=cambia;
	//Event listeners
	//x[i].addEventListener('click',cambia);
}
