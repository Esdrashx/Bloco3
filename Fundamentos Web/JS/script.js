let contatoNome = document.getElementById('nome');
let contatoEmail = document.querySelector('#email');
let contatoAssunto = document.querySelector('#assunto');

contatoNome.style.width = '100%'
contatoEmail.style.width = '100%'
contatoAssunto.style.width = '100%'

function validaNome() {
    let txt = document.querySelector("#txtNome")
    if (contatoNome.value.length < 3) {
        txt.innerHTML = "Nome inválido"
        txt.style.color = 'red'
    } else {
        txt.innerHTML = ""
        contatoNome.style.border = '3px solid green'
    }
}

function validaEmail() {
    let txt = document.querySelector("#txtEmail")
    if (contatoEmail.value.indexOf('@') == -1 || contatoEmail.value.indexOf('.') == -1) {
        txt.innerHTML = "Email inválido"
        txt.style.color = 'red'
    } else {
        txt.innerHTML = ""
        contatoEmail.style.border = '3px solid green'
    }

}