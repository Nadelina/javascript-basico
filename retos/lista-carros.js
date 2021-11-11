//RETO: Generar funcion constructora. Crear un loop que regrese una lista de 30 carros que se vayan construyendo solos. Para crear nuevas instancias de la funcion constructora.

var brands = ['Toyota', 'Mazda', 'Renault']
var cars = []

function Car(brand, model, year) {
    this.brand = brand
    this.model = model
    this.year = year
}

for (var i = 0; i < 30; i++)
    cars.push(new Car(brands[Math.floor(i/10)], `Serie ${i % 10}`, 1999 + i % 10))

console.log(cars)