function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.toLocaleTimeString()
    tempo = setInterval(carregar,) 
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if(hora >= 0 && hora < 12){

        // BOM DIA 
        img.src = 'fotomanha.png.jpg'
        document.body.style.background = '#63839c' 

    } else if (hora >= 12 && hora <= 18){

        // BOA TARDE
        img.src = 'fototarde.png.jpg'
        document.body.style.background = '#cd5808'
    } else {

        // BOA NOITE
        img.src = 'fotonoite.png.jpg'
        document.body.style.background = '#003772'

    }
}

