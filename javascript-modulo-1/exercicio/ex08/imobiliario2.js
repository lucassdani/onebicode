const imoveis = []
let opcao = ''
do {
    opcao = prompt(
        `bem vindo(a) ao cadastro de Imóveis!
        \ntotal de imóveis: ${imoveis.length}
        \n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair`
    )

    switch (opcao) {
        case '1':
            const imovel = {}

            imovel.proprietario = prompt('informe o nome do proprietário do imóvel:')
            imovel.quartos = prompt('quantos quartos possui o imóvel?')
            imovel.banheiros = prompt('quantos banheiros possui o imóvel?')
            imovel.garagem = prompt('o imóvel possiu garagem? (s/n)')

            const corfirmacao = confirm(
                `salvar este imóvel?\n` +
                `\nproprietário: ${imovel.proprietario}` +
                `\nquartos: ${imovel.quartos}` +
                `\nbanheiros: ${imovel.banheiros}` +
                `\npossui garagem? ${imovel.garagem}`
            )

            if (corfirmacao) {
                imoveis.push(imovel)
                alert('imóvel salvo com sucesso!')
            } else {
                alert('voltando ao menu.')
            }
            break
        case '2':
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    `imovel ${(i + 1)}\n` +
                    `\nproprietário: ${imoveis[i].proprietario}` +
                    `\nquartos: ${imoveis[i].quartos}` +
                    `\nbanheiros: ${imoveis[i].banheiros}` +
                    `\npossui garagem? ${imoveis[i].garagem}`
                )
            }

            break
        case '3':
            alert('encerrando...')
            break
        default:
            alert('opção inválida.')
    }
} while (opcao !== '3')