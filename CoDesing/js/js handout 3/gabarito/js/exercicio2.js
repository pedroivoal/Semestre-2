// Reveja os slides desta Aula 14 para lembrar
// de sempre envolver o arquivo .js nisto aqui.
document.addEventListener('DOMContentLoaded', function() {

    abrir = document.querySelector('.abrir')

    janela = document.querySelector('.janela')

    fechar = document.querySelector('.fechar')

    abrir.addEventListener('click', function(event) {
        janela.style.display = 'block'
    })

    fechar.addEventListener('click', function(event) {
        janela.style.display = 'none'
    })

})
