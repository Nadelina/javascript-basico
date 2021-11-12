/*
    El objeto Array de JavaScript es un objeto global que
    es usado en la construcción de arrays, que son objetos tipo lista de alto nivel.

    https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

//Crear un array
var frutas = ["Manzana", "Pera", "fresa", "kiwi"];
//Acceder a un elemento
console.log(frutas[2]);

/*
.push()
El método .push() nos permite agregar uno o más elementos al final de un array.
Inserta al final del array
*/
var masfrutas = frutas.push("Uvas");

/*
El método .pop() eliminará el último elemento de un array. En este sentido, si tenemos un array de 5 elementos, pop() eliminará el elemento en el índice 4.
*/
//Elimina el ultimo valor del array
frutas.pop();
//Elimina el valor definido
var ultimo = frutas.pop("Uvas");


//Inserta al inicio del array
var nuevaLongitud = frutas.unshift("guayaba");

/*
.shift()
Ahora pasemos a la otra cara de la moneda donde necesitamos eliminar un elemento del array. .shift() eliminar el primer elemento de un array, es decir, elimina el elemento que esté en el índice 0.
*/
var borrarGruta = frutas.shift("guayaba");

//Conocer la posicion de un elemento
var posicion = frutas.indexOf("Pera");
