var array = [1,2,3,4,5]

//O reduce recebe uma function e um acumulador. A function será executada n vezes podendo alterar em cada 
//iteração o valor do acumulador    
let soma = array.reduce((acumulador, n) => acumulador+n, 0);
