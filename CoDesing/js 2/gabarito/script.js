// EXEMPLO

function hello() {
    h1 = document.querySelector('h1')
    h1.innerHTML = 'Hello World!'
}


// EXERCÍCIO 1

function mostra_faixa() {
    span_idade = document.querySelector('.idade')
    span_faixa = document.querySelector('.faixa')

    idade = parseInt(span_idade.innerHTML)

    if (idade < 18) {
        span_faixa.innerHTML = 'jovem'
    } else if (idade < 60) {
        span_faixa.innerHTML = 'adulto'
    } else {
        span_faixa.innerHTML = 'idoso'
    }
}


// EXERCÍCIO 2

function mostra_tipo() {
    p = document.querySelector('.n')
    span = p.querySelector('span')
    n = parseInt(span.innerHTML)

    if (n % 3 == 0 && n % 5 == 0) {
        p.style.color = 'rgb(0, 0, 255)'
    } else if (n % 3 == 0) {
        p.style.color = 'rgb(255, 0, 0)'
    } else if (n % 5 == 0) {
        p.style.color = 'rgb(0, 255, 0)'
    } else {
        p.style.color = 'rgb(255, 0, 255)'
    }
}


// EXERCÍCIO 3

function imprime_tabuada(n) {
    text = ''
    i = 1
    while (i <= n) {
        linha = ''
        j = 1
        while (j <= n) {
            linha += String(i * j) + ' '
            j += 1
        }
        text += linha + '\n'
        i += 1
    }

    pres = document.querySelectorAll('pre')
    pres[0].innerHTML = text
}


// EXERCÍCIO 4

function junta() {
    lis_homem = document.querySelectorAll('.nomes_homem li')
    lis_mulher = document.querySelectorAll('.nomes_mulher li')
    lis_sobre = document.querySelectorAll('.nomes_sobre li')

    ul = document.querySelector('.completos')
    ul.innerHTML = ''

    for (li_nome of lis_homem) {
        for (li_sobrenome of lis_sobre) {
            li = document.createElement('li')
            li.innerHTML = li_nome.innerHTML + ' ' + li_sobrenome.innerHTML
            ul.appendChild(li)
        }
    }

    for (li_nome of lis_mulher) {
        for (li_sobrenome of lis_sobre) {
            li = document.createElement('li')
            li.innerHTML = li_nome.innerHTML + ' ' + li_sobrenome.innerHTML
            ul.appendChild(li)
        }
    }
}


// EXERCÍCIO 5

function conta() {
    input = document.querySelector('input')
    s = input.value

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

    ul = document.querySelector('.contagens')
    ul.innerHTML = ''

    for (c in d) {
        li = document.createElement('li')
        li.innerHTML = c + ': ' + d[c]
        ul.appendChild(li)
    }
}


// DESAFIO

function imprime_arvore(n) {
    text = ''
    i = 0
    while (i < n) {
        linha = ''
        j = 0
        while (j < n - i - 1) {
            linha += ' '
            j += 1
        }
        j = 0
        while (j < i) {
            linha += '/'
            j += 1
        }
        linha += '|'
        j = 0
        while (j < i) {
            linha += '\\'
            j += 1
        }
        text += linha + '\n'
        i += 1
    }

    pres = document.querySelectorAll('pre')
    pres[1].innerHTML = text
}
