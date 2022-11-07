const person = {
    firstName: "Hericles",
    lastName: "Rocha",
    age: 24,
    hobbies: ["Futebol", "Tv", "Passear", "Ler"],
    dog:{
        name: "Rex",
        age: 9
    }
}

// const firstName = person.firstName
// const lastName = person.lastName
// const age = person.age
// const hobbies = person.hobbies

// mesma coisa que acima
const {firstName: primeiroNome, lastName, age, hobbies, dog } = person


const read = person.hobbies[3]

console.log(person)
console.log(primeiroNome)
console.log(lastName)
console.log(age)
console.log(hobbies)
console.log(read)
console.log(person.dog.name)
console.log(dog)


//  Listas contendo objetos

const todos = [
    {
        id: 1,
        description: "Estudar Programação",
        isCompleted: false
    },
    {
        id: 2,
        description: "Ler",
        isCompleted: true
    },
    {
        id: 3,
        description: "Treinar",
        isCompleted: false
    }
]

const {id, description, isCompleted} = todos

console.log(todos[2].description)