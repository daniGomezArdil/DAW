function poner(pos){
  var pais = document.getElementById("pais");
  var ciudad = document.getElementById("ciudad");
  var tabla = document.getElementById("table");
  var query = "<td>"+pais.value+"</td><td>"+ciudad.value+"</td>";
  switch (pos) {
    case 1:
      tabla.innerHTML = query+ tabla.innerHTML;
      break;
    case 2:
      tabla.innerHTML += query;
  }
  pais.value="";
  ciudad.value="";
}
