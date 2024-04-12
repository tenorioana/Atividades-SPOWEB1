//Atividade3

var opcao = prompt("Escolha uma opção:\n(s) Solteiro\n(c) Casado\n(d) Divorciado");

switch(opcao) {
    case 's':
        console.log("Solteiro");
        break;
    case 'c':
        console.log("Casado");
        break;
    case 'd':
        console.log("Divorciado");
        break;
    default:
        console.log("Outros");
}
