var estudiantes = ["Maria", "Isabel", "Ana", "Felipe"];
function saludar(estudiante){
    console.log(`Hola, ${estudiante}`);
}
//mientras i sea menor a la longitud del array se incrementa 1
for(var i = 0; i<estudiantes.length; i++){
    saludar(estudiantes[i]);
}
for(var estudiante of estudiantes){
    saludar(estudiante);
}