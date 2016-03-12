// acceder a las imagenes y las dejamos en un array
function rutas (){
	//var misdivs=document.getElementsByTagName('div');
	var misImagenes=document.getElementsByTagName('img');
	for (var i=0;i<misImagenes.length;i++){
		var mibreak=document.createElement('br');
		var texto=(misImagenes[i].src);
		var textoNodo=document.createTextNode(texto);
		misImagenes[i].parentNode.appendChild(mibreak);
		misImagenes[i].parentNode.appendChild(textoNodo);
	}
	
}

function rutas2 (){
	var misDivs=document.getElementsByTagName('div');
	for (var i=0;i<misDivs.length;i++){
		var misImg=misDivs[i].getElementsByTagName('img');
		for (var j = 0; j < misImg.length; j++){
			var mibreak=document.createElement('br');
			misDivs[i].appendChild(mibreak);
			var miTexto=document.createTextNode(misImg[j].src);
			misDivs[i].appendChild(miTexto)
		}
	}
	
}
