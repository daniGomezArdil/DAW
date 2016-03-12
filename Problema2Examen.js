var num1=600;
var num2=1000;

var i;
var mcm=0;
var mcd=0;
var min=(num1<=num2)?num1:num2;
for (i=1;i<min;i++){
	if ((num1%i==0) & (num2%i)==0){
		mcd=i;
	}
}

document.write("maximo comun divisor="+mcd);

var max=(num1>=num2)?num1:num2;
var limite=num1*num2;
var fin=false;
for (i=max;i<=limite;i++){
	if ((fin==false) & ((i%num1==0) &(i%num2==0))){
		fin=true;
		mcm=i;
	}
}
document.write("<br />minimo comun multiplo="+mcm);

