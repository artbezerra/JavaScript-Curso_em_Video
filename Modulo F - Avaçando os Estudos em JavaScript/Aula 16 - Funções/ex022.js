function calcularSoma(num1, num2) {
    return num1 + num2;
}
console.log(calcularSoma(5, 10));

let resultado = calcularSoma(20, 30);
console.log(resultado);

function fatorial(n){
    if(n == 1)
        return 1;
    else
        return n * fatorial(n - 1);
}

let resultado_fatorial = fatorial(5);
console.log(resultado_fatorial);