// Reveja os slides desta Aula 14 para lembrar
// de sempre envolver o arquivo .js nisto aqui.
document.addEventListener('DOMContentLoaded', function() {

    // Obtém o valor armazenado da chave "texto".
    value = localStorage.getItem('texto')

    // Se esse valor existe (DICA: para verificar
    // se existe, compare ele com a palavra null)...
    if (value != null) {

        // Obtém o elemento span da página (reveja a
        // Aula 13 caso tenha esquecido como a função
        // querySelector funciona).
        span = document.querySelector('span')

        // Coloca o valor obtido como conteúdo desse
        // elemento span (reveja a Aula 13).
        span.innerHTML = value

    }

})
