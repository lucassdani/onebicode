function calcularAreaTringulo () {
    const base = prompt ('informe a base do triângulo: ')
    const altura = prompt ('informe a altura do triângulo: ')
    return base * altura / 2
}

function calacularArearetangulo () {
    const base = prompt ('informe a base do retangulo: ')
    const altura = prompt ('informe a altura do retangulo: ')
    return base * altura 
}

function calcularAreaQuadrado () {
    const lado = prompt ('informe o lado do quadrado:')
    return lado * lado
}

function calcularAreaTrapezio () {
    const basermaior = parseFloat(prompt ('informe a base maior do trapézio: '))
    const basemenor = parseFloat(prompt ('informe a base menor do trapézio: '))
    const altura = prompt ('informe a altura do trapézio: ')
    return (basemaior + basemenor) * altura / 2

}

function calcularAreaCirculo () {
    const raio = prompt ('informe o raio do círculo: ')
    return 3.14 * raio * raio
}

function exibirMenu() {
    return prompt(
        'Escolha uma opção:\n' +
        '1 - Calcular área do triângulo\n' +
        '2 - Calcular área do retângulo\n' +
        '3 - Calcular área do quadrado\n' +
        '4 - Calcular área do trapézio\n' +
        '5 - Calcular área do círculo\n' +
        '6 - Sair'
    );
}

function executar() {
    let opcao = ''

    do {
        opcao = exibirMenu()
        let resultado

        switch (opcao) {
            case '1':
                resultado = calcularAreaTringulo()
                break
            case '2':
                resultado = calacularArearetangulo()
                break
            case '3':
                resultado = calcularAreaQuadrado()
                break
            case '4':
                resultado = calcularAreaTrapezio()
                break
            case '5':
                resultado = calcularAreaCirculo()
                break
            case '6':
                alert('Saindo da calculadora.');
            default:
                alert('opção inválida.')
        }

        if (resultado) {
            alert(`resultado: ${resultado}`)
        }
    } while (opcao !== '6');
}

executar();