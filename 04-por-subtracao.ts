//ordenação por subtração -> o primeiro item vai ser o maior e o segundo o menor

const numeros = [ 500, 45, 1, 6, 20, 4, 874, 2, 9, 0 ];

numeros.sort (function (intem1, item2) {//crescente. Para decrescente é só inverter item1 e item2
    return intem1 - item2;
}); 

console.log(numeros);