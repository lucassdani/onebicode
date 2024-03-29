let fila = [];
let opcao = "";

do {
  let pacientes = "";
  for (let i = 0; i < fila.length; i++) {
    pacientes += `${i + 1}° - ${fila[i]} \n`;
  }

  opcao = prompt(
    `pacientes:\n ${pacientes}
     \nescolha uma ação:\n1. novo paciente\n2. consultar\n3. sair`
  );

  switch (opcao) {
    case "1":
        const novoPaciente = prompt("qual o nome do paciente?");
        fila.push(novoPaciente);
        break
    case '2':
        const pacienteConsultado = fila.shift()
        if (pacienteConsultado) {
            alert(`${pacienteConsultado} foi removido da fila.`)
        }else {
            alert('não há pacientes na fila!')
        }
        break
    case '3':
        alert('encerrando...')
        break
    default:
        alert('opção inválida!')
  }
} while (opcao !== "3");
