function nif(dni) {
  var numero;
  var letr;
  var letra;
  var expresion_regular_dni;
 
  expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
 
  if(expresion_regular_dni.test (dni) == true){
     numero = dni.substr(0,dni.length-1);
     letr = dni.substr(dni.length-1,1);
     numero = numero % 23;
     letra='TRWAGMYFPDXBNJZSQVHLCKET';
     letra=letra.substring(numero,numero+1);
    if (letra!=letr.toUpperCase()) {
       return false;
     }else{
      return true;
     }
  }else{
     return false;
   }
}

function relleno(id){
  var elemento=document.getElementById(id);
  var valor=elemento.value;
  if (valor.length>0){
    return true;
  }
  return false;
}


function validar(){
   var ok;
  //Validamos DNI
  ok=relleno('tdni');
  if (ok==true){
    //Validar letra
    ok=nif(document.getElementById('tdni').value);   
  }
  //Si el DNi es correcto Validamos nombre
  if (ok==true){
    ok=relleno('tnombre');
    if (ok==true){
      var nom=document.getElementById('tnombre').value;
     if ((nom.length>6) && (nom.length<30)){
       ok=true;
     }
     else{
       ok=false;
     }
    }
  }    
  alert(ok);
}

window.onload=function(){
  document.getElementById("bvalidar").onclick=validar;
};
