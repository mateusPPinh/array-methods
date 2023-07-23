/**
 * O método sort() ordena os elementos do próprio array e retorna o array. A ordenação não é necessariamente estável. A ordenação padrão é de acordo com a pontuação de código unicode.
  A complexidade do tempo de execução ou a quantidade de memória utilizada pela ordenação não pode ser garantido e depende da implementação realizada.

  Sintaxe
  arr.sort([funcaoDeComparacao])
 */

const names = ['Mateus', 'Luis', 'Antônia'];

const sortArr = names.sort()
console.log(sortArr)

/**
 * Se salvarmos do jeito que está ele vai fazer um sort, nos retornando
 * [ 'Antônia', 'Luis', 'Mateus' ]
 * ou seja, colocou em ordem alfabética nosso array de names
 */

/**
 * Mas digamos que temos um array de numbers, tipo:
 * const numbers = [74, 18, 10, 5, 84, 24, 105]... Será que o sort vai começar pelo 5, pois ele é o menor,
 * não exatamente, vejamos:
 * 
 * [ 10, 105, 18, 24, 5,  74, 84] esse foi o retorno, mas porque?
 * Como nosso array de números foi convertido para strins, ele vai nos retornar algo como:
 * '10', '105, '5' mas porque? Pois ele vai verificar o utf-16 code unit values, isso não nos ajuda, pois
 * queremos fazer o sort pela ordem descrescente, ou seja, 5... e assim por diante. Temos uma forma de resolver
 * isso, que é criando uma função de Comparação, acompanhemos o exemplo a baixo.
 * 
 * Vamos criar uma função chamada compareFunction que vai receber dois argumentos, sendo a e b, esses argumentos
 * significam os elementos que vamos querer comparar, a saída dessa função vai decidir qual elemento vai 
 * vir primeiro, queremos que seja o 5.
 */

const numbers = [74, 18, 10, 5, 84, 24, 105]
numbers.sort(compareFunction)
console.log(numbers)

function compareFunction (a, b) {
  /** temos tres cenários aqui
   * 1.se o retorno da função for menor que zero < 0 ... o a vem antes
   * 2. se o retorno for 0 ... nada acontece
   * 3. se tivermos um número maior que zero, > 0, b vem primeiro
   */

  return a - b;
}
