var estudiantes = ["Maria", "Isabel", "Ana", "Felipe"];
function saludar(estudiante){
    console.log(`Hola, ${estudiante}`);
}
while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();//ira sacando elementos del array
    saludar(estudiante);
}