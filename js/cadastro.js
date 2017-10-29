var fundoLogin = document.getElementById("fundoLogin");
var fecharLogin = document.getElementById("fecharLogin");
var botaoLogin = document.getElementById("#login");

var fundoCadastro = document.getElementById("fundoCadastro");
var fecharCadastro = document.getElementById("fecharCadastro");

var boas = document.querySelector(".boas");
// var usuario;
// var email = document.getElementById('email');
// var senha = document.querySelector('#senha');

// dá pra fazer um botão de desligar que apague as informações!!!!!
var formulario = document.querySelector('form');

login.onclick = function() {
    if (botaoLogin.value == "Deslogar") {
        localStorage.clear();
        boas.innerHTML = "Seja bem vinda, faça <strong>login</strong> para começar";
    
    } else {
        fundoLogin.classList.add("visivel");
    }
}

fundoLogin.onclick = function(e) {
    console.log(e);
    if (e.target == fundoLogin) {
        fundoLogin.classList.remove("visivel");
    }    
}

fecharLogin.onclick = function() {
    fundoLogin.classList.remove("visivel");  
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
        boas.innerHTML = "Seja bem vinda, <strong>" +nome.value+ "</strong>";
        botaoCadastro.classList.add("invisivel");
        e.preventDefault();
    }
}

var formLogin = fundoLogin.querySelector('form');
formLogin.onsubmit = function(e) {
    var emailLogin = document.querySelector("#emailLogin");
    var senhaLogin = document.querySelector("#senhaLogin");

    var modalLogin = document.querySelector(".blocoLogin");
    var correto;
        if (localStorage.email == emailLogin.value && localStorage.senha == senhaLogin.value) {
    //troca de página
            fundoLogin.classList.remove("visivel");
            boas.innerHTML = "Seja bem vinda, <strong>" +localStorage.nome+ "</strong>";
            e.preventDefault();
        } else {
            alert("Seus dados estão incorretos, tente novamente");
            return false;
        }
    
    
}