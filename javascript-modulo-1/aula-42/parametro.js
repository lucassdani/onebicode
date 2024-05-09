// function dobro(x) {
//     alert(`O dobro de ${x} é ${x * 2}`)
// }

// dobro(5)
// dobro(7)

function dizerOla(nome = 'mundo') {
    alert(`olá, ${nome}!`)
}

// dizerOla('lucas')
// dizerOla() 

function soma(a, b) {
    alert(`o resultado da soma é ${a + b}`)
}

// soma(7, 6,)

function criarUsuario(nome, email, senha, tipo = 'admin') {
    const usuario = {
        nome, // mesmo que nome: nome
        email, // mesmo que email: email
        senha, // mesmo que senha: senha
        tipo // mesmo que tipo: tipo
    }
    
    console.log(usuario)
}

function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
    // ...
}

function objetoComParametros(usuario) {
    // ...
    usuario.nome
    usuario.email
}

muitosParametros('nome','telefone', 'endereco', 'aniversario', 'email', 'senha')

const dadosDoUsuario = {
    nome: '',
    telefone: '',
    email: '',
    senha: '',
    endereco: '',
    aniversario: '',


}
objetoComParametros(dadosDoUsuario)