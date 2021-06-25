// Promises
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hey! ')
    } else {
      reject('Ups!!!')
    }
  })
}

helloPromise()
  .then((response) => console.log(response))
  .then(() => console.log('Hola'))
  .catch((error) => console.log(error))
