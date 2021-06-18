let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let mail = document.querySelector('#mail')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let senha = document.querySelector('#senha')
let labelPassword = document.querySelector('#labelPassword')
let validPassword = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmarPassword = document.querySelector('#labelConfirmarPassword')
let validConfirmarPassword = false

let msgError = document.querySelector('#msgError')
let msgSucces = document.querySelector('#msgSucces')









nome.addEventListener('keyup', () => {

    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = '<strong>Nome *Insira no minimo 3 caracteres</strong>'
        nome.setAttribute('style', 'border-color: red')
        validNome = false

    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }

})

mail.addEventListener('keyup', () => {

    if (mail.value.length <= 6) {
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = '<strong>Insira um e-mail</strong>'
        mail.setAttribute('style', 'border-color: red')
        validEmail = false

    } else {
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = 'E-mail'
        mail.setAttribute('style', 'border-color: green')
        validEmail = true

    }

})

senha.addEventListener('keyup', () => {

    if (senha.value.length <= 5) {
        labelPassword.setAttribute('style', 'color: red')
        labelPassword.innerHTML = '<strong>Insira no minimo 6 caracteres</strong>'
        senha.setAttribute('style', 'border-color: red')
        validPassword = false

    } else {
        labelPassword.setAttribute('style', 'color: green')
        labelPassword.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        validPassword = true
    }

})

confirmSenha.addEventListener('keyup', () => {

    if (senha.value != confirmSenha.value) {
        labelConfirmarPassword.setAttribute('style', 'color: red')
        labelConfirmarPassword.innerHTML = '<strong>As senhas não conferem</strong>'
        confirmSenha.setAttribute('style', 'border-color: red')
        validConfirmarPassword = false

    } else {
        labelConfirmarPassword.setAttribute('style', 'color: green')
        labelConfirmarPassword.innerHTML = 'Senha confirmada'
        confirmSenha.setAttribute('style', 'border-color: green')
        validConfirmarPassword = true
    }

})








function cadastrar() {

    if (validNome && validEmail && validPassword && validConfirmarPassword) {

        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push({
            nomeCad: nome.value,
            mailCad: mail.value,
            senhaCad: senha.value
        })

        localStorage.setItem('listaUser', JSON.stringify(listaUser))



        msgSucces.setAttribute('style', 'display: block')
        msgSucces.innerHTML = '<strong>Cadastrando usuário...</strong>'

        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        setTimeout(() => {

            /* window.location.href = '' */
            /* <==== AINDA N EMPLEMENTADO */ }, 3000)



    } else {

        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'

        msgSucces.setAttribute('style', 'display: none')
        msgSucces.innerHTML = ''


    }


}