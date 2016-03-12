// TO_DO LIST
// Validar entrada para revisar que es una fecha correcta
// Revisar calculo de años bisiestos

//var entrada=prompt("Dime una fecha en formato DD MM YYYY");
var entrada="23 6 1912";
//var fechaAct = new Date();
var fechaAct=new Date(1954,5,7);
//Buscamos primer espacio en blanco
var aux=entrada.indexOf(' ');
var dias=entrada.substring(0,aux);
//var aux2=entrada.lastIndexOf(' ');
var aux2=entrada.indexOf(' ', aux+1);
var mes=entrada.substring(aux+1,aux2);
var anyo=entrada.substring(aux2+1);
console.log ("Dia: " + dias + " mes: " + mes + " año: " + anyo);


var fechaUsu = new Date(anyo,mes-1,dias,10,0,0);

var dia_act= fechaAct.getDate();
var mes_act= fechaAct.getMonth();
if ((dia_act==dias) & (mes_act == mes-1)){
	alert("Feliz cumpleaños!!!!")
}
else{
	console.log(fechaAct);
	console.log(fechaUsu);
	var resultado = fechaAct - fechaUsu;
	//Pasamos de milisegundos a dias
	resultado = Math.floor(resultado / (1000*60*60*24));
	//Calcular cuantos cumpleaños han pasado
	var cumples = Math.floor(resultado / 365);
	resultado = resultado - cumples;
	
	var anyo_act=fechaAct.getFullYear();
	var bisiestos=0;
	for (var i=anyo; i<=anyo_act;i++){
		if ((i%4==0) && (i%400==0)){
			bisiestos++;
		}
		if ((i%4==0) && (i%100==0) && (i%400!=0)){
			//do_nothing
		}
		if ((i%4==0) && (i%100!=0)){
			bisiestos++;
		}
	}
		
	resultado = resultado - bisiestos;
	alert(resultado);
