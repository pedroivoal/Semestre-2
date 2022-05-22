// Reveja os slides desta Aula 14 para lembrar
// de sempre envolver o arquivo .js nisto aqui.
document.addEventListener('DOMContentLoaded', function() {

    janela = document.querySelector('.janela')

    butomAbrir = document.querySelector('.abrir')
    butomAbrir.addEventListener('click', function(event){
        janela.style.display = 'block'
    })

    butomFechar = document.querySelector('.fechar')
    butomFechar.addEventListener('click', function(event){
        janela.style.display = 'none'
    })

})
