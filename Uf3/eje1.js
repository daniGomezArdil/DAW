function comprovar() {
  var nombre=document.getElementById("nombre");
  var apellido=document.getElementById("apellido");
    if(nombre.value==""){
      document.write("el campo nombre tiene que estar lleno");
    }else if(apellido.value==""){
      document.write("el campo apellido tiene que estar lleno")
    }else {
      document.write(nombre.value +" "+ apellido.value);
    }
}
