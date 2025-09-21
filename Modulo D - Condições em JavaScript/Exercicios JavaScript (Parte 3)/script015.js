function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var user_ano = document.getElementById('txtano')
    var resultado = document.getElementById('resultado')

    if(user_ano.value.length == 0 || Number(user_ano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }

    else{
        var user_sexo = document.getElementsByName('radsex')
        var idade = ano - Number(user_ano.value)
        var genero = ''
        
        if(user_sexo[0].checked){
            genero = 'homem'
            resultado.innerHTML = `Você é um ${genero} de ${idade} anos.`
        }
        else if (user_sexo[1].checked){
            genero = 'mulher'
            resultado.innerHTML = `Você é uma ${genero} de ${idade} anos.`
        }
    }

}