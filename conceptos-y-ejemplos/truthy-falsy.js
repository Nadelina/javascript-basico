//Valores que definen por default true or false

//Ejemplos de respuesta falso
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false

//Ejemplos de respuesta verdadero
Boolean(" ");//true
Boolean("a"); //true 
Boolean(1); //true desde 1 en adelante
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function(){}); //Cualquier función es verdadera también
Boolean(true); //true