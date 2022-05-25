document.addEventListener('DOMContentLoaded', function() {

    // SEU CÓDIGO AQUI
    arrow = document.querySelectorAll('span')
    ArrowLeft = arrow[0]
    ArrowRight = arrow[1]
    ArrowUp = arrow[2]
    ArrowDown = arrow[3]

    document.addEventListener('keydown', function(event) {
        // console.log('pressionou: ' + event.code)

        // SEU CÓDIGO AQUI
        if(event.code=='ArrowLeft'){
            ArrowLeft.style.color = 'darkmagenta'
        }else if(event.code=='ArrowRight'){
            ArrowRight.style.color = 'darkmagenta'
        }else if(event.code=='ArrowUp'){
            ArrowUp.style.color = 'darkmagenta'
        }else if(event.code=='ArrowDown'){
            ArrowDown.style.color = 'darkmagenta'
        }
    })

    document.addEventListener('keyup', function(event) {
        // console.log('soltou: ' + event.code)

        // SEU CÓDIGO AQUI
        if(event.code=='ArrowLeft'){
            ArrowLeft.style.color = 'black'
        }else if(event.code=='ArrowRight'){
            ArrowRight.style.color = 'black'
        }else if(event.code=='ArrowUp'){
            ArrowUp.style.color = 'black'
        }else if(event.code=='ArrowDown'){
            ArrowDown.style.color = 'black'
        }
    })
})
