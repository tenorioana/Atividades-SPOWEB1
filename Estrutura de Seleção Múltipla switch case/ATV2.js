//Atividade2

console.log("============= \n" +
            "a = saldo \n" +
            "b = depósito \n" +
            "c = pagamentos \n" +
            "d = transferências \n" +
            "e = sair \n" +
            "=============");

var opcao = prompt("Por favor, insira um caractere para testar a estrutura de seleção: ");

switch(opcao) {
    case 'a':
        console.log("Operação: saldo");
        break;
    case 'b':
        console.log("Operação: depósito");
        break;
    case 'c':
        console.log("Operação: pagamentos");
        break;
    case 'd':
        console.log("Operação: transferências");
        break;
    case 'e':
        console.log("Encerrando operações.");
        break;
    default:
        console.log("Opção inválida!");
}
