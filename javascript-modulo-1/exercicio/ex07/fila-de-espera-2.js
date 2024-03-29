let fila = []
let opcao = ""

do {
  let pacientes = ""
  for (let i = 0; i < fila.length; i++) {
    pacientes += `${i + 1}° - ${fila[i]} \n`
  }

  opcao = prompt(
    `pacientes:\n ${pacientes}
    \nescolha uma ação:\n1. Novo Paciente\n2. Consultar Paciente\n3. Sair`
  )

  switch (opcao) {
    case '1':
        const novoPaciente = prompt('qual o nome do paciente?')
        fila.push(novoPaciente)
        break
    case '2':
        if (pacienteConsultado) {
            const pacienteConsultado = fila.shift()
            alert(`${pacienteConsultado} foi removido da fila.`)
        } else {
            alert('não ha pacientes na fila.')
        }
        break
    case '3':
        alert('encerrando...')
        break
    default:
        alert('opção inválida!')
  }
} while (opcao !== '3')
