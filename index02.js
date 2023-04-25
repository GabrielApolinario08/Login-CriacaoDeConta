const firstName = document.querySelector('#name')
const lastName = document.querySelector('#LastName')
const date = document.querySelector('#date')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')
const form = document.querySelector('#form')
const errorName = document.querySelector('.error-name')
const errorLastName = document.querySelector('.error-lastName')
const errorDate = document.querySelector('.error-date')
const errorEmail = document.querySelector('.error-email')
const errorPassword = document.querySelector('.error-password')
const errorConfirmPassword = document.querySelector('.error-confirmPassword')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    errorName.innerHTML = ''
    errorLastName.innerHTML = ''
    errorDate.innerHTML = ''
    errorEmail.innerHTML = ''
    errorPassword.innerHTML = ''
    errorConfirmPassword.innerHTML = ''

    if(firstName.value == '') {
        errorName.innerHTML += 'Preencha o campo nome!'
        return
    }

    if(lastName.value == '') {
        errorLastName.innerHTML += 'Preencha o campo sobrenome!'
        return
    }

    if(date.value == '') {
        errorDate.innerHTML += 'Preencha o campo data de nascimento!'
        return
    }

    if(email.value == '') {
        errorEmail.innerHTML += 'Preencha o campo email!'
        return
    } else if(!validateEmail(email.value)) {
        errorEmail.innerHTML += 'Email inválido!'
        return
    }

    if(password.value == '') {
        errorPassword.innerHTML += 'Preencha o campo senha!'
        return
    } else if(!validatePassword(password.value, 8)) {
        errorPassword.innerHTML += 'A senha deve ter no mínimo 8 digitos!'
        return
    }

    if(confirmPassword.value == '') {
        errorConfirmPassword.innerHTML += 'Preencha o campo confirmação de senha!'
        return
    } else if(confirmPassword.value != password.value) {
        errorConfirmPassword.innerHTML += 'Confirmação de senha inválida!'
        return
    }
    
    form.submit()
})

function validateEmail(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if(emailRegex.test(email)) {
        return true
    }

    return false
}

function validatePassword(password, min) {
    if(password.length >= min) {
        return true
    }
    return false
}