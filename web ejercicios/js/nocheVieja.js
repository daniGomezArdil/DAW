var horaActual = prompt ("Dime que hora es en el formato HH24:MM");

var dondePuntos = horaActual.indexOf(':');
var horas = horaActual.substring(0,dondePuntos);
var minutos = horaActual.substring(dondePuntos + 1);

var minutosRestantes = 60 - minutos;
var horasRestantes = 23 - horas;
horasRestantes *= 60;
minutosRestantes += horasRestantes

document.write("Quedan: " + minutosRestantes + " minutos");
