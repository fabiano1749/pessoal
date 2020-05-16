let notas: number[] = [2, 8, 6, 3];

function soma(notas: number[]){
    let total: number = 0;
    for(a of notas){
        total += a;
    }
    return total;
}

function somaComReduce(array: number[]){
    return array.reduce((a, b) => a+b, 0);
}

function produtoComReduce(array: number[]){
    return array.reduce((a, b) => a*b, 1);
}

console.log(produtoComReduce(notas));