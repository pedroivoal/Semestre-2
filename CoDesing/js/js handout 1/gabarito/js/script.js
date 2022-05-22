// EXEMPLO

function hello() {
    console.log('Hello World!');
}


// EXERCÍCIO 1
// Essa função não precisa de return,
// pois o propósito dela é só imprimir.

function imprime_faixa(idade) {
    if (idade < 18) {
        console.log('jovem')
    } else if (idade < 60) {
        console.log('adulto')
    } else {
        console.log('idoso')
    }
}


// EXERCÍCIO 2
// Essa função não precisa de return,
// pois o propósito dela é só imprimir.

function imprime_tipo(n) {
    if (n % 3 == 0 && n % 5 == 0) {
        console.log('Tipo C')
    } else if (n % 3 == 0) {
        console.log('Tipo A')
    } else if (n % 5 == 0) {
        console.log('Tipo B')
    } else {
        console.log('Tipo D')
    }
}


// EXERCÍCIO 3
// Essa função não precisa de return,
// pois o propósito dela é só imprimir.

function imprime_tabuada(n) {
    i = 1
    while (i <= n) {
        linha = ''
        j = 1
        while (j <= n) {
            linha += String(i * j) + ' '
            j += 1
        }
        console.log(linha)
        i += 1
    }
}


// EXERCÍCIO 4
// Essa função não precisa de return,
// pois o propósito dela é só imprimir.

function imprime_grade(n) {
    i = 1
    while (i <= n) {
        linha = '+'
        j = 1
        while (j <= n) {
            linha += '-+'
            j += 1
        }
        console.log(linha)

        linha = '|'
        j = 1
        while (j <= n) {
            linha += ' |'
            j += 1
        }
        console.log(linha)

        i += 1
    }

    linha = '+'
    j = 1
    while (j <= n) {
        linha += '-+'
        j += 1
    }
    console.log(linha)
}


// EXERCÍCIO 5
// Essa função deve usar return.

function junta(nomes_homem, nomes_mulher, sobrenomes) {
    completos = []

    for (nome of nomes_homem) {
        for (sobrenome of sobrenomes) {
            completos.push(nome + ' ' + sobrenome)
        }
    }

    for (nome of nomes_mulher) {
        for (sobrenome of sobrenomes) {
            completos.push(nome + ' ' + sobrenome)
        }
    }

    return completos
}


// EXERCÍCIO 6
// Essa função deve usar return.

function conta(s) {
    d = {}

    i = 0
    while (i < s.length) {
        c = s.charAt(i)
        if (c in d) {
            d[c] += 1
        } else {
            d[c] = 1
        }
        i += 1
    }

    return d
}
