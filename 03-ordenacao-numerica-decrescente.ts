//ordenacao decrescente -> se o primeiro item for menor que o segundo item, ele vai retornar -1
const numeros = [ 500, 45, 1, 6, 20, 4, 874, 2, 9, 0 ];
numeros.sort(function (intem1, item2) {
    if (intem1 < item2) {
        return 1;
    } else if (intem1 > item2) {
        return -1;
    } else {
        return 0;
    }
});

console.log(numeros);
