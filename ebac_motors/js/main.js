$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true
    })

    $('.menu-hamburguer').click(function (){
    $('nav').slideToggle();
    })
    
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            messagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }
        }, 
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert (`Existem ${camposIncorretos} campos incorretos`)
            }
        }
        })

        // Seleciona todos os botões dentro de '.lista-veiculo'
$('.lista-veiculos button').click(function () { 
    // Seleciona o elemento com o ID 'contato'
    const destino = $('#contato');
    
    // Obtém o texto do elemento <h3> pai do botão clicado
    const nomeVeiculo = $(this).parent().find('h3').text();
    
    // Define o valor do input com o ID 'veiculo-interesse' como o nome do veículo
    $('#veiculo-interesse').val(nomeVeiculo);

    // Anima a rolagem da página para o elemento 'contato' em 1000 milissegundos (1 segundo)
    $('html').animate({
        scrollTop: destino.offset().top
    }, 1000);
});

    })