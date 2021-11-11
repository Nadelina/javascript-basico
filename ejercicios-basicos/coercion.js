/*
    coerciones implicitas: cuando el lenguaje nos ayuda y cambia de un tipo de valor a otro tipo de valor.

    coerciones explicitas: es la forma en obligamos que el valor de un tipo cambie de tipo.
*/

//Ej. implicitas

var a= 4 +"7"; //47 tipo string
var b = 4 * "7" //28 tipo number

//Ej. explicita

var a = 20;
var b = a + "";
console.log(b); //20
typeof b; //string

var c = String(a);
typeof c; //String
console.log(c); //20

var d = Number(c);
typeof d; //number
console.log(c); //20