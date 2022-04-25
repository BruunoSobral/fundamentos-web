/*  Pelo Query, chamamos o ID usando o '#' 
    Pelo Query, chamamos a Classe usando o '.'
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Insira um nome válido!'
        txtNome.style.color = 'red'
    } else{
        txtNome.innerHTML = 'Você colocou um nome válido!'
        txtNome.style.color = 'yellow'
        nomeOk = true
    }
}
function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
    txtEmail.innerHTML = 'Endereço de e-mail inválido'
    txtEmail.style.color = 'red'
    } else {
    txtEmail.innerHTML = 'E-mail confirmado'
    txtEmail.style.color = 'yellow'
    emailOk = true
    }
}
function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "Não seja tão fanático assim, manda sua dúvida mais resumida."
        txtAssunto.style.color = 'red'
    } else {
        txtAssunto.innerHTML = "C'mon Chelsea!"
        txtAssunto.style.color = 'yellow'
        assuntoOk = true
    }
}
function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Parabéns Blue, sua mensagem já foi enviada!')
    } else {
        alert ('Vish, tem algo errado aí. Dá outra conferida para conseguir enviar sua mensagem!')
    }
}
function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '650px'
}
function mapaNormal(){
    mapa.style.width = '500px'
    mapa.style.height = '350px'
}