// Para enviar dados do backend para o fronted usamos o JSON

const todos = [

    {
        id: 1,
        descriptiom: "Estudar Programção",
        isCompleted: false
    },
    {
        id: 2,
        descriptiom: "Ler",
        isCompleted: true
    },
    {
        id: 3,
        descriptiom: "Treinar",
        isCompleted: false
    }
]

// objeto em formato JSON
const todosJSON = JSON.stringify(todos)

// objeto em formato lista
// const todosList = JSON.parse(todosJSON)

// console.log(todosList)


console.log(todosJSON)
