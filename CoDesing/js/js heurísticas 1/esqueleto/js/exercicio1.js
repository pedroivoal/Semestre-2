// Reveja os slides da Aula 14 para lembrar
// porque envolver o arquivo .js nisto aqui.
document.addEventListener('DOMContentLoaded', function() {
    
    p = document.querySelector('p')
    figure = document.querySelector('figure')
    // Esta função é chamada quando você clica no texto,
    // ou seja, logo antes do "teste de conexão" começar.
    // Portanto, é aqui que você deve fazer o texto
    // desaparecer e o gif de carregamento aparecer.

    function before() {

        p.classList.add('hidden')
        figure.classList.remove('hidden')
        

    }


    // Esta é chamada quando o "teste de conexão" termina.
    // Portanto, é aqui que você deve fazer o gif de
    // carregamento desaparecer e o texto aparecer.

    function after() {

        figure.classList.add('hidden')
        p.classList.remove('hidden')
        p.innerHTML = 'conexão funcionando!'

        // ESCREVA SEU CÓDIGO AQUI

    }


    // A partir deste ponto você não precisa entender,
    // mas esteja à vontade caso esteja interessado.

    p = document.querySelector('p')

    p.addEventListener('click', function() {
        before()

        setTimeout(after, 500)
    })


})
