
function validateForm() {
    var campoA = document.getElementById("campoA").value;
    var campoB = document.getElementById("campoB").value;
    var message = document.querySelector("#message");

    if (Number(campoB) > Number(campoA)) {
        message.textContent = "Formulário válido: Número B é maior que Número A.";
        message.classList.add("correct");
        message.classList.remove("incorrect");
    } else {
        message.textContent = "Formulário inválido: Número B deve ser maior que Número A.";
        message.classList.add("incorrect");
        message.classList.remove("correct");
    }
    return false; 
}