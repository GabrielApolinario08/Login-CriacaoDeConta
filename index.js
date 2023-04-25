const user = document.querySelector('#user')
const password = document.querySelector('#password')
const form = document.querySelector('#form')
const errorUser = document.querySelector('.error-user')
const errorPassword = document.querySelector('.error-password')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    errorUser.innerHTML = ''
    errorPassword.innerHTML = ''
    if(user.value == '') {
        errorUser.innerHTML+= 'Preencha o campo usuário!'
        return
    }

    if(password.value == '') {
        errorPassword.innerHTML+= 'Preencha o campo senha!'
        return

    } else if(!validatePassword(password.value, 8)) {
        errorPassword.innerHTML = 'O campo senha deve ter no mínimo 8 caractéres!'
        return
    }
    errorPassword.innerHTML+= ''

    form.submit()
})

function validatePassword(password, size) {
    if(password.length >= size) {
        return true
    } else {
        return false
    }
}