var canvas=document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");
var arrayNombre= new Array("DINOSAURIO","TIGRE","TORTUGA","MAPACHE","COCODRILO");
var palabra=( palabraRandom());
var fallos=0; 	
var letra; 	
var seguirJugando=true;	
var palabraOculta=ocultarPalabra(palabra);
var letrasSeleccionadas=new Array();


console.log(palabra);
pintarEspacios();
mostrarOpciones();
