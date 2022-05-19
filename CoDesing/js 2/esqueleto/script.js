// EXEMPLO

document.addEventListener('DOMContentLoaded', function(){

    function hello() {
        h1 = document.querySelector('h1')
        h1.innerHTML = 'Hello World!'
    }
    
    
    // EXERCÍCIO 1
    idade = document.querySelector('.idade')
    function mostra_faixa(idade) {
        if (idade<18){
            r = 'jovem';
        } else if(idade<60){
            r = 'adulto';
        } else{
            r = 'idoso';
        }
        faixa = document.querySelector('.faixa')
        faixa = innerHTML(r)
    }
    
    
    
    // EXERCÍCIO 2
    
    function mostra_tipo(n) {
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
    
    // function imprime_arvore(n) {
    // }
    
})