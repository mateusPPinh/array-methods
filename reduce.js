/**
 * Reduce: Quando precisamos iterar sobre um array – podemos usar forEach, for ou for..of.
   Quando precisamos iterar e retornar os dados para cada elemento – podemos usar map.
   Os métodos arr.reduce e arr.reduceRight também pertencem a esse gênero, mas são um pouco mais complicados. Eles são usados para calcular um único valor com base na matriz.
 */


const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce(sum, initValue = 0);

function sum(accumulator, value) {
  return accumulator + value;
}

console.log(total)

/**
 * Entendendo os argumentos do reduce:
 * Accumulator: Ele fica monitorando o valor que será retornado no final, ele será iniciado pelo initValue
 * que adicionamos dentro do reduce, no caso, 0.
 * 
 * Bom, como o initValue do nosso reduce é 0, ele vai somar o valor inicial do accumulator + os values,
 * os values são o nosso array = 1, 2, 3, 4, 5
 * ou seja:
 * 
 * 1. 1 + 2 é 3
 * 2. O resultado 3 + 3 é 6
 * 3. O resultado de 6 + 4 é 10
 * 4. O resultado de 10 + 5 é 15
 * 
 * O que vai ser exatamente o retorno que vamos ter do accumulator + value
 * 
 * A ideia macro do reduce é: nós temos um array de elementos, onde cada número, strings, objects arrays, enfim,
 * nós podemos comprimir eles dentro de um único retorno de valor, esse valor pode ser um número, uma string,
 * um array ou um objeto.
 */

/**
 * outro exemplo: temos um array de store, com preço e total de produtos, digamos que vamos querer somar
 * o valor total desses produtos, como podemos fazer isso? 
 */


 const storeReturn = [
  {
    name: 'laptop',
    price: 1000,
    count: 5,
  },
  {
    name: 'desktop',
    price: 1500,
    count: 2,
  },
  {
    name: 'mobile',
    price: 500,
    count: 10,
  }
]

const sumStoreTotalPrice = storeReturn.reduce((acc, item) => acc + (item.price * item.count), 0)
console.log(sumStoreTotalPrice)

/**
  * Aqui fica claro que quando precisamos somar o valor total como nesse caso, podemos usar o reduce para
  * comprimir eles (os valores) dentro de um único retorno
*/
