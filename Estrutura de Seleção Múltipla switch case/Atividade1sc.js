//Atividade 1
var altura = 1.75; 
var sexo = 'masculino'; 

function calcularPesoIdeal(altura, sexo) {
    var pesoIdeal;
    switch (sexo) {
        case 'masculino':
            pesoIdeal = 72.7 * altura - 58;
            break;
        case 'feminino':
            pesoIdeal = 62.1 * altura - 44.7;
            break;
        default:
            return 'Sexo inválido. Por favor, insira "masculino" ou "feminino".';
    }
    return pesoIdeal;
}
var pesoIdeal = calcularPesoIdeal(altura, sexo);

console.log('O peso ideal para uma pessoa com altura de ' + altura + ' metros e sexo ' + sexo + ' é ' + pesoIdeal + ' quilogramas.');
