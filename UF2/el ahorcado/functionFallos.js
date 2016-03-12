function main(){
		obtenerPalabra();
		pintarEspacios();
}
function mastilAhorcado(ctx){
			ctx.beginPath();
			ctx.lineWidth=8;
			ctx.moveTo(50,50);
			ctx.lineTo(50,400);
			ctx.lineTo(400,400);
			ctx.moveTo(50,50);
			ctx.lineTo(250,50);
			//ctx.moveTo(250,90);
			ctx.moveTo(215,50);
			ctx.lineTo(50,180);
			ctx.stroke();
}
function lazoAhorcado(ctx){
		ctx.beginPath();
		ctx.lineWidth=6;
		ctx.moveTo(250,45);
		ctx.lineTo(250,85);
		ctx.stroke();
}
function cabezaAhorcado(ctx){
			ctx.beginPath();
			//ctx.lineWidth=10;
			ctx.arc(250,115,30,0,2*Math.PI);
			ctx.strokeStyle="#000000";
			ctx.stroke();
}

function troncoAhorcado(ctx){
		ctx.beginPath();
		ctx.lineWidth=6;
		ctx.moveTo(250,250);
		ctx.lineTo(250,145);
		ctx.stroke();

}

function piernaIzqAhorcado(){
		ctx.beginPath();
		ctx.lineWidth=4;
		ctx.moveTo(250,145);
		ctx.lineTo(150,165);
		ctx.stroke();

}

function piernaDerAhorcado(){


}

function brazoIzqAhorcado(){


}

function brazoDerAhorcado(){


}
 function obtenerPalabra(){
	var aux;
	aux = Math.floor(Math.random()*array_palabras.length);
	palabra = array_palabras[aux];
	palabra = palabra.toUpperCase();
}
function pintarEspacios(palabre){
	var=50;
	var=100;
	for(var i=0;i<palabre.length;i++){
			ctx.beginPath();
			ctx.moveTo(x,y);
			ctx.lineTo(x+10,y);
			ctx.stroke();
			x=x+20;
	}
}
function pintarBotones(){
	var i;
	var letra="";
	document.write("<br />");
	for(i=0;i<26;i++){
		if(i%7==0){
			document.write("<br />");
		}
		letra=String.fromCharCode(65+i);
		document.write("<imput type=BUTTON VALUE="+letra+" onclick='buscar("+(65+i)+")'>");
		document.write("<imput type=BUTTON VALUE="+letra+" onclick='buscar("+(\""+letra+"\")'>");
	}
}
function buscar(queletra){
	if(numero_fallos>=7){
	 alert("Lo siento el juego se a acabado pulsa F5 para juego nuevo");
	}else{
	if(palabra.indexOf(queletra)==-1){
		//la letra no esta --> Fallo
		numero_fallos++;
		pintarFallo();
	}else{
		//la letra esta --> acierto
		pintarAcierto(letra);
	}
  }
}
function pintarFallo(){
	//1-> Cabeza, 2-->Tronco, 3-->pierna .....
	var x=50;
	var y=100;
	ctx.fillRect(x,y-30,100,32);
	ctx.strokeText("Llevas: "+ numero_fallos);
	if(numero_fallos==7){
			alert("GAME OVER");
	}
	
}
function pintarAcierto(){
	var i;
	for (i=0;i<palabra.length;i++){
			if(palabra.charAt(i)==queletra){
			pintarLetra
			}
	}
}
function pintarLetra(){
		
}
