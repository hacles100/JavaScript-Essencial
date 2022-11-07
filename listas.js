const names = ["Hericles", "Kevin", "Fernandes", 24, true]

const name = names[0]
console.log(name)

// adiciona elemento no inicio da lista

names.unshift(25)
console.log(names)

// adiciona elemento no final da lista
names.push('Lisa')
console.log(names)

// remove o ultimo elemento da lista
names.pop()
console.log(names)

// mudar nome ne um elemento da lista
names[2] = 'Gabaritado' 
console.log(names)

// indice de um elemento da lista
console.log(names.indexOf('Hericles'))


// ordena a lista alfabeticamente
const sortNames = names.sort()
console.log(sortNames)

// Tamanho da lista
console.log(names.length)

// verifica se uma var é uma lista
const namesIsArray = Array.isArray(names)
console.log(namesIsArray)