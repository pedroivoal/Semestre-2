// EXEMPLO
    
function hello() {
    console.log('Hello World!');
}


// EXERCÍCIO 1
// Essa função não precisa de return,
// pois o propósito dela é só imprimir.

function imprime_faixa(idade) {
    if (idade<18){
        console.log('jovem');
    } else if(idade<60){
        console.log('adulto');
    } else{
        console.log('idoso');
    }
}


// EXERCÍCIO 2
// Essa função não precisa de return,
// pois o propósito dela é só imprimir.

function imprime_tipo(n) {
    if (n%3==0 && n%5!=0){
        console.log('A');
    } else if (n%3!=0 && n%5==0){
        console.log('B');
    } else if (n%3==0 && n%5==0){
        console.log('C');
    } else {
        console.log('D');
    }
}

// EXERCÍCIO 3
// Essa função não precisa de return,
// pois o propósito dela é só imprimir.

function imprime_tabuada(n) {

    for (i1=1; i1<=n; i1++){

        let c = '';
        for(i=1; i<=n; i++){
            c += String(i*i1) + ' ';
        }
        console.log(c);
    }
}


// EXERCÍCIO 4
// Essa função não precisa de return,
// pois o propósito dela é só imprimir.

function imprime_grade(n) {
        c1 = '+'
        for (i=0; i<n; i++){
            c1 += '-+';
        }

        c2 = '|'
        for (i=0; i<n; i++){
            c2 += ' |';
        }

        for (i=0; i<n; i++){
            console.log(c1);
            console.log(c2);
        }
        console.log(c1);
}


// EXERCÍCIO 5
// Essa função deve usar return.
// junta(['Joao', 'Jose'], ['Maria', 'Mariana'], ['Silva', 'Souza'])

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


// EXERCÍCIO 6
// Essa função deve usar return.

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