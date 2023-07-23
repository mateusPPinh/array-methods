/**
 * unshift: O método unshift() adiciona um ou mais 
 * elementos no início de um array e retorna o
 * número de elementos (propriedade length) atualizado.
 */

const numbers = [1, 2, 3]

numbers.unshift(0, 3)
console.log(numbers) // [ 0, 1, 2, 3 ]