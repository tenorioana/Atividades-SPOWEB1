const A = 9;
const B = 3.7;
const C = 2;
const D = 8.5;

const resultado = {};

resultado['A + B'] = A + B;
resultado['A * B'] = A * B;

resultado['A + C'] = A + C;
resultado['A * C'] = A * C;

resultado['A + D'] = A + D;
resultado['A * D'] = A * D;

resultado['B + C'] = B + C;
resultado['B * C'] = B * C;

resultado['B + D'] = B + D;
resultado['B * D'] = B * D;

resultado['C + D'] = C + D;
resultado['C * D'] = C * D;

for (const operacao in resultado) {
    console.log(`${operacao}: ${resultado[operacao]}`);
}
