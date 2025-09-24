var vetor = [7, 8, 5, 3, 2, 9]
console.log(`O vetor contém os seguintes elementos: ${vetor}`)

for(var i = 0; i < vetor.length; i++){
    console.log(`A posição ${i} tem o valor ${vetor[i]}`)
}

for(var j in vetor){
    console.log(`A posição ${j} tem o valor ${vetor[j]}`)
}