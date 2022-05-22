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

    lTamanhos = document.querySelectorAll('a')
    lTamanhos[0].innerHTML = names[lTamanhos[0].innerHTML]
    lTamanhos[1].innerHTML = names[lTamanhos[1].innerHTML]
    lTamanhos[2].innerHTML = names[lTamanhos[2].innerHTML]
    lTamanhos[3].innerHTML = names[lTamanhos[3].innerHTML]
    lTamanhos[4].innerHTML = names[lTamanhos[4].innerHTML]

    // Escreva seu código abaixo.

    // ESCREVA SEU CÓDIGO AQUI


})
