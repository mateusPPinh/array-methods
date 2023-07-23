/**
 * Filter: O método filter procura por um único (primeiro) elemento que faz com que a função retorne true.
 */

// const numbers = [1, 2, 3, 4, 5, 6]

// const divisionPar = numbers.filter((item) => {
//   console.log(item % 2 === 0)
// })

/**
 * Esse código procura os números do nosso array que são divisíveis por 2, tendo como retorno o seguinte:
 *  false = 1 não é divisível por 2
    true = 2 é divisível por 2 e assim por diante
    false
    true
    false
    true
 */

    const persons = [
      {
        name: "Luis",
        age: 16,
        city: "São Paulo"
      },
      {
        name: "Carlos",
        age: 20,
        city: "São José do Norte"
      }
    ]

    const isAgeAllowed = persons.filter(person => person.age >= 18)
    console.log(isAgeAllowed)

    /**
     * neste outro exemplo verificamos se existe alguém maior de 18 anos dentro do nosso array, caso sim, 
     * ele vai retornar: [ { name: 'Carlos', age: 20, city: 'São José do Norte' } ]
     * só retornou o Carlos pois somente ele tem 18 anos, sendo o Luis menor, não vai aparecer pois é falsy
     */


