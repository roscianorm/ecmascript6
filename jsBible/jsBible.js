// https://developer.mozilla.org/  <-- Ayuda bastante

// Para declarar variables se utiliza 'let'

let price = 49.99

// Se pueden declarar n cantidad de variables simultaneamente separandolas con comas
let name = 'Miguel',
	lastName = 'Rosciano'

// Para declarar constantes se utiliza 'const'
const dog = 'Boster'

const monthsOfTheYear = 12,
	favoriteColor = 'Blue'

//------------------------------------------------------------------------------------
// Para nombrar variables se utiliza letras, underScor(_), simbolo de dolar
/*
		Es una buena practica utilizar 'camelCase' para escribir variables.

		Camelcase conciste en escribir la primera palabra en minusculas y al momento
		de escribir la segunda palabra la primera letra debe ser mayuscula y el resto en
		minusculas, así sucesivamente.
*/
let accountNumber = 1000017

/*
    En buena practica se utiliza unicamente camelCase y letras para hacer variables,
    pero es importante conocer otros metodos para poder leer otros codigos

    Cuando una variable incia con underScore significa que en algún punto se vuelve
    privada
*/
let _privateVariable = 'El saldo de esta variable es privado'

//------------------------------------------------------------------------------------
// Para saber el tipo de dato de una variable se puede utilizar 'typeof'

let num = 21
let letter = 'Hello!'
let state = true

console.log(num)
console.log(typeof num)
console.log(letter)
console.log(typeof letter)
console.log(state)
console.log(typeof state)

//------------------------------------------------------------------------------------
// Operadores

// Suma
let suma = 5
// Toma el saldo de suma y le suma 5
suma = suma + 5
suma += 5 // Version abreviada

console.log(suma)

// Resta
let resta = 10
// Toma el saldo de resta y le resta 3
resta = resta - 3
resta -= 3 // Version abreviada

console.log(resta)

// Multiplicación
let multiplicacion = 3
// Toma el saldo de multiplicacion y lo multiplica por 3
multiplicacion = multiplicacion * 3
multiplicacion *= 3 // Version abreviada

console.log(multiplicacion)

// División
let division = 12
// Toma el saldo de division y lo didive entre 3
division = division / 3
division /= 3 // Version abreviada

console.log(division)

// Para obtener el residuo de la division
let residuo = 12
// Toma el saldo de residuo y obtiene el residuo de su division entre 5
residuo = residuo % 5
residuo %= 5 // Version abreviada

console.log(residuo)

// Para incrementar el saldo en 1
let contador = 10

// Se puede escribir de ambas formas, pero la funcion de cada una es distinta
contador++
++contador

// Para decrementar el saldo en 1
// Se puede escribir de ambas formas, pero la funcion de cada una es distinta
--contador
contador--

//------------------------------------------------------------------------------------
// Manipular strings
// Para mostrar caractes especiales en strings se utiliza el backslash(\) mas el caracter
console.log('Hello "World!"') //Por ejemplos

/*
    No se como llamar a esto así que le dire strings avanzados, podemos llamar a
    variables dentro de ellos y tambien añandir saltos de lienas sin necesidad de
    cortar el string.
*/
let nombre = 'Pedro'
let frase = `Hello ${nombre}, how are you?`
let oracion = `Como
							 has
							 estado?`

/*
		Es importante investigar acerca de las funciones que podemos aplicara  los strings
		e investigar acerca de las propiedades que podemos obtener de ellos. Por ejemplo;
*/

let example = 'Trigger me Elmo, becausa God has been dead for a very long time'
let number = 49.99
let txtNumber = '200'
let txtFloatNumber = '10.99'

console.log(example.toLocaleLowerCase) // Pone toda la oracion en minusculas
console.log(example.toLocaleUpperCase) // Pone toda la oracion en mayusculas
console.log(example.length) // Devuelve la cantidad de caracteres en el string como un int
console.log(example.substring(8)) // Indicamos desde que posicion del string queremos imprimir, en este caso 8
console.log(number.toString()) // Convierte el int a string

