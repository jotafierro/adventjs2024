// primera idea - 1 sola estrella
// function generateGiftSets(gifts) {
//   const result = []
//   const generateSubsets = (index, currentSubset) => {
//     result.push([...currentSubset])
//     for (let i = index; i < gifts.length; i++) {
//       currentSubset.push(gifts[i])
//       generateSubsets(i + 1, currentSubset)
//       currentSubset.pop()
//     }
//   }
//   generateSubsets(0, [])
//   return result.sort((a, b) => a.length - b.length).slice(1)
// }

function generateGiftSets(gifts) {
  let result = []
  let qty = 1

  while (qty <= gifts.length) {
    const generateSubsets = (index, currentSubset) => {
      if (currentSubset.length === qty) {
        result.push([...currentSubset])
      }

      for (let i = index; i < gifts.length; i++) {
        currentSubset.push(gifts[i])
        generateSubsets(i + 1, currentSubset)
        currentSubset.pop()
      }
    }

    generateSubsets(0, [])
    qty++
  }

  if (gifts.length === qty) result.push(gifts)

  return result
}

console.log(generateGiftSets(['car']))
// [
//   ['car'],
// ]

console.log(generateGiftSets(['car', 'doll', 'puzzle']))
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

console.log(generateGiftSets(['car', 'doll']))
// [
//   ['car'],
//   ['doll'],
//   ['car', 'doll'],
// ]

console.log(generateGiftSets(['ball']))
// [
//   ['ball']
// ]

console.log(generateGiftSets(['game', 'pc']))
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]


console.log(generateGiftSets(['apple', 'banana', 'cherry', 'date']))
// [
//   [
//     "apple"
//   ],
//   [
//     "banana"
//   ],
//   [
//     "cherry"
//   ],
//   [
//     "date"
//   ],
//   [
//     "apple",
//     "banana"
//   ],
//   [
//     "apple",
//     "cherry"
//   ],
//   [
//     "apple",
//     "date"
//   ],
//   [
//     "banana",
//     "cherry"
//   ],
//   [
//     "banana",
//     "date"
//   ],
//   [
//     "cherry",
//     "date"
//   ],
//   [
//     "apple",
//     "banana",
//     "cherry"
//   ],
//   [
//     "apple",
//     "banana",
//     "date"
//   ],
//   [
//     "apple",
//     "cherry",
//     "date"
//   ],
//   [
//     "banana",
//     "cherry",
//     "date"
//   ],
//   [
//     "apple",
//     "banana",
//     "cherry",
//     "date"
//   ]
// ]