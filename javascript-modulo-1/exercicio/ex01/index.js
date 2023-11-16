const primeiro_nome = prompt('informe o primero nome do recruta:')
const sobrenone = prompt('informe o sobrenome do recruta:')
const campo_de_estudo = prompt('qual o campo de estudo do recruta?:')
const ano_de_nascimento = prompt('qual o ano de nascimento do recruta?:')

alert(
    'recruta cadastrado com sucesso\n' +
    '\nnome completo: ' + primeiro_nome + ' ' + sobrenone +
    '\ncampo de estudo: ' + campo_de_estudo +
    '\nidade: ' + (2023 - ano_de_nascimento)
)