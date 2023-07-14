function validarFormulario(event) {
    event.preventDefault();

    var primeiroNumero = parseInt(document.getElementById("numeroA").value);
    var segundoNumero = parseInt(document.getElementById("numeroB").value);

    if (segundoNumero > primeiroNumero) {
        document.getElementById("mensagem").innerHTML = "Formulário Enviado com Sucesso!";
    } else {
        document.getElementById("mensagem").innerHTML = "Formulário inválido! O Primeiro Número deve ser maior que o Segundo Número.";
    }
}

document.getElementById("formularioEbac").addEventListener("submit", validarFormulario);