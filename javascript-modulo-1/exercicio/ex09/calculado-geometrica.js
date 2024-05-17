function calacularAreaTringulo() {
    const base = prompt('informe a base do triângulo: ')
    const altura = prompt('informe a altura do triângulo: ')
    return base * altura / 2
}

function calacularArearetangulo() {
    const base = prompt('informe a base do retangulo: ')
    const altura = prompt('informe a altura do retangulo: ')
    return base * altura 
}

function calacularAreaquadrado() {
    const lado = prompt('informe o lado do quadrado: ')
    return lado * lado
}

function calacularAreatrapezio() {
    const basemaior = Number(prompt('informe a base maior do trapézio: '))
    const basemenor = Number(prompt('informe a base menor do trapézio: '))
    const altura = prompt('informe a altura do trapézio: ')
    return (basemaior + basemenor) * altura
}

function calacularAreacirculo() {
    const raio = prompt('informe o raio do círculo')
    return (3.14 * raio * raio)
}

function exibirMenu() {
    return prompt(
        "Calculadora Geométrica\n" +
        "1. Calcular área de triângulo\n" +
        "2. Calcular área de retângulo\n" +
        "3. Calcular área de quadrado\n" +
        "4. Calcular área de trapézio\n" +
        "5. Calcular área de círculo\n" +
        "6. Sair\n"
    )
}

function executar() {
    let opcao = ''

    do {
        opcao = exibirMenu()
        let resultado

        switch (opcao) {
            case '1':
                resultado = calacularAreaTringulo()
                break
            case '2':
                resultado = calacularArearetangulo()
                break
            case '3':
                resultado = calacularAreaquadrado()
                break
            case '4':
                resultado = calacularAreatrapezio()
                break
            case '5':
                resultado = calacularAreacirculo()
                break
            case '6':
                alert('encerrando...')
                break
            default:
                alert('opção inválida')
        }

        if (resultado) {
            alert(`resultado: ${resultado}`)
        }
    } while (opcao !== '6')
}

executar()