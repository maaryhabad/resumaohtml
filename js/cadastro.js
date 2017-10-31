var fundoLogin = document.getElementById("fundoLogin");
var fecharLogin = document.getElementById("fecharLogin");
var botaoLogin = document.getElementById("login");

var fundoCadastro = document.getElementById("fundoCadastro");
var fecharCadastro = document.getElementById("fecharCadastro");

var boas = document.querySelector(".boas");
// var usuario;
// var email = document.getElementById('email');
// var senha = document.querySelector('#senha');

// dá pra fazer um botão de desligar que apague as informações!!!!!
var formulario = document.querySelector('form');

var botaoCadastro = document.querySelector("#cadastro");

var nome = localStorage.nome;


if (localStorage.nome == undefined) {
    boas.innerHTML = "Seja bem vinda, faça seu <strong>cadastro</strong> para começar";
    botaoCadastro.classList.remove("invisivel");
    botaoLogin.classList.add("invisivel");
} else {
    boas.innerHTML = "Seja bem vinda, <strong>" +localStorage.nome+ "<strong>";
    botaoLogin.value = "Deslogar";
    botaoLogin.classList.remove("invisivel");
}


login.onclick = function() {
    if (botaoLogin.value == "Deslogar") {
        localStorage.clear();
        boas.innerHTML = "Seja bem vinda, faça seu <strong>cadastro</strong> para começar";
        botaoLogin.value = "Login";
    } else {
        fundoLogin.classList.add("visivel");
        if (localStorage.nome == "") {
            botaoLogin.value = "Deslogar";
            botaoCadastro.classList.add("visivel");
            botaoCadastro.classList.remove("invisivel");
        }       
    }
}


cadastro.onclick = function() {
    fundoCadastro.classList.add("visivel");
}

fundoCadastro.onclick = function(e) {
    console.log(e);
    if (e.target == fundoCadastro) {
        fundoCadastro.classList.remove("visivel");
    }   
}

fecharCadastro.onclick = function() {
    fundoCadastro.classList.remove("visivel");
}

var formCadastro = fundoCadastro.querySelector('form');

formCadastro.onsubmit = function (e) {
    debugger;
    var nome = document.querySelector("#nomeCadastro");
    var emailCadastro = document.querySelector("#emailCadastro");
    var senhaCadastro = document.querySelector("#senhaCadastro");
    var confirmacao = document.querySelector("#confirmacaoCadastro"); 
    var modalCadastro = document.querySelector(".blocoCadastro");
    var botaoCadastro = document.querySelector("#cadastro");


    localStorage.nome = nome.value;
    localStorage.email = emailCadastro.value;
    localStorage.senha = senhaCadastro.value;
    localStorage.confirmacao = confirmacao.value;


    if (senhaCadastro.value !== confirmacao.value) {
        alert("As duas senhas não correspondem, tente novamente");
    } else {
        fundoCadastro.classList.remove("visivel");
        botaoCadastro.classList.remove("visivel");
        botaoCadastro.classList.add("invisivel");
        e.preventDefault();
        boas.innerHTML = "Seja bem vinda, <strong>" +localStorage.nome+ "<strong>";
        botaoLogin.classList.add("visivel");
        botaoLogin.classList.remove("invisivel");
        botaoLogin.value = "Deslogar";
    }
}
