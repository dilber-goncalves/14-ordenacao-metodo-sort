const usuarios = [
    {nome: 'Diego', idade: 23},
    {nome: 'Gabriel', idade: 15},
    {nome: 'Lucas', idade: 32},
    {nome: 'Pedro', idade: 18},
    {nome: 'Maria', idade: 28}
];

//ordenação crescente
usuarios.sort(function (elemento1, elemento2) {
    if (elemento1.idade <= elemento2.idade) {
        return -1;}
    if (elemento1.idade >= elemento2.idade) {
        return 1;
    }
    return 0;
});

console.log(usuarios);
