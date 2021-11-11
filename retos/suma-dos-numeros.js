function suma(){
    var numero =0;
    while(numero != 4){
        numero = prompt("Cuanto es 2+2?");
        if(numero == 4){console.log("Es correcto, ¡Felicidades!");}
        if(numero != 4){console.log("Incorrecto");}
    }
}
suma();