let idade = 25;

if (idade < 16) {
    console.log("Não-eleitor"); 
} else if (idade >= 18 && idade <= 65) {
    console.log("Eleitor obrigatório"); 
} else if ((idade >= 16 && idade < 18) || idade > 65) {
    console.log("Eleitor facultativo");
}