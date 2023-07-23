/**
 * FILL: O método fill() preenche todos os valores do array a 
 * partir do índice inicial a um índice final com um valor estático.
 */

const numbers = [1, 2, 3, 4, 5]
/**
 * se salvarmos isso vamos ter o seguinte resultado: [ 0, 0, 0, 0, 0 ]
 * pois como sabemos que o fill preenche todos os valores do array 
 * a partir do índice inicial e um final com um valor estático. Claro,
 * isso não é a única forma, podemos mudar pela posição no vetor, vejamos
 * outro exemplo
 */

numbers.fill(0, 1, 4)
console.log(numbers)