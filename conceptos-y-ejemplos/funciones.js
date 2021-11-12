/*
FUNCIONES: Una función en JavaScript es similar a un
procedimiento — un conjunto de instrucciones que realiza una tarea
o calcula un valor, pero para que un procedimiento califique como
función, debe tomar alguna entrada y devolver una salida donde hay alguna
relación obvia entre la entrada y la salida. Para usar una función, debes
definirla en algún lugar del ámbito desde el que deseas llamarla.

https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
*/

//declarativa
function miFuncion(){
    return 3;
}

//Expresión
var miFunción = function(a,b){
    return a+b;
}
miFuncion(5,8);