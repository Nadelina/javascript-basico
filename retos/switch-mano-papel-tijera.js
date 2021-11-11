var opciones = ["piedra", "papel", "tijera"];
var jugador ="";
function juego(op){
var pc = opciones[Math.floor(Math.random()* 3 - 1 + 1)];
console.log("PC escogio: " + pc);

switch(true){
    case (op === pc):
        console.log("Empate");
        break;
    case (op == "piedra" && pc == "tijera"):
        console.log("Jugador es el ganador!");
        break;
    case (op == "tijera" && pc == "papel"):
        console.log("Jugador es el ganador!");
        break;
    case (op == "papel" && pc == "piedra"):
           console.log("Jugador es el ganador!");
           break;
    case (op == "papel" && pc == "tijera"):
        console.log("PC es el ganador!");
        break;
    case (op == "piedra" && pc == "papel"):
        console.log("PC es el ganador!");
        break;
    case (op == "tijera" && pc == "piedra"):
        console.log("PC es el ganador!");
        break;
    default:
        console.log("sin ganadores");
}
}