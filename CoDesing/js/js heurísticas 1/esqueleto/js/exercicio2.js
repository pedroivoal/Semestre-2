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

    lTamanhos = document.querySelectorAll('a')
    for (i=0; i < lTamanhos.length; i++){
        lTamanhos[i].innerHTML = names[lTamanhos[i].innerHTML]
    }

})
