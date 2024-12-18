function organizeShoes(shoes) {
  const temps = []
  const result = []

  for (const index in shoes) {
    const shoe = shoes[index]
    const otherType = shoe.type === `I` ? `R` : `I`

    if (temps.includes(`${shoe.size}${otherType}`)) {
      temps.splice(temps.indexOf(`${shoe.size}${otherType}`), 1)
      result.push(shoe.size)
    } else {
      temps.push(`${shoe.size}${shoe.type}`)
    }
  }

  return result
}

const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

const os1 = organizeShoes(shoes)
console.log(os1)
// [38, 42]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]
const os2 = organizeShoes(shoes2)
console.log(os2)
// [38, 38]

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

const os3 = organizeShoes(shoes3)
console.log(os3)
// []