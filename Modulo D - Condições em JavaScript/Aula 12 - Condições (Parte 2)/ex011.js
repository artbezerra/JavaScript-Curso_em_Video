var hora_atual = newDate().getHours()
if(hora_atual < 12){
    console.log('Bom dia!')
}
else if(hora_atual <= 18){
    console.log('Boa tarde!')
}
else{
    console.log('Boa noite!')
}