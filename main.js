const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const submitButton = document.querySelector('#submit-button')

const errorMessage = document.querySelector('.msg')

const items = document.querySelector('.items')

submitButton.addEventListener('click', function(e){

    e.preventDefault()

    const nameValue = nameInput.value
    const emailValue = emailInput.value

    if(nameValue === "" || emailValue === ""){

        errorMessage.textContent = "Preencha todos os campos por favor!"
        errorMessage.classList = "error"

        setTimeout(() => {
            errorMessage.textContent = "";
            errorMessage.classList = "";
        }, 3000)


        // return para poder sair da função
        return
    }

    // metodo para criar um elemento
    const li = document.createElement("li")

    li.classList = "item"
    li.innerHTML = `Nome: ${nameValue}, Email: ${emailValue}`

    items.appendChild(li)

    nameInput.value = "";
    emailInput.value = "";

})