var hora = newDate().getHours()
if (hora < 12) {
    alert('Bom dia!')
}
else if (hora <= 18) {
    alert('Boa tarde!')
}
else {
    alert('Boa noite!')
}