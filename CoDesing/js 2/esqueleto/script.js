// EXEMPLO

document.addEventListener('DOMContentLoaded', function(){

    // EXERCÍCIO 1
    idade = document.querySelector('.idade');
    faixa = document.querySelector('.faixa');
    faixa.innerHTML = mostra_faixa(idade);

    // EXERCÍCIO 2
    n = document.querySelector('.n');
    span_n = n.querySelector('span')
    n.style.color = mostra_tipo(Number(span_n.innerHTML));

    // EXERCÍCIO 3
    tabuada = document.querySelector('pre')
    tabuada.innerHTML = imprime_tabuada(8)

    // EXERCÍCIO 4
    nomes_homem = document.querySelector('.nomes_homem').querySelectorAll('li')
    l_nomes_homem = []
    for (li of nomes_homem){
        l_nomes_homem.push(li.innerHTML)
    }

    nomes_mulher = document.querySelector('.nomes_mulher').querySelectorAll('li')
    l_nomes_mulher = []
    for (li of nomes_mulher){
        l_nomes_mulher.push(li.innerHTML)
    }

    sobrenomes = document.querySelector('.nomes_sobre').querySelectorAll('li')
    l_sobrenomes = []
    for (li of sobrenomes){
        l_sobrenomes.push(li.innerHTML)
    }

    pai = document.querySelector('.completos')
    nomes = junta(l_nomes_homem, l_nomes_mulher, l_sobrenomes)
    for (i of nomes){
        filho = document.createElement('li');
        filho.innerHTML = i;
        pai.appendChild(filho);
    }


    // EXERCÍCIO 5
    botao5 = document.querySelector('.botão')
    botao5.addEventListener('click', function(event){
        
        contagem = document.querySelector('.contagens')
        l_child = contagem.querySelectorAll('li')

        i = 0
        while (i < l_child.length){
            l_child[i] = document.querySelector('.contagens').removeChild(l_child[i])
            i++
        }
        

        text = document.querySelector('input').value;
        D = conta(text);
        for (k of Object.keys(D)){
            filho = document.createElement('li')
            filho.innerHTML = String(k)+':'+String(D[k])
            contagem.appendChild(filho)
        }
    })

    // EXERCÍCIO 6
    // DESAFIO
    botao6 = document.querySelector('.desafio2')
    botao6.addEventListener('click', function(event){
        n = document.querySelector('.desafio1').value
        pre = document.getElementById('pre1')
        console.log(pre)

        pre.innerHTML = imprime_arvore(n)
    })
    
})

function hello() {
    h1 = document.querySelector('h1')
    h1.innerHTML = 'Hello World!'
}

// EXERCÍCIO 1
function mostra_faixa(idade) {
    if (idade<18){
        return 'jovem';
    } else if(idade<60){
        return 'adulto';
    } else{
        return 'idoso';
    }
}

// EXERCÍCIO 2
function mostra_tipo(n) {
    if (n%3==0 && n%5==0){
        return 'blue'
    } else if (n%5==0){
        return 'green'
    } else if (n%3==0){
        return 'red'
    } else {
        return 'magenta'
    }
}

// EXERCÍCIO 3
function imprime_tabuada(n) {
    l = ''
    for (i1=1; i1<=n; i1++){

        let c = '';
        for(i=1; i<=n; i++){
            c += String(i*i1) + '\t';
        }
        c+='\n'
        l+=(c)
    }
    return l
}

// EXERCÍCIO 4
function junta(nomes_homem, nomes_mulher, sobrenomes) {
    Lr = [];

    for (sobre of sobrenomes){
        for(nome of nomes_homem){
            Lr.push(nome+' '+sobre);
        }
        for(nome of nomes_mulher){
            Lr.push(nome+' '+sobre);
        }
    }

    return Lr
}

// EXERCÍCIO 5
function conta(s) {
    D = {}

    for (i=0; i<s.length; i++) {

        c = s.charAt(i)

        if (c in D){
            D[c] += 1
        } else{
            D[c] = 1
        }
    }
    return D
}

// DESAFIO
function imprime_arvore(n) {
    
    c = ''
    for (i=1; i<=n; i++){

        if (i == 1){
            for(i2=2; i2<=n; i2++) {
                c += ' '
            }
            c += '|'
            for(i2=2; i2<=n; i2++) {
                c += ' '
            }
            c += '\n'

        }else if(i > 1){
            for(i2=1; i2<=n-i; i2++) {
                c += ' '
            }
            for(i2=2; i2<=i; i2++) {
                c += '/'
            }
            c += '|'
            for(i2=2; i2<=i; i2++) {
                c += String('/')
            }
            for(i2=1; i2<=n-i; i2++) {
                c += ' '
            }
            c += '\n'
            
        }
        
    }
    return c
}
