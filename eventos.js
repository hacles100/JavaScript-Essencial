const myForm = document.querySelector('#my-form')
const submitButton = document.querySelector('#submit-button')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')

const items = document.querySelector('.items')

const body = document.querySelector('body')


submitButton.addEventListener("click", function(e){
    
    e.preventDefault()
    // console.log(e)
    // console.log("clicked!")

    // console.log(nameInput.value)

    const nameValue = nameInput.value
    const emailValue = emailInput.value

    if(nameValue === "" || emailValue === ""){

        return alert("Favor, preencha todos os campos")
    }

    myForm.style.background = "green"
    items.firstElementChild.textContent = nameValue
    items.children[1].textContent = emailValue
    items.children[2].remove()
    items.children[3].remove()

    
    body.style.background = "yellow"
})


// acessa o valor do input

nameInput.addEventListener('change', function(e){
    console.log(e.target.value)
})