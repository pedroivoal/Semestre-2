document.addEventListener('DOMContentLoaded', function() {

    as = document.querySelectorAll('a')

    for (a of as) {

        a.addEventListener('click', function(event) {

            // Obtém o elemento que foi clicado. Não podemos
            // usar a variável "a" diretamente aqui dentro,
            // pois o valor dela muda ao longo do loop.
            t = event.currentTarget

            // SEU CÓDIGO AQUI: coloque no localStorage o
            // nome e o src da imagem da pessoa clicada.
            img = t.querySelector('img')
            localStorage.setItem('img.src', img.src)
            localStorage.setItem('img.alt', img.alt)

            nome = t.querySelector('h2')
            localStorage.setItem('nome', nome.innerHTML)
        })

    }

})
