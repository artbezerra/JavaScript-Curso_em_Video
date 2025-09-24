function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if (inicio.value == 0 || fim.value == 0 || passo.value == 0) {
        alert('[ERRO] Faltam dados!')
    }
    else {
        res.innerHTML = 'Contando: <br>'

        if (p > 0) {
            for(var cont = i; cont <= f; cont += p) {
                res.innerHTML += ` ${cont} \u{1F449}`
                if (cont == f) {
                    res.innerHTML += `\u{1F3C1}`
                }
            }
        }
        else if (p < 0) {
            for(var cont = i; cont >= f; cont -= Math.abs(p)) {
                res.innerHTML += ` ${cont} \u{1F449}`
                if (cont == f) {
                    res.innerHTML += `\u{1F3C1}`
                }
            }
        }
    }
}