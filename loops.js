// for(let index = 0; index < 10; index++){
//     console.log(index)
// }

const cars = ["Ferrari", "Tesla", "Mercedes", "BMW"]

for(let i = 0; i < cars.length; i++){
    console.log(cars[i])
}


// Usando o for of
const equipas = ["Sporting", "PSG", "Manchester City", "Arsenal"]

for(let equipa of equipas){
    console.log(equipa)
}



// Usando o forEach]
const frutas = ["Maçã", "Pera", "Banana", "Papaia"]

frutas.forEach(function(fruta, index){
    console.log(index)
   console.log(fruta)
})



// While -> executa enquanto condicao passada for verdadeira

let index = 0

while(index < 10){
    console.log("Index é menor do que 10")
    index++
}


// For In -> para trabalhar com objetos

const person = {
    name: "Lisa",
    age: 27,
    beautiful: true
}

for(key in person){
    console.log(person[key])
}