txtNumber = Number.parseInt(txtNumber) // Convierte el string en int
console.log(txtNumber)

txtFloatNumber = Number.parseFloat(txtFloatNumber) // Convierte el string en float
console.log(txtFloatNumber)

//------------------------------------------------------------------------------------
// Booleans, true or false

let condicion = true // Esto es True
console.log(typeof condicion)
console.log(condicion)

condicion = !condicion // Esto es false
condicion = false // Esto tambien es false
console.log(condicion)

//------------------------------------------------------------------------------------
// Null and Undefined

let saldo // El valor de saldo es undefined
console.log(saldo)
saldo = 20 // El valor de saldo es 20
console.log(saldo)
saldo = null // El valor de saldo es null
console.log(saldo)
/*
		La buena practica dice que cuando queremos resetear el valor de una variable
		debemos poner null no undefied, asi diferenciamos cuando nosotros lo
		programadores hemos reseteado el valor y cuadno lo ha hecho javascript.
*/
saldo = undefined // El valor de saldo es undefined
console.log(saldo)

//------------------------------------------------------------------------------------
// Objetos
let person = {
	firstname: 'John',
	lastName: 'Adams',
}
console.log(`Hello ${person.firstname} ${person.lastName}`)

//------------------------------------------------------------------------------------
// true or false again
let f = false // false = flase, empty strings ( "", ''), 0, null, undefined, NaN.
let t = true // true = true, cualquier numero excepto 0, strings ("0", '0')

//------------------------------------------------------------------------------------
// .toFixed(n)
/*
		.toFixed(n) es una funcion para redondear numeros decimales, donde n es la
		cantidad de decimales va a tener el numero. Pero el tipo de dato que retorna esta
		funcion es string, así que para que nos retorne un tipo de dato int  float
		simplemente debemos añardir un simbolo de mas al principio de la operación.
*/
if (+(1.1 + 1.3).toFixed(2) === 2.4) {
	alert('true')
	alert(typeof (1.1 + 1.3).toFixed(2)) // string
	alert(typeof +(1.1 + 1.3).toFixed(2)) // number
}

//------------------------------------------------------------------------------------
// if ... else statement

let numTest = 20
if (numTest === 10) {
	console.log('more than 10')
} else if (numTest === 20) {
	console.log('equals to 20')
} else if (numTest < 5) {
	console.log('less than 5')
} else {
	console.log('false')
}

// if/else shortcut
// (condition) ? true-statement : false-statement;
let resultado = numTest >= 15 ? 'mayor/igual que 15' : 'menor que 15'
console.log(resultado) // mayor/igual que 15

//------------------------------------------------------------------------------------
// ===, !==, ==, != y =
let numeroEjemplo = 45
let stringEjemplo = 'NFL'

// === significa equal o exactamente igual
if (numeroEjemplo === 45) {
	console.log('Hello!')
}
if (stringEjemplo === 'NFL') {
	console.log('Hello!')
}
if (stringEjemplo !== 'NFL') {
	console.log('Hello!')
}
/*
		== y != es para comparar valores también pero cambia los tipos de datos (por
		ejemplo si evaluamos 1=='1', evaluara como si el primer 1 fuese un string también).
		No se recomienda utilizarlo.
*/
// = es para asignar un valor

//------------------------------------------------------------------------------------
// Lops for(), while() and do...while()
// for lop
for (let i = 0; i < 5; i++) {
	console.log(i)
}

// while lop
let count = 0
while (count < 5) {
	console.log(count)
	count++
}

// do ... while lop
let contador = 0
do {
	console.log(contador)
	contador++
} while (contador < 5)

//------------------------------------------------------------------------------------
// Functions
// Directly called functions
function logMessage() {
	console.log('Here is a message')
}

// Function expressions, best practices
let myFunction = function miFuncion() {
	for (let i = 0; i < 5; i++) {
		alert(`let fucking function, bitch!.\nFunction Expressions.`)
		console.log(i)
	}
}
