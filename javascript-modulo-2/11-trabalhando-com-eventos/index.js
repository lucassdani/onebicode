function register(ev) {
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if (password === passwordConfirmation) {
        alert(`usuário ${username} registrado!`)
    } else {
        alert('as senhas não conferem!')
    }
}

const button = document.getElementById('register-button')

button.addEventListener('click', register)

const buttonRemove = document.getElementById('removeListener')
    buttonRemove.addEventListener('click', function () {
        button.removeEventListener('click', register)
    }) 

button.addEventListener('mouseover', function (ev) {
    console.log(ev.currentTarget)
})

