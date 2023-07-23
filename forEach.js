// forEach = The arr.forEach method allows to run a function for every element of the array.

const arr = ['Bilbo', 'Gandalf', 'Nazgul'];

arr.forEach((item, index, arr) => {
  console.log(`${item} is at index ${index} in ${arr}`)
})

/**
 * return:
 * Bilbo is at index 0 in Bilbo,Gandalf,Nazgul
  Gandalf is at index 1 in Bilbo,Gandalf,Nazgul
  Nazgul is at index 2 in Bilbo,Gandalf,Nazgul
 */