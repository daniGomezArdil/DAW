window.onload = function(){
	var x=document.getElementById("benviar");
	x.onclick=validar;
	var elems=document.getElementsByTagName("input");
	for (var i=0;i<elems.length-1;i++){
		elems[i].onkeyup=validar;
	}
};


function validar(){
	var elems=document.getElementsByTagName("input");
	for (var i=0;i<elems.length-1;i++){
		var cual=elems[i].id.substring(1,elems[i].id.length);
		var eldiv=document.getElementById("error"+cual);

		if (elems[i].value==""){
			eldiv.className="visible";
		}
		else {
			eldiv.className="invisible";
		}
	}
}


