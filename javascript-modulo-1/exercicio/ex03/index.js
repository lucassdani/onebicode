let medida = parseFloat(prompt('fale uma valor em metro:'))

const unidadeDeMedida = parseFloat(prompt(
    'escolha uma unidade de medida\n' +
    '1)mm\n' +
    '2)cm\n' +
    '3)dm\n' +
    '4)dam\n' +
    '5)hm\n' +
    '6)km' 
    ))

switch (unidadeDeMedida) {
    case 1:
        medida *= 1000
        alert('resultado é ' + medida + 'mm')
        break
    case 2:
        medida *= 100
        alert('resultado é ' + medida + 'cm')
        break
    case 3:
        medida *= 10
        alert('resultado é ' + medida + 'dm')
        break
    case 4:
        medida /= 10
        alert('resultado é ' + medida + 'dam')
        break
    case 5:
        medida /= 100
        alert('resultado é ' + medida + 'hm')
        break
    case 6:
        medida /= 1000
        alert('resultado é ' + medida + 'km')
        break
    default:
        alert('opção inválida')
}