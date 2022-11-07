
const numbers = [1, 2, 3, 4, 5]

// Problema: multiplicar elementos da lista por 2 e retornar nova lista

// metodo map
const numbersMultipliedByTwo = numbers.map(function(number){
    return number * 2
})

console.log(numbersMultipliedByTwo)



// problemas: pegar da lista só as idades pares e retornar numa nova lista
// Metodo Filter

const ages = [10, 13, 20, 21, 22, 23, 24, 25, 26]

const evenAges = ages.filter(function(age){
    return age % 2 === 0
})

console.log(evenAges)

// retornar da lista elementos impares

const oddAges = ages.filter(function(age){
    return age % 2 != 0
})

console.log(oddAges)




// problema: dada a lista, pegar a soma de todas as idades
// Reduce: reduzir todos os elementos da lista por um so elemento

const sumOfAges = ages.reduce(function(age, accumulator){
    return age + accumulator
}, 0)

console.log(sumOfAges)
