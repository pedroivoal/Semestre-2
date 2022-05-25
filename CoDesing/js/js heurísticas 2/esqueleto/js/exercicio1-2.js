document.addEventListener('DOMContentLoaded', function() {

    // SEU CÓDIGO AQUI: pegue do localStorage o
    // nome e o src da imagem da pessoa clicada
    // e coloque eles na página.

    img = document.querySelector('img')
    img.src = localStorage.getItem('img.src')
    img.alt = localStorage.getItem('img.alt')

    nome = document.querySelector('.nome')
    nome.innerHTML = localStorage.getItem('nome')
})
