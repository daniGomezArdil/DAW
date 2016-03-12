function prueba1(){
	var misImagenes=document.getElementsByTagName('img');
	for (var i=0;i<misImagenes.length;i++){
		alert(misImagenes[i].src);
	}
}

function prueba2(){
	var misImagenes=document.getElementById('img1');
	alert(misImagenes.src);
}

function prueba3(){
	var misImagenes=document.getElementsByName('imagen2');
	alert(misImagenes[0].src);
}
