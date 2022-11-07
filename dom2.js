const items = document.querySelector('.items')

// remove os elementos selecionados
// items.remove()


// remove o primeiro elemento

items.firstElementChild.remove()


// remove o ultimo elemento

items.lastElementChild.remove()


// mudar nome de um elemento

items.children[0].innerHTML = "Gabaritado"