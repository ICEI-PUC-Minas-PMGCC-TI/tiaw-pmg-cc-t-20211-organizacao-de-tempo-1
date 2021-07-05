let btn123 = document.querySelector('.fa-eye')

btn123.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})


function entrar() {
    let usuario = document.querySelector('#usuario')
    let userlabelLogin = document.querySelector('#userlabelLogin')

    let senha = document.querySelector('#senha')
    let senhalabelLogin = document.querySelector('#senhalabelLogin')

    let msgError = document.querySelector('#msgError')

    let listaUser = []

    let userValid = {
        nome: '',
        mail: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if (usuario.value == item.mailCad && senha.value == item.senhaCad) {
            userValid = {
                nome: item.nomeCad,
                mail: item.mailCad,
                senha: item.senhaCad
            }

        }
    })

    if (usuario.value == userValid.mail && senha.value == userValid.senha) {



        window.location.href = 'perfil.html'


        let token = Math.random().toString(16).substr(2)
        localStorage.setItem('token', token)
    } else {
        userlabelLogin.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhalabelLogin.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Email ou senha incorretos'
        usuario.focus()
    }




}



function sair() {
    localStorage.removeItem('token')
    window.location.href = 'login.html'
}