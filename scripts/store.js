//crie um alert utilizando a sintaxe do jquery

$(document).ready(function() {
    //carregar navbar
    $('#navbar').load('../components/navbar/index.html');

    //carregar sidebar
    $('#aside').load('../components/sidebar/index.html');

    // Carrega o componente inicial
    $('#children').load('../components/showcase/index.html');

});