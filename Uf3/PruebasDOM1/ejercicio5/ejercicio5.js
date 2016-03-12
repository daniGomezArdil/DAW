function problema5(){
  var x=new Date();
  var unNodo=document.createTextNode(x);
  var elDiv=document.getElementById("myDiv");
  for (var j=elDiv.childNodes.length-1;j>0;j--){
    elDiv.removeChild(elDiv.childNodes[j]);
  }
	elDiv.appendChild(unNodo);  
}
