var	myArray= new Array(9,4,3,1,6,7,5);
var i;

for (i = 0; i < myArray.length; i++){
		for (j = 0; j < myArray[i]; j++){
			if (myArray[i]>myArray[i+1]){
				var aux =myArray[i];
				myArray[i]=myArray[i+1];
				myArray[i+1]=aux;
				console.log("1 = "+myArray[i]+"  2 = "+myArray[i+1]+" aux = "+aux);
			}
		}
		document.write(myArray[i]);
}
