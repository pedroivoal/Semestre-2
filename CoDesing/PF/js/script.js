document.addEventListener('DOMContentLoaded', function() {

    nomeT = document.querySelector('header div div h4')
    nomeT.innerHTML = 'Pedro Ivo'

    nomeUsuario = document.querySelectorAll('.msg-usuario .msg-titulo h2')
    for (nome of nomeUsuario){
        nome.innerHTML = 'Pedro Ivo'
        nome.style. fontWeight = 'bold'
    }

    nomeReceptor = document.querySelectorAll('.msg-resposta .msg-titulo-invertida h2')
    for (nome of nomeReceptor){
        nome.innerHTML = 'André'
        nome.style.fontWeight = 'bold'
    }

    lData = ['01/06 - 09:00', '09:00','01/06 - 09:03','01/06 - 09:04','09:05',]
    horario = document.querySelectorAll('h3')
    for (i=0; i<lData.length; i++){
        horario[i].innerHTML = lData[i]
    }

    bolhaUsuario = document.querySelectorAll('.bolha-usuario')
    for (bolha of bolhaUsuario){
        bolha.style.borderRadius = '0rem'
    }

    button = document.querySelector('.botao-enviar')
    button.addEventListener('click', function(event){

        event.preventDefault()
        addMsg()

    })
})

function addMsg(){

    section = document.createElement('section')
    section.classList.add('msg-usuario')

    divT = document.createElement('div')
    divT.classList.add('msg-titulo')

    h2 = document.createElement('h2')
    h2.innerHTML = 'Pedro Ivo'
    h2.style.fontWeight = 'bold'

    h3 = document.createElement('h3')
    data = new Date().toLocaleString();
    for (i=0; i<=4; i++){
        h3.innerHTML += data[i]
    }
    h3.innerHTML += ' - '
    for (i=12; i<=16; i++){
        h3.innerHTML += data[i]
    }
    
    divBolha = document.createElement('div')
    divBolha.classList.add('bolha-usuario')

    input = document.querySelector('input[type="text"]')
    p = document.createElement('p')
    p.innerHTML = input.value


    divT.appendChild(h2)
    divT.appendChild(h3)
    section.appendChild(divT)

    divBolha.appendChild(p)
    section.appendChild(divBolha)
    divBolha.style.borderRadius = '0rem'
    

    main = document.querySelector('.msg-panel')
    main.appendChild(section)

    input.value = ''

}
