function roundToOne(num) {    
    return +(Math.round(num + "e+1")  + "e-1");
}
let prova1 = 7.5;
let prova2 = 6.8;
let tr = 2.5;
let faltas = 20; 

let media = ((prova1 * 0.4) + (prova2 * 0.6)) * 0.7 + tr;

if (media >= 6 && faltas < 24) {
    console.log("Situação: Aprovado");
} else if (media >= 3 && media < 6 && faltas < 24) {
    console.log("Situação: Exame");
} else if (faltas >= 24) {
    console.log("Situação: Reprovado por faltas");
} else {
    console.log("Situação: Reprovado");
}

console.log("Média: " + roundToOne(media));
