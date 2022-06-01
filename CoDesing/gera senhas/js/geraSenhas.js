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
                list += awnser.querySelector('.list').innerHTML
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
        password.innerHTML = randomPassword(list, n, n)

    })

})

function randomPassword(list, minSize, maxSize){

    size = Math.floor(Math.random() * parseInt(maxSize - minSize + 1) + minSize)

    password = ''

    for (i=0; i<size; i++){
        n = Math.floor(Math.random() * list.length)
        password += list.substring(n, n + 1)
    }

    return password
}