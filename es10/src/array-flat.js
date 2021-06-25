// flat
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]

console.log(array.flat(0))
console.log(array.flat()) // Por defecto, toma el 1 como valor
console.log(array.flat(2))

// flatMap
let arrayMap = [1, 2, 3, 4, 5]
console.log(arrayMap.flatMap((value) => [value, value * 2]))
