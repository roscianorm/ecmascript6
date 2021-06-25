// Arrow functions
// Sintaxis reducida y this no vinculable

const names = [
  { name: 'Oscar', age: 32 },
  { name: 'Camila', age: 36 },
]

let listOfNames = names.map(function (item) {
  console.log(item.name)
})

// es6
let listOfNamesES6 = names.map((item) => console.log(item.name))

// const listOfNamesES6Const = (name, age, country) => {
//   ...do something
// }

// const listOfNamesES6Const = names.map(item => console.log(item.name))
// const listOfNamesES6Const = names.map(item => {
//   console.log(item.name)
// })

// const square = num => num * num
