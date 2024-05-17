let pessoa = {
    nome: 'lucas',
    idade: 17,
    dizerola() {
        console.log(`olá, mundo! meu nome é ${this.nome}`)
    }
}

console.log(pessoa)

pessoa.dizerola()