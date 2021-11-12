//Scope global
var nombre = "Diego";

//Scope local
//Solo lo que esta dentro de la funcion tiene acceso a ello mismo
function nombre(){
    var miApellido = "Romero";
    console.log(nombre + " "+ miApellido);
}
nombre();