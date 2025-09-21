function carregar() {
    var hora = document.getElementById('hora')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horaAtual = data.getHours()

    hora.innerHTML = `Agora são ${horaAtual} horas.`

    if (horaAtual >= 0 && horaAtual < 12) {
        img.src = "morning.png"
        document.body.style.background = '#f7c75b'
    }
    else if (horaAtual >= 12 && horaAtual <= 18) {
        img.src = 'afternoon.png'
        document.body.style.background = '#615d3d'
    }
    else {
     img.src = "nighttime.png"
        document.body.style.background = '#0e2443'
    }
}