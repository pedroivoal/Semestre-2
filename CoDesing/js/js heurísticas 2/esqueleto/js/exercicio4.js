document.addEventListener('DOMContentLoaded', function() {

    a = document.querySelector('a')

    a.addEventListener('click', function(event) {

        event.preventDefault()

        detalhes = document.querySelector('.detalhes')
        detalhes.classList.add('visible')

    })

})
