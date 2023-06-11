const sendButton = document.querySelector(".btn-send")
const backButton = document.querySelector(".btn-back")
const firstCardElement = document.querySelector("#card1")
const secondCardElement = document.querySelector("#card2")
const emailForm = document.querySelector("#email-form")

// função que valida o email

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

        if (emailForm.classList) emailForm.classList.remove("form-warning");
        else emailForm.className -= " form-warning";


        }
    else{
        if (emailForm.classList) emailForm.classList.add("form-warning");
        else emailForm.className += " form-warning";
    }
}

// Função que remove a cor vermelha caso o email digitado esteja correto

function validacorEmail() {
    var input = document.querySelector(".email-form")
    var email = input.value
    usuario = email.substring(0, email.indexOf("@"));
    dominio = email.substring(email.indexOf("@")+ 1, email.length);
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {

        if (emailForm.classList) emailForm.classList.remove("form-warning");
        else emailForm.className -= " form-warning";

        }
    else{
        if (emailForm.classList) emailForm.classList.add("form-warning");
        else emailForm.className += " form-warning";
    }
}

// Função que volta para a página inicial

function voltar(){
    if (firstCardElement.classList) firstCardElement.classList.remove("invisible");
    else firstCardElement.className -= " invisible";

    if (secondCardElement.classList) secondCardElement.classList.add("invisible");
    else secondCardElement.className += " invisible";
}

// Executa a validação de e-mail quando o usuário aperta enter

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
