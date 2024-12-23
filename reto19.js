function distributeWeight(weight) {
  const boxRepresentations = {
    1: [" _ ", "|_|"] ,
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"]
  }

  const boxes = []
  while (weight > 0) {
    if (weight >= 10) {
      boxes.push(10)
      weight -= 10
    } else if (weight >= 5) {
      boxes.push(5)
      weight -= 5
    } else if (weight >= 2) {
      boxes.push(2)
      weight -= 2
    } else if (weight >= 1) {
      boxes.push(1)
      weight -= 1
    }
  }

  const boxesQueue = []
  while (boxes.length > 0) {
    const box = boxes.shift()
    const boxRepresentation = [...boxRepresentations[box]]

    if (boxesQueue.length === 0) {
      boxesQueue.push(boxRepresentation)
    } else {
      const base = boxRepresentation[boxRepresentation.length - 1]
      boxesQueue[0][0] = base.trim() + boxesQueue[0][0].slice(base.length).trim()

      boxesQueue.unshift(boxRepresentation.slice(0, -1))
    }
  }

  return boxesQueue.reduce((acc, box) => {
    acc.push(box.join('\n'))
    return acc
  }, []).join('\n')
}

console.log(distributeWeight(1))
// Devuelve:
//  _
// |_|

console.log(distributeWeight(2))
// Devuelve:
//  ___
// |___|

console.log(distributeWeight(3))
// Devuelve:
//  _
// |_|_
// |___|

console.log(distributeWeight(4))
// Devuelve:
//  ___
// |___|
// |___|

console.log(distributeWeight(5))
// Devuelve:
//  _____
// |     |
// |_____|

console.log(distributeWeight(6))
// Devuelve:
//  _
// |_|___
// |     |
// |_____|
