//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero1 = parseInt(prompt("Ingrese primer numero"));
    var numero2 = parseInt(prompt("Ingrese segundo numero"));
    var resultado;
    if (numero1==numero2){
        resultado=numero1*numero2;
        document.write("El resultado es " +resultado);
    }
    else if (numero1>numero2){
        resultado=numero1-numero2;
        document.write("El resultado es " +resultado);
    }
    else {
        resultado=numero1+numero2;
         document.write("El resultado es " +resultado);
    }


}

