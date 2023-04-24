var atual = new Date()
var hora = atual.getHours()
// var minutos = atual.getMinutes() //
 
console.log(`Agora são exatamente ${hora}:${minutos} minutos.`)
if( hora < 12){
    console.log('Bom Dia!')
} else if(hora <= 18){
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}