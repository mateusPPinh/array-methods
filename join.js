/**
 * O método join() junta todos os elementos de um array 
 * (ou um array-like object) em uma string e retorna esta string.
 */

const countries = ['brazil', 'usa', 'india']

const res = countries.join() // adiciona vírgula sem espaços = brazil,usa,india
const res2 = countries.join('') // remove a vírgula e fica sem espaço = brazilusaindia
const res3 = countries.join(' ') // remove as vírgulas e deixa com espaço = brazil usa india
const res4 = countries.join(' - ') // deixa espaço entre as strings e adiciona um traço = brazil - usa - india
console.log(res4)

/**
 * por exemplo, digamos que queremos formular a seguinte frase: 
 * i want to visit: brazil, usa and india
 */

const res5 = countries.join(', ') 
console.log("I want to visit " + res5) // I want to visit brazil, usa, india