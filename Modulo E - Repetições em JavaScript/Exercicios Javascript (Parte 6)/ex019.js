function calcularTabuada() {
    var userinput_num = document.getElementById('num')
    var tabuada = document.getElementById('tabuada')
    var num = Number(userinput_num.value)

    if (num == 0) {
        alert('Por favor, digite um número!')
    } 
    else {
        tabuada.innerHTML = ''
        for (var i =1; i <= 10; i++){
            var item = document.createElement('option')
            item.text = `${num} x ${i} = ${num*i}`
            item.value = `tab${i}`
            tabuada.appendChild(item)
        }
    }
}