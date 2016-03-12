var actual=new Date();
alert(actual);
var incremento="1500h";

var cuanto=incremento.substring(0,incremento.length-1)*1;
var que=incremento.charAt(incremento.length-1);

var nueva=actual;
if (que=="h"){
	nueva.setHours(nueva.getHours()+cuanto);
}
if (que=="m"){
	nueva.setMinutes(nueva.getMinutes()+cuanto);
}
if (que=="s"){
	nueva.setSeconds(nueva.getSeconds()+cuanto);
}



document.write("incremento: "+ cuanto+" " +que+"<br />");
document.write(nueva.getDate()+"/"+(nueva.getMonth()+1)+"/"+nueva.getFullYear()+" "+ nueva.getHours()+":"+nueva.getMinutes()+":"+nueva.getSeconds());
