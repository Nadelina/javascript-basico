/*##Taller #1: figuras geométricas

- 1: definir las fórmulas
- 2: implementar formular en js
- 3: crear funciones
- 4: integrar js con html */
console.group("Cuadrados");
function perimetroCuadrado(lado){
    return lado * 4;
} 

function areaCuadrado(lado){
    return lado * lado
}
console.groupEnd();

console.group("Triangulos");
  function perimetroTriangulo(lado1, lado2, base){
        return lado1 + lado2 + base;
    }
    
    function areaTriangulo (base, altura){
        return (base*altura)/2;
    }
    function alturaTrianguloIsosceles(lado1, lado2, base){
        return lado1 + lado2 + base;
    }
    
console.groupEnd();

//Codigo del circulo
console.group("Circulo");

    function diametroCirculo(radio){
        return radio * 2;
    } 
    
    const piValor = Math.PI;
    //Llamar función dentro de una función
    function perimetroCirculo(radio){
        const diametro = diametroCirculo(radio);
        return diametro * piValor;
    }
    
    function areaCirculo(radio){
        return (radio * radio) * piValor
    };
    
console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es: " + perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El area del cuadrado es: " + area);
}

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("inputTrianguloLado1").value;
    const lado2 = document.getElementById("inputTrianguloLado2").value;
    const base = document.getElementById("inputTrianguloBase").value;

    const perimetro = perimetroTriangulo(Number(lado1), Number(lado2), Number(base));
    alert("El perimetro del trinagulo es: " + perimetro);
}
function calcularAreaTriangulo(){
    const base = document.getElementById("inputTrianguloBase2").value;
    const altura = document.getElementById("inputTrianguloAltura").value;
    const area = areaTriangulo(base, altura);
    alert("El area del triangulo es: " + area);
}
function calcularDiametroCirculo(){
    const input = document.getElementById("inputCirculoRadio");
    const value = input.value;
    const diametro = diametroCirculo(value);
    alert("El diametro del circulo es: " + diametro);
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculoRadio");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert("El perimetro del circulo es: " + perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculoRadio");
    const value = input.value;
    const area = areaCirculo(value);
    alert("El area del circulo es: " + area);
}