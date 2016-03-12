var nom = prompt("Digam el teu nom");
var data = prompt("Digam la teva data de neixement");
function esBisiesto(num){
    if((num % 400 == 0) || (num%4 ==0) && (num%100!=0)){
        return true;
    }else{
        return false;
    }
}
function calculaBisiestos(anterior,posterior){
    var cantBisiestos = 0;
    for(var i=anterior;i<=posterior;i++){
        if(esBisiesto(i)){
            cantBisiestos++;
        }
    }
    return cantBisiestos;
}
//var aux = "AUX";
//var nom = "Sergio";
//var data = "02/10/1991";
var dia = data.substring(0,2);
var mes = data.substring(3,5);
var anyo = data.substring(6,10);


data = new Date(data);
avui = new Date();

data.setDate(dia);
data.setMonth(mes-1);
data.setYear(anyo);


//mostrar por pantalla dia que va neixer
var diaSetmana;
switch(data.getDay()){
    case 0:
        diaSetmana="diumenge";
        break;
    case 1:
        diaSetmana="dilluns";
        break;
    case 2:
        diaSetmana="dimarts";
        break;
    case 3:
        diaSetmana="dimecres";
        break;
    case 4:
        diaSetmana="dijous";
        break;
    case 5:
        diaSetmana="divendres";
        break;
    case 6:
        diaSetmana="disabte";
        break;
}
var dies = Math.floor((avui-data)/1000/60/60/24);

var anys = Math.floor(dies/365);
dies = dies-(anys*365);
//calcular cantidad de bisiestos y restarle un dia por cada bisiesto
dies = dies - calculaBisiestos(data.getFullYear(), avui.getFullYear());

var mesActual = avui.getMonth()+1;
var diaActual = avui.getDate();
var mesos = 0;
var salir = false;
while(!salir){
    switch(mesActual){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if(dies-31>-1){
                dies = dies-31;
                mesActual--;
                mesos++;
            }else{
                salir = true;
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if(dies-30>-1){
                dies = dies-30;
                mesActual--;
                mesos++;
            }else{
                salir = true;
            }
            break;
        case 2:
            if(esBisiesto(avui.getFullYear())){
                if(dies-29>-1){
                    dies = dies-29;
                    mesos++;
                }else{
                    salir = true;
                }
            }else{
                if(dies-28>-1){
                    dies = dies-28;
                    mesos++;
                }else{
                    salir = true;
                }
            }
            mesActual--;
            break;
    }
    if(mesActual==0)
        mesActual=12;
}
dies--;


console.log("Vas neixer un "+diaSetmana);
console.log("Tens "+anys+" anys, "+mesos+" mesos i "+dies+" dies");

var ms = 12-mesos-1;
var ds = 0;

mesActual = avui.getMonth()+1;
switch(mesActual){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        //31
        ds=31-diaActual+data.getDate();
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        //30
        ds=30-diaActual+data.getDate();
        break;
    case 2:
        //28-29
        if(esBisiesto(avui.getFullYear())){
            ds=29-diaActual+data.getDate();
        }else{
            ds=28-diaActual+data.getDate();
        }

        break;
}
console.log("Et falten "+ms+" mesos i "+ds+" dies");
console.log("Nom: "+nom);
console.log("Data: "+data);
