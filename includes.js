/**
 * O método includes() determina se um array contém um determinado elemento, 
 * retornando true ou false apropriadamente.
 */

const fruits = ['apple', 'banana', 'mango']

const response = fruits.includes('orange')

if (response) {
  console.log('thats cool')
} else {
  console.log('sad...')
}