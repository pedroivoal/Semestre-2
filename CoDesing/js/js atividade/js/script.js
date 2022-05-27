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

    // Exercício 3 no final junto com o Exercício 6

    // Exercício 4
    selecionar = document.querySelectorAll('button') 
    selecionar[0].addEventListener('click', function(event){

        let borda = document.querySelectorAll('.card')

        if (borda[0].style.border == '0.01rem solid red'){
            borda[0].style.border = '0.01rem solid gray'
            selecionar[0].innerHTML = 'Selecionar'
        }else{  
            borda[0].style.border = '0.01rem solid red'
            selecionar[0].innerHTML = 'Selecionado'
        }
    })
    selecionar[1].addEventListener('click', function(event){

        let borda = document.querySelectorAll('.card')

        if (borda[1].style.border == '0.01rem solid red'){
            borda[1].style.border = '0.01rem solid gray'
            selecionar[1].innerHTML = 'Selecionar'
        }else{   
            borda[1].style.border = '0.01rem solid red'
            selecionar[1].innerHTML = 'Selecionado'
        }
    })

    // Exercício 5
    header = document.querySelector('header')
    h1 = document.createElement('h1')
    nCard = document.querySelectorAll('.card').length
    h1.innerHTML = 'Cursos Ativos: '+String(nCard)
    header.appendChild(h1)

    // Exercício 3 + Exercício 6
    booleana = true
    imgMode = document.querySelector('.img-mode')
    imgMode.addEventListener('click', function(event){

        body = document.querySelector('body')//Exercício 6
        title = document.querySelector('.home-link')//Exercício 6
        h5 = document.querySelectorAll('h5')//Exercício 6

        if (booleana){
            imgMode.src = "/img/dark-mode-on.png"
            
            // header colors
            header.style.background = '#2b2b2b'//Exercício 6
            title.style.color = 'white'//Exercício 6
            imgMode.style.background = '#423F3E'//Exercício 6
            h1.style.color = 'white'//Exercício 6
            
            // body colors
            body.style.background = '#334756'//Exercício 6
            curso1.style.color = 'white'//Exercício 6
            curso2.style.color = 'white'//Exercício 6
            h5[0].style.color = 'white'//Exercício 6
            h5[1].style.color = 'white'//Exercício 6
            lDescricao[0].style.color = 'white'//Exercício 6
            lDescricao[1].style.color = 'white'//Exercício 6
            selecionar[0].style.color = 'white'//Exercício 6
            selecionar[1].style.color = 'white'//Exercício 6
            selecionar[0].style.background = '#423F3E'//Exercício 6
            selecionar[1].style.background = '#423F3E'//Exercício 6

            booleana = false
        } else {
            imgMode.src = "/img/dark-mode-off.png"
            
            // header colors
            header.style.background = 'whitesmoke'//Exercício 6
            title.style.color = 'gray'//Exercício 6
            imgMode.style.background = 'whitesmoke'//Exercício 6
            h1.style.color = 'black'//Exercício 6
            
            // body colors
            body.style.background = 'white'//Exercício 6
            curso1.style.color = 'black'//Exercício 6
            curso2.style.color = 'black'//Exercício 6
            h5[0].style.color = 'black'//Exercício 6
            h5[1].style.color = 'black'//Exercício 6
            lDescricao[0].style.color = 'black'//Exercício 6
            lDescricao[1].style.color = 'black'//Exercício 6
            selecionar[0].style.color = 'black'//Exercício 6
            selecionar[1].style.color = 'black'//Exercício 6
            selecionar[0].style.background = 'lightgray'//Exercício 6
            selecionar[1].style.background = 'lightgray'//Exercício 6

            booleana = true
        }
    })
})