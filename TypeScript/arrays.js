let notas = [2, 8, 6, 3];
function soma(notas) {
    let total = 0;
    for (a of notas) {
        total += a;
    }
    return total;
}
function somaComReduce(array) {
    return array.reduce((a, b) => a + b, 0);
}
function produtoComReduce(array) {
    return array.reduce((a, b) => a * b, 1);
}
console.log(produtoComReduce(notas));
