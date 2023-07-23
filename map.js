// map executa uma função em que todo elemento do array retorna uma novo array

// const numbers = [1, 2, 3, 4, 5]

// const newArr = numbers.map((item, index, arr) => {
//   console.log(item * 2)
// })

/**
 * Neste caso pegamos o nosso array de numbers e multiplcamos os valores
 * do nosso vetor por 2, tendo o seguinte retorno:
 * 
 *  2
    4
    6
    8
    10
 */

  const numbers = [
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

  const sumPrice = numbers.map((item) => {
    console.log(item.price * item.count)
  })

  /**
   * neste exemplo nós temos um array de numbers com produtos:
   * temos o preço e o count
   * no nosso map nós buscamos pelos itens e fazemos o seguinte calcúlo: item.price * item.count
   * nisso obtivemos o retorno de um novo array nos trazendo o valor desse calcúlo, pois se o laptop custa 1000
   * e tem 5 unidades, nos retornará 5000 de preço total e assim por diante.
   */

  