const numero = Number(prompt(
    'olá, eu sou o robô da tabuada\n' +
    'informe o número que você deseja calcula a tabuada:'
))

let resultado = ''

for (let fator = 1; fator <= 20; fator++) {
    resultado += ` -> ${numero} * ${fator} = ${numero * fator} \n`
}

alert(`resultado da tabuada de ${numero}: \n\n ${resultado}`)