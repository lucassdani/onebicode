const resultado = prompt('escolha uma alternativa:\na)\nb),\nc)')

const resultadoNumerico = parseFloat(resultado)

switch (resultadoNumerico) {
    case 1:
        alert('resultado é "a"')
        break
    case 2:
        alert('resultado é "b"')
        break
    case 3: 
        alert('o resultado é "c')
        break
    default:
        alert('finalizano..')
}