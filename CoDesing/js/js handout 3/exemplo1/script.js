// Reveja os slides desta Aula 14 para lembrar
// de sempre envolver o arquivo .js nisto aqui.
document.addEventListener('DOMContentLoaded', function() {

    // Obtém o elemento body da página (reveja
    // Aula 13 caso tenha esquecido como a função
    // querySelector funciona).
    body = document.querySelector('body')

    // Obtém uma lista de todos os elementos h2 da
    // página (reveja Aula 13 caso tenha esquecido
    // como a função querySelectorAll funciona).
    h2s = document.querySelectorAll('h2')


    body.addEventListener('click', function(event) {
        console.log('mouse clicou no body')
    })


    h2s[0].addEventListener('click', function(event) {
        console.log('mouse clicou no primeiro h2')
    })


    h2s[1].addEventListener('click', function(event) {

        // Impede o evento de clique de se propagar
        // para o pai (no caso, o pai é o body).
        event.stopPropagation()

        console.log('mouse clicou no segundo h2')

    })

})
