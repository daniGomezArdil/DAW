var canvas=document.getElementById("pantalla");
var ctx = canvas.getContext("2d");
var colors = new Array("green","red","blue","yellow");
var clases = new Array("success","danger","primary","warning");
var mostrados = new Array();
var secuencia=1;
var contador=0;
var pulsacion=0;
var veces = 4;
var tiempo = 1000;
llenar();
botones();
bloquearBotones();
document.getElementById("reset").disabled = true;

function iniciar(){
	bloquearBotones();
	document.getElementById("inicio").disabled = true;
	console.log("secuencia n "+secuencia);
	if((secuencia % 5 == 0) && (secuencia > 1)){
		veces++;
		if(tiempo > 300){
			tiempo-=50;
		}
		console.log(tiempo);
	}
	var intervalo = setInterval(function(){
		var num = Math.floor(Math.random() * clases.length);
		var tmpo = setTimeout(function(){
			ctx.fillStyle=colors[num];
			ctx.fillRect(0,0,canvas.width,canvas.height);
		},(100));
		canvas.width=canvas.width;
																		console.log(clases[num]);
		contador++;
		mostrados.push(num);
		if(contador == veces){
			clearInterval(intervalo);
		}
	},tiempo);
	secuencia++;
	var unlock = setTimeout(function(){
		desbloquearBotones();
		llenar();
	},(tiempo*(veces+1)));
}

function llenar(){

	var k=0;
	for (i = 0; i < 2; i++){
		for (j = 0; j < 2; j++){
			ctx.beginPath();
			ctx.fillStyle=colors[k];
			ctx.fillRect((j*150),(i*150),(canvas.width/2),(canvas.height/2));
			k++;
		}
	}
}

function botones(){
	var botones = document.getElementById("botones");
	for (i = 0; i < clases.length; i++){
		if(i%2 == 0){
			var br = document.createElement("br");
			botones.appendChild(br);
		}
		var inp = document.createElement("input");
			inp.value=' ';
			inp.id=i;
			inp.type="button";
			inp.setAttribute("class","btn-"+clases[i]+" btn-lg");
			inp.setAttribute("style", "width:150px; height:150px; border-radius:0px;");
			inp.setAttribute("onclick", "enviar("+i+")");
			botones.appendChild(inp);
	}
}

function bloquearBotones(){
	for (i = 0; i < clases.length; i++){
		document.getElementById(i).disabled = true;
	}
}

function desbloquearBotones(){
	for (i = 0; i < clases.length; i++){
		document.getElementById(i).disabled = false;
	}
}

function enviar(color){
	ctx.fillStyle=colors[color];
	ctx.fillRect(0,0,canvas.width,canvas.height);
	var tmpo = setTimeout(function(){ canvas.width=canvas.width;},250);
	if(color != mostrados[pulsacion]){
		alert("Fail!!!");
		bloquearBotones();
		document.getElementById("reset").disabled = false;
		llenar();
	}
	pulsacion++;
	if (pulsacion == veces){
			contador = 0;
			pulsacion = 0;
			mostrados.length = 0;
			console.log("------------------");
			var tmpo = setTimeout(function(){ iniciar();},1000);
	}
}

function reset (){
	secuencia=1;
	contador=0;
	pulsacion=0;
	veces = 4;
	tiempo =
	1000;
	mostrados.length = 0;
	document.getElementById("reset").disabled = true;
	iniciar();
	desbloquearBotones();
}
