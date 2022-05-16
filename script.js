function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var foto = document.getElementById('imagem')

    frase.innerHTML=`Agora são ${hora} horas`

    if(hora>0 && hora<=12){
        fundo.style.background='rgb(116, 153, 216)'
        foto.src = 'midia/manhã.jpg'
    } else if(hora>12 && hora<18){
        fundo.style.background='rgb(76, 31, 31)'
        foto.src = 'midia/tarde.jpg'
    } else if(hora>=18 && hora<=23){
        fundo.style.background='rgb(29, 29, 41)'
        foto.src = 'midia/noite.jpg'
    }
}