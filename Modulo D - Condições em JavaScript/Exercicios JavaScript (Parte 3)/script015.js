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

            if(idade >= 0 && idade <= 13)
                resultado.innerHTML = `Você é um menino com ${idade} anos.`
        
            else if(idade > 13 && idade <= 21)
                resultado.innerHTML = `Você é um jovem com ${idade} anos.`
                    
            else if(idade > 21 && idade <= 50)
                resultado.innerHTML = `Você é um adulto com ${idade} anos.`
            
            else if(idade > 50)
                resultado.innerHTML = `Você é um idoso com ${idade} anos.`
        }
        else if (user_sexo[1].checked){
            genero = 'mulher'

           if(idade >= 0 && idade <= 13)
                resultado.innerHTML = `Você é uma menina com ${idade} anos.`
        
            else if(idade > 13 && idade <= 21)
                resultado.innerHTML = `Você é uma jovem com ${idade} anos.`
                    
            else if(idade > 21 && idade <= 50)
                resultado.innerHTML = `Você é uma adulta com ${idade} anos.`
            
            else if(idade > 50)
                resultado.innerHTML = `Você é uma idosa com ${idade} anos.`
        }
    }
}