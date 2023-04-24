function contar() {
   let ini = document.getElementById('txtinicio')
   let fim = document.getElementById('txtfim') 
   let passo = document.getElementById('txtpasso')
   let res = document.getElementById('res')

   if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Preenche direito, animal!!')
    
    } else {
        res.innerHTML = 'Contando: </br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if( p <= 0 ){
            window.alert('Passo Invalido! Considerando Passo 1')
            p = 1
        }
        if(i < f){
            for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} 🤙🏾`
        }
            res.innerHTML += `😈`

        } else {
            for(let  c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} 🐒`
            }
        }
                res.innerHTML +=  
                `😈`
    }
}




