/**
 * indexOf: O método indexOf() retorna o primeiro índice em que o 
 * elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
 */

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('horse')) // -1 pois não existe horse no array de beasts
console.log(beasts.indexOf('ant')) // 0 pois existe ant dentro do nosso array de animais