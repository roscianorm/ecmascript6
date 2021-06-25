// Elements Destructuring

let person = {
  name: 'miguel',
  age: 22,
  country: 'MX',
}

// console.log(person.name, person.age)

let { name, age, country, dog } = person
console.log(name, age, country, dog)
