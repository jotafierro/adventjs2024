function fixGiftList(received, expected) {
  const missing = {}
  const extra = {}

  const newExpected = expected.reduce((acc, gift) => {
    acc[gift] = (acc[gift] ?? 0) + 1
    return acc
  }, {})

  const newRecieved = received.reduce((acc, gift) => {
    acc[gift] = (acc[gift] ?? 0) + 1
    return acc
  }, {})

  for (const gift in newExpected) {
    const diff = newExpected[gift] - (newRecieved[gift] ?? 0)
    if (diff > 0) {
      missing[gift] = diff
    }
  }

  for (const gift in newRecieved) {
    const diff = newRecieved[gift] - (newExpected[gift] ?? 0)
    if (diff > 0) {
      extra[gift] = diff
    }
  }

  return {
    missing,
    extra
  }
}

console.log(fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball']))
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

console.log(fixGiftList(
  ['book', 'train', 'kite', 'train'],
  ['train', 'book', 'kite', 'ball', 'kite']
))
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

console.log(fixGiftList(
  ['bear', 'bear', 'car'],
  ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
))
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

console.log(fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear']))
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }