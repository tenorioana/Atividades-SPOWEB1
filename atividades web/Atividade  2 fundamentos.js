const velocidadeMedia = 80; 
const tempoGasto = 5; 

const distanciaPercorrida = velocidadeMedia * tempoGasto;

const litrosUsados = distanciaPercorrida / 12;

console.log(`Velocidade média: ${velocidadeMedia} km/h`);
console.log(`Tempo gasto na viagem: ${tempoGasto} horas`);
console.log(`Distância percorrida: ${distanciaPercorrida} km`);
console.log(`Quantidade de litros utilizada na viagem: ${litrosUsados} litros`);
