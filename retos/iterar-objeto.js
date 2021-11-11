function auto(obj){
    for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      console.log(`${obj[i]}\n`);
    }
  }
}

var miauto = {
    marca: "Toyota",
    modelo: "Corolla",
    year: 2021
};

auto(miauto);