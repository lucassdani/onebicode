let nome = prompt('digite seu nome:')
let sobrenome = prompt('digite seu sobrenome:')
let campoDeEstudo = prompt('digite seu campo de estudo:')
let AnoDeNascimento = parseFloat(prompt('digite o seu ano de nascimento:'))

alert(
    nome + ' ' + sobrenome +
    '\n' + campoDeEstudo +
    '\n' + (2023 - AnoDeNascimento) )