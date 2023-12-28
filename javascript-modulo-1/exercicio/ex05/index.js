let opcao = '5'

do {
  opcao = prompt('seja bem vindo\n' +
  '\nescolha uma das opções abaixo: ' +
  '\n1) opção 1' +
  '\n2) opção 2' +
  '\n3) opção 3' +
  '\n4) opção 4' +
  '\n5) encerrar'
  )

  switch (opcao) {
    case '1':
      alert('você escolheu a opcão 1')
      break
    case '2':
    alert('você escolheu a opcão 2')
    break
    case '3':
    alert('você escolheu a opcão 3')
    break
    case '4':
    alert('você escolheu a opcão 4')
    break
    case '5':
    alert('você escolheu encerrar')
    alert('encerrando...')
    break
    default:
      alert('opção invalida')
  }
} while (opcao !== '5')