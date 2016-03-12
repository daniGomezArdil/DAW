//variables globales
//hacer boton file para pillar la imagen :D
var canvas;
var ctx;

var reset = function(){
	ctx.fillStyle="white";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	var imagen = new Image();
	imagen.src="img/gato.jpg";
	ctx.drawImage(imagen,0,0)
}

var inicializar = function(){
	canvas = document.getElementById("retoque");
	ctx = canvas.getContext("2d");
}

var full = function(){
	var imagen = new Image();
	imagen.src="img/gato.jpg";
	ctx.drawImage(imagen,0,0,canvas.width,canvas.height)
}

var zoom = function(){
	var imagen = new Image();
	imagen.src="img/gato.jpg";
	ctx.drawImage(imagen,200,150,200,100,0,0,canvas.width,canvas.height)
}
var infoPixel = function(){
	var datos = ctx.getImageData(0,0,2,1);
	var aux="";
	for (var i = 0 ; i < datos.data.length ; i++){
		aux+= datos.data[i]+", ";
	}
	alert(aux);
}

var aleatorizar= function(){
	var cont = 0;
	var datos = ctx.createImageData(150,150);
	for (var i = 0 ; i < datos.data.length ; i++){
		datos.data[i] = (i%3 == 0)?datos.data[i]:Math.floor(Math.random()*255);
	}
	ctx.putImageData(datos,0,0);
}

var puzzle= function(){
	var cont = 0;
	var arDatos = new Array(9);
	for (var i = 0; i < 3; i++){
		for (var j = 0; j < 3; j++){
			arDatos[cont] = ctx.getImageData(i*300,j*300,300,300);
			cont++;
		}
	}
	cont =0;
	var nums = [7,2,1,4,8,6,5,0,3];
	for (var i = 0; i < 3; i++){
		for (var j = 0; j < 3; j++){
			var num =nums[cont];
			ctx.putImageData(arDatos[num],(i*300),(j*300));
			cont++;
		}
	}
}

var filtroClaridad = function (){
	var modified = ctx.createImageData(canvas.width,canvas.height);
	var imagedata = ctx.getImageData(0,0,canvas.width,canvas.height);
	for (var i=0; i<imagedata.data.length; i+=4) {
		var rgba = claridad (imagedata.data[i+0],imagedata.data[i+1],
		imagedata.data[i+2], imagedata.data[i+3] );
		modified.data[i+0] = rgba[0];
		modified.data[i+1] = rgba[1];
		modified.data[i+2] = rgba[2];
		modified.data[i+3] = rgba[3];
	}
	ctx.putImageData(modified,0,0);
}

var filtroLuminosidad = function (){
	var modified = ctx.createImageData(canvas.width,canvas.height);
	var imagedata = ctx.getImageData(0,0,canvas.width,canvas.height);
	for (var i=0; i<imagedata.data.length; i+=4) {
		var rgba = luminosidad (imagedata.data[i+0],imagedata.data[i+1],
		imagedata.data[i+2], imagedata.data[i+3] );
		modified.data[i+0] = rgba[0];
		modified.data[i+1] = rgba[1];
		modified.data[i+2] = rgba[2];
		modified.data[i+3] = rgba[3];
	}
	ctx.putImageData(modified,0,0);
}

var filtroMedia = function (){
	var modified = ctx.createImageData(canvas.width,canvas.height);
	var imagedata = ctx.getImageData(0,0,canvas.width,canvas.height);
	for (var i=0; i<imagedata.data.length; i+=4) {
		var rgba = media (imagedata.data[i+0],imagedata.data[i+1],
		imagedata.data[i+2], imagedata.data[i+3] );
		modified.data[i+0] = rgba[0];
		modified.data[i+1] = rgba[1];
		modified.data[i+2] = rgba[2];
		modified.data[i+3] = rgba[3];
	}
	ctx.putImageData(modified,0,0);
}

