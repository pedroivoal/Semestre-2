// Reveja os slides desta Aula 14 para lembrar
// de sempre envolver o arquivo .js nisto aqui.
document.addEventListener('DOMContentLoaded', function() {

    // Obtém o campo de texto da página (reveja a
    // Aula 13 caso tenha esquecido como a função
    // querySelector funciona).
    text = document.querySelector('input[type="text"]')

    // Obtém o botão de submissão da página (reveja
    // a Aula 13 caso tenha esquecido como a função
    // querySelector funciona).
    submit = document.querySelector('input[type="submit"]')

    submit.addEventListener('click', function(event) {

        // Lembrando (reveja Aula 13) que o texto
        // de um campo de texto pode ser obtido a
        // partir do atributo value.
        value = text.value

        // Armazena como valor da chave "texto" o
        // que estava escrito no campo de texto.
        localStorage.setItem('texto', value)

        // DICA: O comportamento padrão do clique
        // no botão (redirecionar para result.html)
        // pode ser bloqueado se você descomentar
        // a linha abaixo. Nesse exemplo, queremos
        // que esse comportamento aconteça, então
        // a linha está comentada.

        //event.preventDefault()

    })

})
