addEventListener('DOMContentLoaded', function(){

    // Exercício 1
    curso1 = document.getElementById('curso-1')
    curso1.innerHTML = 'Uma breve introdução à Programação Web'

    curso2 = document.getElementById('curso-2')
    curso2.innerHTML = 'Criando interfaces amigáveis com HTML e CSS'

    // Exercício 2
    lDescricao = document.querySelectorAll('.text-card')
    lDescricao[0].innerHTML = 'Uma breve introdução à Programação Web'
    lDescricao[1].innerHTML = 'Criando interfaces amigáveis com HTML e CSS'

    // Exercício 3
    imgMode = document.querySelector('.img-mode')
    imgMode.addEventListener('click', function(event){

        imgMode = document.querySelector('.img-mode')

        if (imgMode.src == "http://127.0.0.1:5500/js%20atividade/img/dark-mode-off.png"){
            imgMode.src = "http://127.0.0.1:5500/js%20atividade/img/dark-mode-on.png"
        } else {
            imgMode.src = "http://127.0.0.1:5500/js%20atividade/img/dark-mode-off.png"
        }

    })

    // Exercício 4
    selecionar = document.querySelectorAll('button') 
    selecionar[0].addEventListener('click', function(event){

        borda = document.querySelectorAll('.card')

        if (borda[0].style.border == '0.01rem solid red'){
            borda[0].style.border = '0.01rem solid gray'
            borda[1].style.border = '0.01rem solid gray'
            selecionar[0].innerHTML = 'Selecionar'
            selecionar[1].innerHTML = 'Selecionar'
        }else{
            
            borda[0].style.border = '0.01rem solid red'
            borda[1].style.border = '0.01rem solid red'
            selecionar[0].innerHTML = 'Selecionado'
            selecionar[1].innerHTML = 'Selecionado'
        }
        
    })
    selecionar[1].addEventListener('click', function(event){

        borda = document.querySelectorAll('.card')

        if (borda[1].style.border == '0.01rem solid red'){
            borda[0].style.border = '0.01rem solid gray'
            borda[1].style.border = '0.01rem solid gray'
            selecionar[0].innerHTML = 'Selecionar'
            selecionar[1].innerHTML = 'Selecionar'
        }else{
            
            borda[0].style.border = '0.01rem solid red'
            borda[1].style.border = '0.01rem solid red'
            selecionar[0].innerHTML = 'Selecionado'
            selecionar[1].innerHTML = 'Selecionado'
        }
        
    })

    // Exercício 5
    header = document.querySelector('header')
    h1 = document.createElement('h1')
    nCard = document.querySelectorAll('.card').length
    h1.innerHTML = 'Cursos Ativos: '+String(nCard)
    header.appendChild(h1)
    
})