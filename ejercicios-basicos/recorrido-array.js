var articulos = [
    {nombre: "Celular", precio: 200},
    {nombre: "Laptop", precio: 600},
    {nombre: "Libro", precio: 15},
    {nombre: "Audifonos", precio: 30},
    {nombre: "Mochila", precio: 25},
];

//filter()
//Agrego a un nuevo array solo los datos filtrados
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.precio <= 100
});

//map(): retorna lista solo de los nombres del array principal
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

//find()
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Mochila"
});

//forEach
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//some()
//Verifica si existe un elemento con la validacion y retorna true o false
var articulosBaratos = articulos.some(function(articulo){
    return articulo.precio <=500;
})