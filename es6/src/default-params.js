// Default Params

function newFunction(name, age, country) {
  var name = name || 'miguel'
  var age = age || 22
  var country = country || 'MX'
  console.log(name, age, country)
}

// es6
function newFunctionES6(name = 'miguel', age = 22, country = 'MX') {
  console.log(name, age, country)
}

newFunctionES6()
newFunctionES6('oscar', 32, 'CO')
