// Reveja os slides da Aula 14 para lembrar
// porque envolver o arquivo .js nisto aqui.
document.addEventListener('DOMContentLoaded', function() {


    // Variáveis globais. Pode usar se quiser.
    // A palavra let usada nessas linhas permite
    // que essas variáveis sejam usadas dentro
    // de qualquer uma das funções abaixo.


    let nome = document.querySelector('.nome')

    let email = document.querySelector('.email')

    let enviar = document.querySelector('input[type="submit"]')

    enviar.setAttribute("editable", true)


    // Esta função é chamada sempre que o usuário digitar
    // alguma coisa em um dos campos (se quiser saber qual
    // é o evento, o código está disponível mais abaixo).
    // Ou seja, é nessa função que você deve desabilitar
    // o botão se um dos dois campos estiver vazio.

    function update() {

        if (nome == null || email == null){
            enviar.setAttribute("editable", true)
            console.log('bom')
        } else {
            enviar.setAttribute("editable", false)
        }

    }


    // A partir deste ponto você não precisa entender,
    // mas esteja à vontade caso esteja interessado.

    nome.addEventListener('input', function() {
        update()
    })

    email.addEventListener('input', function() {
        update()
    })

    update()


})
