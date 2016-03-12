function prueba1(){
	var misImagenes=document.getElementsByTagName('img');
	for (var i=0;i<misImagenes.length;i++){
		alert(misImagenes[i].src);
	}
}

function prueba2(){
	var miImagen=document.getElementById('myImage2');
	alert (miImagen.src);
	
}