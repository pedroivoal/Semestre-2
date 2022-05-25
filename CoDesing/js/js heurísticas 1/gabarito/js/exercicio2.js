// Reveja os slides da Aula 14 para lembrar
// porque envolver o arquivo .js nisto aqui.
document.addEventListener('DOMContentLoaded', function() {


    // Neste dicionário, não mexa.

    names = {
        '640x480': 'Pequena',
        '800x600': 'Média',
        '1024x768': 'Grande',
        '1920x1080': 'HD',
        '3840x2160': 'Ultra HD',
    }


    // Escreva seu código abaixo.

    as = document.querySelectorAll('a')

    for (a of as) {
        a.innerHTML = names[a.innerHTML]
    }


})
