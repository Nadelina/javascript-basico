/* 
    JavaScript está diseñado en un paradigma simple basado en objetos.
    Un objeto es una colección de propiedades, y una propiedad es una
    asociación entre un nombre (o clave) y un valor. El valor de una
    propiedad puede ser una función, en cuyo caso la propiedad es conocida
    como un método. Además de los objetos que están predefinidos en el
    navegador, puedes definir tus propios objetos. Este capítulo describe
    cómo usar objetos, propiedades, funciones y métodos; y cómo crear tus propios objectos.

    https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects
*/
//paradigma de objetos

var miauto = {
    marca: "Toyota",
    modelo: "Corolla",
    year: 2021,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.year}`)
    }
};

miauto.marca //Toyota
miauto.year //2021

//constructor
function auto(marca, modelo, year){
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
}
//operador new - genera una nueva instancia de la funcion constructura. 
var autoNuevo = new auto("Tesla", "Model 3", 2020);
