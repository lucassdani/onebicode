const carro1 = prompt('nome do carro 1:')
const carro1_velocidade= parseFloat(prompt('qual a velocidade?:'))
const carro2 = prompt('nome do carro 2:')
const carro2_velocidade = parseFloat(prompt('qual a velocidade?:'))

if (carro1_velocidade > carro2_velocidade) {
    alert(carro1 + ' é mais rapido')
} else if (carro1_velocidade > carro1_velocidade){
    alert(carro2 + ' é mais rapido')
} else {
    alert(carro1 + ' ' + carro2 + ' tem a mesma velociade')
}