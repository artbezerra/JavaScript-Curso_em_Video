// For simples

for(var contador = 0; contador <  5; contador++){
    console.log(`contador: ${contador}`)
}

// Testando matrizes

for(var x = 0; x < 3; x++){
    for(var y = 0; y < 3; y++){
        console.log(`x: ${x}, y: ${y}`)
            while(x == 1 && y == 2){
                console.log('Acessou a posição 6 da matriz 3x3 criada')
                break
            }
    }
}