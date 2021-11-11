var opciones = ["piedra", "papel", "tijera"];
var jugador ="";
function juego(op){
var pc = opciones[Math.floor(Math.random()* 3 - 1 + 1)];
console.log("PC escogio: " + pc);
if(op !== ""){
    if(op === pc ){
        console.log("Empate");
    }else if (op == "piedra" && pc == "tijera" || op == "tijera" && pc == "papel"
            || op == "papel" && pc == "piedra"){
        console.log("Jugador es el ganador!");
    }else if (op == "papel" && pc == "tijera" || op == "piedra" && pc == "papel"
            || op == "tijera" && pc == "piedra"){
        console.log("PC es el ganador!");
    }
}
}