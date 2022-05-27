// Reveja os slides desta Aula 14 para lembrar
// de sempre envolver o arquivo .js nisto aqui.
document.addEventListener('DOMContentLoaded', function() {

    nav = document.querySelector('nav');
    nav.addEventListener('click', function(event){
        event.stopPropagation()
    })

    menuButom = document.querySelector('img');
    menuButom.addEventListener('click', function(event){

        nav.style.left = '0%';
        event.stopPropagation();
    })

    bodyButom = document.querySelector('body');
    bodyButom.addEventListener('click', function(){
        
        nav.style.left = '-100%';
    })
})
