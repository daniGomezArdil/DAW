var prueba=function(numero){
  if(this.value=="ocultar contenido"){
    this.value="mostrar contenido";


    var miid = this.id;
    switch (miid) {
      case "enlace_1":
        contenido_1.style.cssText = "visibility: hidden";
      break;
      case "enlace_2":
        contenido_2.style.cssText = "visibility: hidden";
      break;
      case "enlace_3":
        contenido_3.style.cssText = "visibility: hidden";
      break;
      default:
      break;
    }
  }else{
    this.value="ocultar contenido";
    var miid = this.id;
    switch (miid) {
      case "enlace_1":
        contenido_1.style.cssText = "visibility: visible";
      break;
      case "enlace_2":
        contenido_2.style.cssText = "visibility: visible";
      break;
      case "enlace_3":
        contenido_3.style.cssText = "visibility: visible";
      break;
      default:
      break;
    }
  }
};
var x=document.getElementsByTagName('input');
for (var i=0;i<x.length;i++){
  x[i].addEventListener('click',prueba,i);
}
