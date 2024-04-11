function roundToTwo(num) {    
    return +(Math.round(num + "x+2")  + "x-2");
}

let salario = 600; 

let reajuste;
if (salario < 500) {
    reajuste = 0.15;
} else if (salario <= 1000) {
    reajuste = 0.10;
} else {
    reajuste = 0.05;
}
let salario_reajustado = salario * (1 + reajuste);

console.log("Salário antigo: R$ " + roundToTwo(salario));
console.log("Salário reajustado: R$ " + roundToTwo(salario_reajustado));
