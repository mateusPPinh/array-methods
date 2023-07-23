/**
 * O método arr.slice é muito mais simples do que o semelhante arr.splice.
  A sintaxe é:

  arr.slice([início], [fim])
  Ele retorna um novo array copiando para ele todos os itens do início ao fim do índice (não incluindo o fim). Ambos start e end podem ser negativos, nesse caso a posição do array end é assumida.

  É semelhante a um método de string str.slice, mas em vez de substrings, ele cria subarrays.
 */


  /**
   * Digamos que no array 1 a 5, vamos querer retornar apenas do 2 ao 4, segue o exemplo:
   */

const numbers = [1, 2, 3, 4, 5];

const slicedArr = numbers.slice(1, 4)
console.log(slicedArr)

/**
 * Bom, por padrão o slice tem como valor initial no argumento start como 0, o final do array não estará incluso
 * Como falamos que queríamos retornar apenas de 2 ao 4, nós cortamos uma parte do array, pq:
 * 1 , 2 , 3 , 4 , 5
 * 0 , 1 , 2 , 3 , 4 = A contagem dos array inicia pelo 0, então se queremos do 2 ao 4, fizemos o seguinte:
 * numbers,slice(start: 1 = o numero 1 representa o 2 dentro do nosso array, end: 4 = o 4 representa
 * até onde vamos cortar nosso array, ou seja, o 4 representa o 5 na posição do array)
 * 
 * O retorno vai ser: [ 2, 3, 4 ]
 * Anulamos o 1 e 5 do nosso array, retornando 2, 3, 4
 * Simples assim. Vale destacar: ele não altera o array original! no nosso caso, o array numbers.
 */
