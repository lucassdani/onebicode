function dobro(x) {
    alert(`o dobro  de ${x} é ${x * 2}`)
}

// dobro(5)

function dizerOla(nome) {
    alert(`ola ${nome}!`)
}

//dizerOla('lucas')

function soma(a, b) {
    alert(`o resultado da soma é ${a + b}`)
}

//soma(7, 6)

function criarUsuario(nome, email, senha, tipo = 'gamer') {
    const usuario = {
        nome, // mesmo q nome: nome
        email, 
        senha,
        tipo 
    }
    
    console.log(usuario)
}

function novoUsuario(nome, tipo = 'gamer', email, senha,){
    const usuario = {
        nome, // mesmo q nome: nome
        email, 
        senha,
        tipo 
    }
    
    console.log(usuario)
} 

//criarUsuario('lucas', 'lucasgmail.com', 'lucas123')
//novoUsuario('lucas', 'lucasgmail.com', 'lucas123')

function muitoParametros(nome, telefone, endereço, aniversario, email, senha) {
    // ...
}

function objetoComoParametro(usuario) {
    usuario.nome
    usuario.email
}

muitoParametros('nome', 'telefone', 'endereço', 'aniversario', 'email', 'senha')

const dadosDoUsuario = {
    nome: '',
    telefone: '',
    email: '',
    senha: '',
    endereço: '',
    aniversario: '',
}

objetoComoParametro(dadosDoUsuario)