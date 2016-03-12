//TO_DO List
// Pedir la fecha al usuario
// Traducir la fecha de castellano/catalan a inglés
// Validar fecha correcta
var fecha=new Date();
//Saber el dia de la semana del primer dia del mes
var fecha_aux=fecha;
fecha_aux.setDate(1);
var dia_semana=fecha_aux.getDay();
dia_semana=(dia_semana==0)?7:dia_semana;
//Cuantos dias tiene el mes?
var mes_act=fecha.getMonth();
var dias_mes_act;
//Opcion 1: Obtenemos el dia 1 del mes siguiente y le restamos 1 dia
fecha_aux.setMonth(fecha_aux.getMonth()+1);
fecha_aux=fecha_aux-1;
dias_mes_act=fecha_aux.getDate();
/* Opcion 2: Calculando que mes es
if (mes_act==0 || mes_act==2 || mes_act==4 || mes_act==6 || mes_act==7 || mes_act==9 || mes_act==11 ) {
	dias_mes_act=31;
}
else {
	if (mes_act==1){
		// Pendiente: Febreros bisiestos
		dias_mes_act=28;
	}
	else {
		dias_mes_act=30;
	}
}
*/

//Saber cuantas semanas tiene el mes
//a) Saber cuantos dias tiene la semana 1
