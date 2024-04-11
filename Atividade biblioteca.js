//Funções da Biblioteca Math. 
//A biblioteca Math em JavaScript oferece funções matemáticas que são úteis em algumas situações. 
//Funções mais comuns  oferecidas:

console.log(Math.ceil(5.3)); //Math.ceil(x): Retorna o menor inteiro maior ou igual a um número. Exemplo de uso:

console.log(Math.floor(5.9)); //Math.floor(x): Retorna o maior inteiro menor ou igual a um número.

console.log(Math.round(5.4)); // Math.round(x): Retorna o valor de um número arredondado para o inteiro mais próximo.
console.log(Math.round(5.6));

const randomNumber = Math.random() * 10;
console.log(randomNumber); //Math.random(): Retorna um número pseudo-aleatório entre 0 (inclusive) e 1 (exclusivo).

console.log(Math.abs(-5)); //Math.abs(x): Retorna o valor absoluto de um número.

console.log(Math.pow(2, 3)); //Math.pow(x, y): Retorna a base x elevada à potência y.


// Exemplo de uso das funções Math
const num = 11.798;

console.log("Número original:", num);
console.log("Ceil:", Math.ceil(num));
console.log("Floor:", Math.floor(num));
console.log("Round:", Math.round(num));
console.log("Valor absoluto:", Math.abs(num));
console.log("Potência:", Math.pow(2, 3));
console.log("Raiz quadrada:", Math.sqrt(16));







