function calculatePrice(ornaments) {
  const ornamentValues = {
    '*': 1,
    'o': 5,
    '^': 10,
    '#': 50,
    '@': 100,
  }
  let acc = 0

  if (ornaments.match(/[^*o^#@]/)) return undefined

  for (let i = 0; i < ornaments.length; i++) {
    // if (!ornamentValues[ornaments[i]]) return undefined

    let ornamentValue = ornamentValues[ornaments[i]]

    if (ornamentValue < ornamentValues[ornaments[i + 1]]) {
      ornamentValue *= -1
    }

    acc += ornamentValue
  }

  return acc

  // const ornamentValues = {
  //   '*': 1,
  //   'o': 5,
  //   '^': 10,
  //   '#': 50,
  //   '@': 100,
  // }

  // if (ornaments.match(/[^*o^#@]/)) return undefined

  // return ornaments.split('').reduce((acc, ornament, index) => {
  //   let ornamentValue = ornamentValues[ornament]
  //   if (ornaments[index + 1] && ornamentValue < ornamentValues[ornaments[index + 1]]) {
  //     ornamentValue *= -1
  //   }

  //   return acc + ornamentValue
  // }, 0)
}

console.log(calculatePrice('***'))  // 3   (1 + 1 + 1)
console.log(calculatePrice('*o'))   // 4   (- 1 + 5)
console.log(calculatePrice('o*'))   // 6   (5 + 1)
console.log(calculatePrice('*o*'))  // 5  (-1 + 5 + 1)
console.log(calculatePrice('**o*')) // 6  (1 - 1 + 5 + 1)
console.log(calculatePrice('o***')) // 8   (5 + 3)
console.log(calculatePrice('*o@'))  // 94  (-5 - 1 + 100)
console.log(calculatePrice('*#'))   // 49  (-1 + 50)
console.log(calculatePrice('@@@'))  // 300 (100 + 100 + 100)
console.log(calculatePrice('#@'))   // 50  (-50 + 100)
console.log(calculatePrice('#@Z'))  // undefined (Z es desconocido)