let a = 0, b = 1;

console.log("Série de Fibonacci até o valor maior que 500:");

do {
    console.log(a);
    let proximo = a + b;
    a = b;
    b = proximo;
} while (a <= 500);
