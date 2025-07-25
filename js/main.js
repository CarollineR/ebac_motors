 $(document).ready(function(){
        $('#carousel-imagens').slick({
            autoplay:true,
            dots:true,
            infinite:true
        });

        $('.menu-hamburguer').click(function(){
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
                menssagem: {
                    required:  true
                },
                veiculoDeInteresse: {
                    required: false
                }
            },
            messages: {
                nome:'Por favor, insira o seu nome.',
                email:'Por favor, insira um e-mail válido.',
                telefone: 'Por favor, insira o seu telefone.',
                mensagem: 'Por favor, escreva uma mensagem'
            },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
        })

        $('.lista-veiculos button').click(function(){
            const destino = $('#contato');
            const nomeVeiculo = $(this).parent().find('h3').text();

            $('#veiculo-interesse').val(nomeVeiculo);

            $('html').animate({
                scrollTop: destino.offset().top
            }, 1000)
        })

        })