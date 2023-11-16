const nome_personagem1 = prompt('nome do personagem 1:')
const poder_personagem1 = parseFloat(prompt('poder de ataque do personagem:'))
const nome_personagem2 = prompt('nome do personagem 2:')
const pontosDeVida = parseFloat(prompt('quantos pontos de vida?:'))
const poderDeDefesa = parseFloat(prompt('quanto de defesa?:'))
const escudo =  prompt('tem escudo? (n/s):')

let dano 

if (poder_personagem1 > poderDeDefesa && escudo === 'n') {
    dano = poder_personagem1 - poderDeDefesa
} else if (poder_personagem1 > poderDeDefesa && escudo === 's') {
    dano = (poder_personagem1 - poderDeDefesa) / 2
}else if (poder_personagem1 <= poderDeDefesa) {
    dano = 0
}

alert(
    nome_personagem1 + ' deu ' + poder_personagem1 + ' de dano\n' +
    nome_personagem2 + " ficou com " + (pontosDeVida - dano) + ' de vida'
)

