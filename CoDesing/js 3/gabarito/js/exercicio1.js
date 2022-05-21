// Reveja os slides desta Aula 14 para lembrar
// de sempre envolver o arquivo .js nisto aqui.
document.addEventListener('DOMContentLoaded', function() {

    body = document.querySelector('body')

    img = document.querySelector('img')

    nav = document.querySelector('nav')

    body.addEventListener('click', function(event) {
        nav.style.left = '-100%'
    })

    img.addEventListener('click', function(event) {
        event.stopPropagation()

        nav.style.left = '0'
    })

})
