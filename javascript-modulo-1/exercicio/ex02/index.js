const carro = prompt('nome do carro 1:')
let velocidade1 = parseFloat(prompt('qual a velocidade do carro?'))
const carro2 = prompt('qual o nome do carro 2')
let velocidade2 = parseFloat(prompt('qual a velocidade do carro?'))

if (velocidade1 > velocidade2) {
    alert(carro + ' é mais rapido')
} else if (velocidade1 < velocidade2) {
    alert(carro2 + ' é mais rápido')
}else if (velocidade1 === velocidade2){
    alert('os dois carros tem a mesma velocidade')
}