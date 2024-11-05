const usuarios = ['João', 'Pedro', 'ana', 'douglas', 'Maria', 'Jorge'];

//ordenação alfabetica
usuarios.sort();
console.log(usuarios);

//localecompare -> comparação de strings

//crescente
usuarios.sort((item1, item2) => {
    return item1.localeCompare(item2);
});
console.log(usuarios);

//decrescente
usuarios.sort((item1, item2) => {
    return item2.localeCompare(item1);
}); 
console.log(usuarios);
