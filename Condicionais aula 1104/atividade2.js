let A = parseFloat(prompt("Insira o valor de A:"));
let B = parseFloat(prompt("Insira o valor de B:"));
let C = parseFloat(prompt("Insira o valor de C:"));

let temp;
if (A > B) {
    temp = A;
    A = B;
    B = temp;
}

if (B > C) {
    temp = B;
    B = C;
    C = temp;
}

if (A > B) {
    temp = A;
    A = B;
    B = temp;
}
console.log("Valores em ordem crescente:", A, B, C);
