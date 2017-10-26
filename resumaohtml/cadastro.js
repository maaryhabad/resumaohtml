var fundoLogin = document.getElementById("fundoLogin");
var fecharLogin = document.getElementById("fecharLogin");
var botaoLogin = document.getElementById("#login");

var fundoCadastro = document.getElementById("fundoCadastro");
var fecharCadastro = document.getElementById("fecharCadastro");
// var usuario;
// var email = document.getElementById('email');
// var senha = document.querySelector('#senha');

// dá pra fazer um botão de desligar que apague as informações!!!!!
var formulario = document.querySelector('form');

login.onclick = function() {
    fundoLogin.classList.add("visivel");
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
    var boas = document.querySelector(".boas");

    var modalCadastro = document.querySelector(".blocoCadastro");

    var usuarios = JSON.parse(localStorage.usuarios || "[]");

    localStorage.nome = nome.value;
    localStorage.email = emailCadastro.value;
    localStorage.senha = senhaCadastro.value;
    localStorage.confirmacao = confirmacao.value;

    usuarios.push({
        email: emailCadastro.value,
        senha: senhaCadastro.value,
        nome: nome.value,
    });

    if (senhaCadastro.value !== confirmacao.value) {
        alert("As duas senhas não correspondem, tente novamente");
    } else {
        fundoCadastro.classList.remove("visivel");
        boas.innerHTML = "Seja bem vinda, " +nome.value;
        e.preventDefault();
    }
    localStorage.usuarios = JSON.stringify(usuarios);
}

var formLogin = fundoLogin.querySelector('form');
formLogin.onsubmit = function(e) {
    var emailLogin = document.querySelector("#emailLogin");
    var senhaLogin = document.querySelector("#senhaLogin");

    var modalLogin = document.querySelector(".blocoLogin");
    var boas = document.querySelector(".boas");
    var usuarios = JSON.parse(localStorage.usuarios || "[]");
    var correto;
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == emailLogin.value && usuarios[i].senha == senhaLogin.value) {
    //troca de página
            fundoLogin.classList.remove("visivel");
            boas.innerHTML = "Seja bem vinda, " +usuarios[i].nome;
            e.preventDefault();
        } else {
            alert("Seus dados estão incorretos, tente novamente");
            return false;
        }
    }
    
    
}