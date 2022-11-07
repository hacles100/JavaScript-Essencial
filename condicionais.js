const sum = 1 + 1

if(sum === 2){
    console.log("Sum is 2")

}else if(sum === 3){

    console.log("Sum is 3")

}else{
    
    console.log("Sum is not 2 and 3")
}

//  Usando operadores: &, ||

const sum1 = 2 + 2
const sum2 = 3 + 3

if(sum1 === 4 && sum2 === 6){

    console.log(true)

}else{
    console.log(false)
}


if(sum1 === 4 || sum2 === 2){

    console.log(true)
} else {
    
    console.log(false)
}



// Ternary Operator

const multiply = 2 * 2

let number = multiply === 4 ? 4 : 2

console.log(number)

