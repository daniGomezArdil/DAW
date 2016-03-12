var prueba = function(posicion){
  var parrafo = document.getElementById("contenido_"+posicion);
  var estado = true;
  if (parrafo.style.display == 'none') {
      parrafo.style.cssText = "display:block;";
      estado = false;
  }else{
      parrafo.style.cssText = "display:none;";
  }
  return estado;
}
var losInputs = document.getElementsByName("input");
for (var i = 0; i < losInputs.length; i++) {
  losInputs[i].addEventListener('click',function(){
    var posicion = this.id.substring(this.id.length-1);
    this.value = prueba(posicion)?"Mostrar contenido":"Ocultar contenido";
  },false);
}
