var miArray1=[[2,1,3],[4,0,5],[7,1,8]];
var miArray2=[[1,5,4],[2,3,6],[4,0,2]];

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

function multiplicaMatriz(matriz1, matriz2){
  var resultado=[[],[],[]];
  var i,j;
  var x,y;  
  var aux;
  for (i=0;i<matriz1.length;i++){
    for (j=0;j<matriz1[i].length;j++){
      aux=0;
        //calcular
      resultado[i][j]=aux;
    }
  }
  return resultado;
}

var aux=multiplicaMatriz(miArray1, miArray2);
pintarMatriz(aux);

var aux=multiplicaMatriz(miArray1, miArray2);
pintarMatriz(aux);
