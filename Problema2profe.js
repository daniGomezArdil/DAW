var dia=3;
var mes=7; //Agosto
var anyo=1996;

var fecha=new Date(anyo,mes,dia);
document.write("Dia semana:"+fecha.getDay());
var fecha_act=new Date();
var dia_act=fecha_act.getDate();
var mes_act=fecha_act.getMonth();
var anyo_act=fecha_act.getFullYear();
var cuantos_anyos;
var cuantos_meses;
var cuantos_dias;
if (mes<mes_act) {
	cuantos_anyos=anyo_act-anyo;
	if (dia<=dia_act){
		cuantos_meses=mes_act-mes;
		cuantos_dias=dia_act-dia;
	}
	else {
		if (dia>dia_act){
			cuantos_meses=mes_act-mes-1;
			var dias_mes_anterior;
			var fecha_aux=new Date();
			fecha_aux.setDate(0);
			var aux2;
			aux2=fecha_aux.getDate();
			cuantos_dias=aux2-dia+dia_act;
			
		}
	}
}
else {
	if (mes>mes_act) {
		cuantos_anyos=anyo_act-anyo-1;
	}
	else {
		if (mes==mes_act) {
			
		}
	}
}
document.write("tienes:" + cuantos_anyos + "años <br />");
document.write("tienes:" + cuantos_meses + "meses <br />");
document.write("tienes:" + cuantos_dias + "dias <br />");
