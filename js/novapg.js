var nome = localStorage.nome;
var botaoLogin = document.querySelector("#login");
var botaoCadastro = document.querySelector("#cadastro");

if (nome == null) {
    boas.innerHTML = "Seja bem vinda, faça <strong>login</strong> para começar";
    botaoCadastro.classList.remove("invisivel");
} else {
    boas.innerHTML = "Seja bem vinda, <strong>" +nome+ "<strong>";
    botaoLogin.value = "Deslogar";
    botaoCadastro.classList.add("invisivel");
}

if (botaoLogin.value !== "Deslogar") {
    botaoCadastro.classList.add("visivel");
    botaoCadastro.classList.remove("invisivel");
}

