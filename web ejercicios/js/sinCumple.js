var entrada = prompt("Dime una fecha en formato DD MM YYYY");
//Buscamos primer espacio en blanco.
var aux = entrada.indexOf(' ');
//Coger dias
var dias = entrada.substring(0,aux);
//Coger mes
// var aux2 = entrada.indexOf(' ', aux +1);
var aux2 = entrada.lastindexOf(' ');
var mes = entrada.substring(aux+1,aux2);
//Coger anyos
var anyo = entrada.substring(aux2+1);
console.log("Dia: "+ dias + "mes: "+ mes +"anyo: "+ anyo);

var fechaAct = new Date();
var fechaUsu = new Date(anyo,mes-1,dias,10,0,0);

var dia_Act = fechaAct.getDate();
var mes_Act = fechaAct.getMonth();
if ((dia_act==dias)&&(mes_Act==mes)){
	console.log("Feliz Cumpleanyos");
}

console.log(fechaAct);
console.log(fechaUsu);

var resultado = Math.floor((fechaAct - fechaUsu)/(1000*60*60*24));
//Calcular cuantos cumpleanyos han pasado
var cumples = Math.floor(resultado / 365);
resultado = resultado - cumples;
console.log(resultado);
var anyo_act = fechaAct.getFullYear();
var bisiestos = 0;
for(var i=anyo;i<=anyo_act;i++){
	if((i%4==0)&&(i%400==0)){
		bisiestos++;
	}
	
	if((i%4==0)&&(i%100<>0)&&(i%400+!=0)){
		//do_nothing
	}
	if((i%4==0)&&(i%100<>)){
		bisiestos++;
	}	
}
