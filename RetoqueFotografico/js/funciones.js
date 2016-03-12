
// Variables globales
var canvas;
var ctx;

function inicializar(){
	canvas=document.getElementById("foto");
	ctx=canvas.getContext("2d");
};
function reset(){
	ctx.fillStyle="white";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	// opcion 1
	var imagen=document.getElementById("laimagen");
	// opcion 2
	//var imagen=new imagen();
	//imagen.src="img/laimagen";
	ctx.drawImage(imagen,0,0);
	
};
function full(){
	var imagen=document.getElementById("laimagen");
	ctx.drawImage(imagen,0,0,canvas.width,canvas.height);
};
function zoom(){
	var imagen=document.getElementById("laimagen");
	ctx.drawImage(imagen,30,50,50,100,0,0,canvas.width,canvas.height);
}
function infoPixel(){
	var datos=ctx.getImageData(0,0,1,1);
	var i;
	var aux="";
	for (i = 0; i < datos.data.length; i++){
		 aux=aux+datos.data[i]+", ";
	}
	alert(aux);
};
function colorAle(){
	var datos=ctx.createImageData(50,50);
	var i;
	
	for (i = 0; i < datos.data.length ; i++){
		if(i%3 !=0){
			datos.data[i]=Math.floor(Math.random()*255);
		}
		ctx.putImageData(datos,0,0);
	}
}
function puzzle(){
	var arrayImagenes = new Array();
	var i;
	var j;
	var w=Math.floor(canvas.width /3);
	var h=Math.floor(canvas.height /3);
	for (i = 0; i < 3; i++){
		for (j = 0; j < 3; j++){
			datos[(i*3)+j]=ctx.getImageData(i*w,j*w,w,h);
		}
		
	}
	ctx.putImageData(datos[8],0,0);
	ctx.putImageData(datos[3],w,0);
	ctx.putImageData(datos[0],w*2,0);
	ctx.putImageData(datos[2],0,h);
	ctx.putImageData(datos[4],w,h);
	ctx.putImageData(datos[1],w*2,h);
	ctx.putImageData(datos[5],0,h*2);
	ctx.putImageData(datos[6],w,h*2);
	ctx.putImageData(datos[7],w*2,h*2);
	/*
	var datos1=ctx.getImageData(0,0,canvas.width/2,canvas.height);
	var datos2=ctx.getImageData(canvas.width/2,0,canvas.width/2,canvas.height);
	
	ctx.putImageData(datos2,0,0);
	ctx.putImageData(datos1,canvas.width/2,0);
	*/
}
