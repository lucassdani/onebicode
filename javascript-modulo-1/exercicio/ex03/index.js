const numero = parseFloat(prompt('digite um valor em (m):'))
const unidadeDeMedida = parseFloat(prompt('qual a unidade de medida você gostaria de converter?\n1)mm\n2)cm\n3)dm\n4)dam\n5)hm\n6)km'))

const mm = numero * 1000
const cm = numero * 100
const dm = numero * 10
const dam = numero / 10
const hm = numero / 100
const km = numero / 1000

switch (unidadeDeMedida) {
    case 1: 
        alert('valor convertido em (mm): ' + mm)
        break
    case 2:
        alert('valor convertido em (cm): ' + cm)
        break
    case 3:
        alert('valor convertido em (dm): ' + dm)
        break
    case 4:
        alert('valor convertido em (dam): ' + dam)
        break
    case 5:
        alert('valor convertido em (hm): ' + hm)
        break
    case 6:
        alert('valor convertido em (km): ' + km)
        break
    default:
        alert('opção inválida')
}