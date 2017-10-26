var titulo = document.getElementById("titulo");
var img = document.getElementById("faixa");
var texto = document.getElementById("texto");

function iconeManager1() {/*HOME*/
    titulo.innerHTML = "Sobre o <strong>Resumão</strong>";
    img.src = "img/resumao.png";
    texto.innerHTML = "O {re}sumão foi montado com o propósito de ajudar todas as meninas que participaram da turma 4 do Bootcamp de FrontEnd do <strong>{reprograma}</strong>. Facilitando o acesso à informação de forma clara e objetiva. Utilizando um código estruturado e comentado.";
}

function iconeManager2() {
    titulo.innerHTML = "Sobre <strong>FrontEnd</strong>";
    img.src = "img/FrontEnd.png";
    texto.innerHTML = "O desenvolvedor FrontEnd é responsável por 'dar vida' à interface. Trabalha com a parte da aplicação que interage diretamente com o usuário. Por isso, é importante que esse desenvolvedor também se preocupe com a experiência do usuário. Na parte de estudo, este profissional foca em HTML (linguagem de marcação), CSS (linguagem de estilo) e JavaScript (linguagem de script/programação)..";
}
function iconeManager3() {
    titulo.innerHTML = "Sobre <strong>HTML/CSS</strong>";
    img.src = "img/codigo.png"
    texto.innerHTML = "HTML (abreviação para a expressão inglesa HyperText Markup Language, que significa Linguagem de Marcação de Hipertexto) é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML.<br><br>Cascading Style Sheets (CSS) é um simples mecanismo para adicionar estilo (cores, fontes, espaçamento, etc.) a um documento web. Em vez de colocar a formatação dentro do documento, o CSS cria um link para uma página que contém os estilos. Quando quiser alterar a aparência do portal, basta modificar apenas um arquivo. Com a variação de atualizações dos navegadores, o suporte ao CSS pode variar. O Internet Explorer 6, p. ex., tem suporte total a CSS1, e praticamente nulo a CSS2. Navegadores mais modernos, como Google Chrome e Mozilla Firefox, tem suporte maior, inclusive até a CSS3, ainda em desenvolvimento.";
}

function iconeManager4() { /*TAG*/
    texto.innerHTML = "<p>Utilizamos as TAG's de texto para facilitar a classificação de informações dentro do nosso código.</p><div class='tag'><div><h1>Esse é o estilo H1.</h1><h2>Esse é o estilo H2.</h2><h3>Esse é o estilo H3.</h3><h4>Esse é o estilo H4.</h4><h5>Esse é o estilo H5.</h5><h6>Esse é o estilo H6.</h6><strong>Esse é o estilo strong.</strong><p>Esse é o p.</p></div><div><iframe src='https://pastebin.com/embed_iframe/2VwyTLHZ' style='border:none;width:100%;height:300px;margin-top:10%'></iframe></div></div>";
}
function iconeManager5() {
    titulo.innerHTML = "Sobre <strong>Fontes</strong>";
    texto.innerHTML = "";
}

