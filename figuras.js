/*##Taller #1: figuras geométricas

- 1: definir las fórmulas
- 2: implementar formular en js
- 3: crear funciones
- 4: integrar js con html */
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();
console.group("Triangulos");
//Codigo del triangulo
const ladoTriangulo1=6;
const ladoTriangulo2=6;
const baseTriangulo=4;

console.log(
    "Los lados del triángulo miden: "
    + ladoTriangulo1 + "cm,"
    + ladoTriangulo2 + "cm,"
    + baseTriangulo + "cm"
    );
    
const alturaTriangulo=5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo);
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es de: " + alturaTriangulo);

console.groupEnd();