var filtroSepia = function (){
	var modified = ctx.createImageData(canvas.width,canvas.height);
	var imagedata = ctx.getImageData(0,0,canvas.width,canvas.height);
	for (var i=0; i<imagedata.data.length; i+=4) {
		var rgba = sepiaTone (imagedata.data[i+0],imagedata.data[i+1],
		imagedata.data[i+2], imagedata.data[i+3] );
		modified.data[i+0] = rgba[0];
		modified.data[i+1] = rgba[1];
		modified.data[i+2] = rgba[2];
		modified.data[i+3] = rgba[3];
	}
	ctx.putImageData(modified,0,0);
}

var filtroInvertido = function (){
	var modified = ctx.createImageData(canvas.width,canvas.height);
	var imagedata = ctx.getImageData(0,0,canvas.width,canvas.height);
	for (var i=0; i<imagedata.data.length; i+=4) {
		var rgba = invertColor (imagedata.data[i+0],imagedata.data[i+1],
		imagedata.data[i+2], imagedata.data[i+3] );
		modified.data[i+0] = rgba[0];
		modified.data[i+1] = rgba[1];
		modified.data[i+2] = rgba[2];
		modified.data[i+3] = rgba[3];
	}
	ctx.putImageData(modified,0,0);
}

var filtroSwap = function (){
	var orden = [2,0,1,3];
	var modified = ctx.createImageData(canvas.width,canvas.height);
	var imagedata = ctx.getImageData(0,0,canvas.width,canvas.height);
	for (var i=0; i<imagedata.data.length; i+=4) {
		var rgba = swap (imagedata.data[i+0],imagedata.data[i+1],
		imagedata.data[i+2], imagedata.data[i+3],orden );
		modified.data[i+0] = rgba[0];
		modified.data[i+1] = rgba[1];
		modified.data[i+2] = rgba[2];
		modified.data[i+3] = rgba[3];
	}
	ctx.putImageData(modified,0,0);
}

var filtroMonocromatico = function (){
	var orden = [0,0,255];
	var modified = ctx.createImageData(canvas.width,canvas.height);
	var imagedata = ctx.getImageData(0,0,canvas.width,canvas.height);
	for (var i=0; i<imagedata.data.length; i+=4) {
		var rgba = monoColor (imagedata.data[i+0],imagedata.data[i+1],
		imagedata.data[i+2], imagedata.data[i+3],orden );
		modified.data[i+0] = rgba[0];
		modified.data[i+1] = rgba[1];
		modified.data[i+2] = rgba[2];
		modified.data[i+3] = rgba[3];
	}
	ctx.putImageData(modified,0,0);
}

var claridad = function(r,g,b,a) {
var val = parseInt((Math.max(r,g,b)+Math.min(r,g,b))*0.5);
return [val,val,val,a];
}

var luminosidad = function(r,g,b,a) {
var val = parseInt( (r*0.21)+(g*0.71)+(b*0.07) );
return [val,val,val,a];
}

var media = function(r,g,b,a) {
var val = parseInt( (r+g+b)/3.0 );
return [val,val,val,a];
}

var sepiaTone = function(r,g,b,a) {
var rS = (r*0.393)+(g*0.769)+(b*0.189);
var gS = (r*0.349)+(g*0.686)+(b*0.168);
var bS = (r*0.272)+(g*0.534)+(b*0.131);
return [ (rS>255) ? 255 : parseInt(rS),
(gS>255) ? 255 : parseInt(gS),
(bS>255) ? 255 : parseInt(bS),
a ];
}

var invertColor = function(r,g,b,a) {
return [ (255-r), (255-g), (255-b), a ];
}

var swap = function(r,g,b,a,order) {
	//poner que se pueda cambiar el orden 
	return [g,b,r,a];
}

var monoColor = function(r,g,b,a,color) {
 return [ color[0], color[1], color[2], 255-(parseInt((r+g+b)/3.0)) ];
}

var borrar = function(){
	canvas.width = canvas.width;
	
}
