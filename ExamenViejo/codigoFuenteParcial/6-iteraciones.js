//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
    var maximo;
    var minimo;
    var diaMax;
    var diaMin;
    var flag =0;

    for(var i=1; i <=7; i++){
        
        importe=parseInt(prompt("ingrese importe"));
       //validacion
        while(importe<=0||isNaN(importe)){
            importe=parseInt(prompt("error, ingrese importe"));
        }
        if(importe >maximo || flag==0){
            maximo=importe;
            diaMax=i;
        }
        if(importe < minimo || flag==0){
            minimo=importe;
            diaMin=1;
            flag=1;
        }
    }
	alert("Mayor importe $ " +maximo + " el dia "+diaMax + "\nMenor importe $ "+minimo+" el dia "+diaMin);
}

