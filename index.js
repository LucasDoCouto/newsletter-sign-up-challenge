const sendButton = document.querySelector(".btn-send")
const backButton = document.querySelector(".btn-back")
const firstCardElement = document.querySelector("#card1")
const secondCardElement = document.querySelector("#card2")



function validacaoEmail(x) {
    usuario = x.substring(0, x.indexOf("@"));
    dominio = x.substring(x.indexOf("@")+ 1, x.length);
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        
        if (firstCardElement.classList) firstCardElement.classList.add("invisible");
        else firstCardElement.className += " invisible";

        if (secondCardElement.classList) secondCardElement.classList.remove("invisible");
        else secondCardElement.className -= " invisible";


        }
    else{
    alert("E-mail inválido");
    }
}

function voltar(){
    if (firstCardElement.classList) firstCardElement.classList.remove("invisible");
    else firstCardElement.className -= " invisible";

    if (secondCardElement.classList) secondCardElement.classList.add("invisible");
    else secondCardElement.className += " invisible";
}

// Executa a validação de e-mail quando o usuário aperta enter
// TODO: Desabilitar envio automatico do formulário após a execução do script

function readInput(el, e) {
    var input = document.querySelector(".email-form")
    var email = input.value

    if (e.keyCode == 13) {
      validacaoEmail(email)
    }
}

// Executa a validação do e-mail quando o usuário pressiona o botão

sendButton.addEventListener("click",function(){
    var input = document.querySelector(".email-form")
    var email = input.value
    validacaoEmail(email)
})

// Volta para a página inicial ao pressionar o botão

backButton.addEventListener("click",function(){
    voltar()
})
