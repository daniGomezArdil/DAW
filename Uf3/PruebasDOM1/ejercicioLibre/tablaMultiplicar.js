function prueba(){
  var eldiv=document.querySelector("#myDiv");
  var elnum=document.getElementById("valor");
  var numero=parseInt(elnum.value);
  var resultado="<table border>";
  for (var i=0;i<11;i++){
    resultado+="<tr><td>"+numero+"</td><td>";
    resultado+=i+"</td><td>"+numero*i+"</td></tr>";
  }
  resultado+="</table>";
  eldiv.innerHTML=resultado;
}
