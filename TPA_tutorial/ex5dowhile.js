let numero = 1;
let contador = 0;

do {
    if (numero % 2 !== 0) {
        contador++;
    }
    numero++;
} while (numero <= 100);

console.log("Quantidade de números ímpares entre 1 e 100 é:", contador);
