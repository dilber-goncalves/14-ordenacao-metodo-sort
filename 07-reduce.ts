//reduce -> recebe um acumulador e um valor. Possui 4 paramentros: 
//1 - acumulador (valor inicial ou do retorno anterior)
//2 - valor atual (valor do elemento atual)
//3 - indice atual
//4 - array completo

const numeros = [ 500, 45, 1, 6, 20, 4, 874, 2, 9, 0 ];

const total = numeros.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
});

console.log(total);

