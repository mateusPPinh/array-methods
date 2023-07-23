/**
 * Concat: Podemos pensar no literal, vamos usar ele para concatenar arrays,
 * veja o exemplo:
 */

const a = [1, 2, 3]
const b = [4, 5, 6]

const c = a.concat(b)
console.log(c)

/**
 * Como resultado do concat, vamos ter: [10, 105, 18, 24, 5, 74, 84]
 * unificamos o array a com o array b.
 */

const list1 = [
  {
    name: 'mateus',
    age: 27,
  },
]

const list2 = [
  {
    name: 'julia',
    age: 22,
  },
]

const concatArray = list1.concat(list2)
console.log(concatArray)

/**
 * nestre outro exemplo, nós usamos o concat para unificar dois arrays diferentes, uma vez concatenado, podemos
 * realizar as operações que forem necessárias, por exemplo, dar um push no array e assim por dainte
 */