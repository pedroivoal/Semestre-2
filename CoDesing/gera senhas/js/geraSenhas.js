addEventListener('DOMContentLoaded', function(event){

    submit = document.querySelector(' div input[type="submit"]')
    submit.addEventListener('click', function(event){

        check = 0
        simbols = ['!"#$%&()*+,-./:;<=>?@[\]^_`{|}~']
        numbers = ['0123456789']
        smallLetters = ['abcdefghijklmnopqrstuvwxyz']
        capitalLetters = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
        list = []
        event.preventDefault()

        awnsers = document.querySelectorAll('fieldset')
        for (awnser of awnsers){

            radio = awnser.querySelector('p input[type="radio"]').checked
            if (radio){console.log(radio)
                list.push(awnser.querySelector('.list').innerHTML)
                check++
                }

        }
        
        password = document.querySelector('footer h3')
        n = parseInt(document.querySelector('div #size').value)
        if(check==0){
            window.alert('Você deve marcar sim em pelo menos uma opção.')
        }else if(parseInt(n)!=n){
            window.alert('Digite um número inteiro')
        }
        password.innerHTML = randomPassword(list, n)

    })

})

function randomPassword(list, size){

    min = 1
    max = 4
    l = ''
    p = []
    for (i=0; i<list.length; i++){
        p.push(Math.floor(Math.random() * parseInt(max - min + 1) + min))
    }
    p[1] = Math.floor(Math.random() * parseInt(max+2 - min+3 + 1) + min+3)
    p[0] = Math.floor(Math.random() * parseInt(max+1 - min-2 + 1) + min+2)

    for(i=0; i<list.length; i++){
        for(i2=0; i2<p[i]; i2++)
        l += list[i]
    }

    password = ''

    for (i=0; i<size; i++){
        n = Math.floor(Math.random() * l.length)
        password += l.substring(n, n + 1)
    }
    return password
}