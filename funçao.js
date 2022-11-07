function soma(a, b){

    return a + b
}

const somaResultado = soma(2, 8)

console.log(somaResultado)



// Outra function
function soma2(a, b = 10){

    return a + b
}

const soma2Resultado = soma2(2)

console.log(soma2Resultado)



// Usando Arrow Function

const subtracao = (a, b) => {
    return a - b
}

const subtracaoValue = subtracao(6, 3)

console.log(subtracaoValue)