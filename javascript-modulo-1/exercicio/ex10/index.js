const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFInal, vaga, indice) {
        // 1. nome, quantidade de candidatos
        textoFInal += indice + '. '
        textoFInal += vaga.nome
        textoFInal += ' (' + vaga.candidatos.length + ' candidatos)\n'
        return textoFInal
    }, '')

    alert(vagasEmTexto)
}

function novaVaga() {
    const nome = prompt('informe um nome para vaga: ')
    const descricao = prompt('informe uma descrição para a vaga: ')
    const dataLimite = prompt('informe uma data limite (dd/mm/aaaa para a vaga: ')

    const confirmacao = confirm(
        `deseja criar uma nova vaga com essas informações?\n
        Nome: ${nome}\n Descrição: ${descricao} \nData limite: ${dataLimite}`
    )

    if (confirmacao) {
        const novaVaga = {nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert('vaga criada')
    }
}

function exibirVaga() {
    const indice = prompt('informe o índice da vaga que deseja exibir: ')
    if (indice >= vagas.length || indice < 0) {
        alert('índice inválido')
        return
    }
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFInal, candidatos){
        return textoFInal + '\n - ' + candidatos
    }, '')

    alert(
        `Vaga n° ${indice}
        \nNome: ${vaga.nome}
        \nDescrição: ${vaga.descricao}
        \nData limite: ${vaga.dataLimite}
        \nQuantidade de candidados: ${vaga.candidatos,length}
        \nCandidados inscritos: ${candidatosEmTexto}`
    )
}

function inscreverCandidato() {
    const candidato = prompt('informe o nome do(a) candidato(a): ')
    const indice = prompt('informe o índice da vaga para qual o(a) candidato(a) deseja de inscrever: ')
    const vaga = vagas[indice]

    const confirmacao = confirm(
        `deseja inscrever o candidato ${candidato} na vaga ${indice}?\n
        Nome: ${vaga.nome}
        \nDescrição: ${vaga.descricao}
        \nData limite: ${vaga.dataLimite}`
    )

    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert(`Inscrição realizada`)
    }
}

function excluirVaga() {
    const indice = prompt('informe o índice da vaga que deseja excluir: ')
    const vaga = vagas[indice]

    const confirmacao = confirm(
        `tem certeza que deseja excluir a vaga ${indice}?\n
        Nome: ${vaga.nome}
        \nDescrição: ${vaga.descricao}
        \nData limite: ${vaga.dataLimite}`

    )

    if (confirmacao) {
        vaga.splice(indice, 1)
        alert('vaga excluida')
    }
}

function exibirMenu() {
    const opcao = prompt(
    `cadastro de vagas de emprego
    \n\nEscolha uma das opções: 
    \n1. Listar vagas disponiveis
    \n2. Criar uma nova vaga
    \n3. vizualizar uma vaga
    \n4. Inscrever um(a) candidato(a)
    \n5. Excluir uma vaga
    \n6. Sair`
)

return opcao
}

function executar() {
    let opcao = ''

    do {
        opcao = exibirMenu()

        switch (opcao) {
            case '1': 
                listarVagas()
                break
            case '2': 
                novaVaga()
                break
            case '3': 
                exibirVaga()
                break
            case '4':
                inscreverCandidato()
                break
            case '5':
                excluirVaga()
                break
            case '6': 
            alert('encerrando...')
            break
            default :
            alert('opção invalida')
        }

    } while (opcao !== '6')
}

executar()