const sendButton = document.querySelector(".btn-send")

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
    alert("E-mail válido");
    }
    else{
    alert("E-mail inválido");
    }
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

//   const isExpanded = JSON.parse(menuButton.getAttribute("aria-expanded"));
//   console.log(isExpanded);
//   menuButton.setAttribute("aria-expanded", !isExpanded)
})


