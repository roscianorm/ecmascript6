{
  // Podemos acceder a var desde cualquier lugar
  var globalVar = 'Global var'
}
{
  // Podemos acceder a let solo dentro del bloque de codigo donde es definido
  let globalLet = 'Global let'
  console.log(globalLet)
}
console.log(globalVar)
// console.log(globalLet)

// A las constantes no podemos cambiarles el valor.
const a = 'a'
a = 'b'
