let fila = [];
let opcao = "";

do {
  let pacientes = "";
  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + "º " + fila[i] + "\n"; //Está somando i+1 pois para os humanos, uma lista inicia em 1, e não em 0, como para a máquina
  }
  opcao = prompt(
    "Pacientes: \n" +
      pacientes +
      "\nEscolha uma das opções abaixo: \n1. Novo paciente \n2. Consultar paciente \n3. Sair"
  );

  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Digite o nome do paciente");
      fila.push(novoPaciente);
      break;
    case "2":
      const pacienteConsultado = fila.shift();
      if (pacienteConsultado) {
        alert(pacienteConsultado + " foi removido(a) da fila");
      } else {
        alert("Não há pacientes na fila!");
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Insira uma opção válida!");
  }
} while (opcao !== "3");
