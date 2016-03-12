var miArray=[[2,1,3],[4,0,5],[7,1,8]];



function pintarMatriz(matriz){
  var i,j;
      document.write("<br />");
  for (i=0;i<matriz.length;i++){
    for (j=0;j<matriz[i].length;j++){
      document.write(matriz[i][j]+" ");
    }
    document.write("<br />");
  }
}

function trasponerMatriz(matriz){
  var resultado=[];
 
  
  var i,j;
    for (i=0;i<matriz.length;i++){
      resultado[i]=new Array(matriz[i].length);
    }
 
  for (i=0;i<matriz.length;i++){
      for (j=0;j<matriz[i].length;j++){
        resultado[j][i]=matriz[i][j];
      }
    }
  return(resultado);
}
pintarMatriz(miArray);
var otroArray=trasponerMatriz(miArray);
pintarMatriz(otroArray);
