// Reveja os slides da Aula 14 para lembrar
// porque envolver o arquivo .js nisto aqui.
document.addEventListener('DOMContentLoaded', function() {


    // Variáveis globais. Pode usar se quiser.
    // A palavra let usada nessas linhas permite
    // que essas variáveis sejam usadas dentro
    // de qualquer uma das funções abaixo.

    let span = document.querySelector('span')

    let p = document.querySelector('p')

    let history = []


    // Função pronta para pegar o total atual.
    // Pode usar se quiser, mas leia e entenda
    // para revisar alguns conceitos anteriores.

    function pegaTotal() {
        return parseInt(span.innerHTML)
    }


    // Função pronta para atualizar o total.
    // Pode usar se quiser, mas leia e entenda
    // para revisar alguns conceitos anteriores.

    function atualizaTotal(valor) {
        span.innerHTML = valor
    }


    // Esta função é chamada quando você clica no '+',
    // ou seja, é aqui que você deve fazer o número
    // que está no retângulo branco ser somado ao total.
    // Além disso, essa função também deve guardar
    // na lista 'history' qual era o total antes da soma.

    function add() {

        history.push(parseInt(p.innerHTML))
        console.log(history)
        let s = 0
        for (i of history){
            s += i
        }
        atualizaTotal(s)

    }


    // Esta função é chamada quando você clica no '⟲'',
    // ou seja, é aqui que você deve fazer o total
    // voltar ao valor antes da última soma. Você deve
    // usar history.pop() para obter esse valor, mas
    // deve checar se history.length não é zero antes
    // de fazer isso, pois pode ser que não exista um
    // valor anterior (se não fizemos nenhuma soma ainda).

    function undo(total) {

        history.pop()
        let s = 0
        for (i of history){
            s += i
        }
        atualizaTotal(s)

    }


    // A partir deste ponto você não precisa entender,
    // mas esteja à vontade caso esteja interessado.

    nums = document.querySelectorAll('.num')

    for (num of nums) {
        num.addEventListener('click', function() {
            if (p.innerHTML == '0') {
                p.innerHTML = this.innerHTML
            }
            else {
                p.innerHTML += this.innerHTML
            }
        })
    }

    coms = document.querySelectorAll('.com')

    for (com of coms) {
        com.addEventListener('click', function() {
            if (this.innerHTML == '⟲') {
                undo()
            } else if (this.innerHTML == '+') {
                add()
                p.innerHTML = '0'
            }
        })
    }


})
