/**
 * SPLICE: O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
 */

const months = ['Janeiro', 'Fevereiro', 'Março', 'Julho', 'Junho']
months.splice(4, 1, 'Dezembro')
console.log(months)

/**
 * Ou seja, temos um array de months: 'Janeiro', 'Fevereiro', 'Março', 'Julho', 'Junho'
 * no splice nos adicionamos na posição 4 o Dezembro: tendo o seguinte retorno:
 * [ 'Janeiro', 'Fevereiro', 'Março', 'Julho', 'Dezembro' ] = Se olharmos o array original vamos notar que o
 * junho saiu dele, porque? Pois substituímos o a posição onde estava o Junho para o Dezembro entrar.
 * Simples assim
 * 
 */