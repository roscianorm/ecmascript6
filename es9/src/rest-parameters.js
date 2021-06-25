// Rest parameters
const obj = {
  name: 'Miguel',
  age: 22,
  country: 'CR',
}

let { name, ...all } = obj
console.log(name, all) // returns Miguel { age: 22, country: 'CR' }

const objDetails = {
  ...obj,
  lastname: 'Rosciano',
}
console.log(objDetails)
