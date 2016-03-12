/* Daniel Gómez Ardil
 * Ejecicio que introduces tu fecha de nacimiento y
 * te dice si es tu no cumpleaño y cuantos llevas
 */

var fecha = prompt("Introduce tu fecha de nacimiento: ");// Entrada de fecha
var fecha_array = fecha.split(' ');//Pasa fecha a una array
var fechaNac = new Date();//Nueva fecha actual(que cambiare por la de nacimiento)
var fechaAct = new Date();//Nueva fecha actual
fechaNac.setDate(fecha_array[0]);//Introducco dia de nacimiento
fechaNac.setMonth(fecha_array[1]-1);//Introducco mes de nacimiento(menos uno(para cuadrar el resultado))
fechaNac.setYear(fecha_array[2]);//Introducco año de nacimiento
//Comparo fechas si fecha de Nacimiento es mas pequeña que fecha actual sigo sino error de fecha
if(fechaNac<fechaAct){
	//Si el dia de nacimiento es igual al dia actual y con el mes pasa igual es tu cumpleaños
	if(fechaNac.getDate()==fechaAct.getDate() && fechaNac.getMonth()==fechaAct.getMonth()){
		document.write("Hoy es cumpleaños");
	}else{
		//Sino primero se pasa todo a dias y se restan para sacar la diferencia de dias
		var difeDias=(fechaAct-fechaNac)/(1000*60*60*24);
		//Igual con los años se restan para sacar la diferencia de años
		var difeAnyos=fechaAct.getYear()-fechaNac.getYear();
		//Si mes de fecha de nacimiento es mayor que fecha actual diferencia de años menos 1
		if(fechaNac.getMonth()>fechaAct.getMonth()){
			difeAnyos=difeAnyos-1;
			/* Si Mes del año de nacimiento es igual que mes de fecha actual y dia de nacimiento es mayor
			que el dia actual año de diferencia menos 1 */
		}else if(fechaNac.getMonth()==fechaAct.getMonth() && fechaNac.getDate()>fechaAct.getDate()){
			difeAnyos=difeAnyos-1;
		}
		//Imprimir que es tu no cumpleanos y cuantos llevas
		document.write("Hoy es tu no cumpleaños y has cumplido "+ Math.round(difeDias - difeAnyos) );

	}
}else{
	document.write("Fecha invalida ");
}
