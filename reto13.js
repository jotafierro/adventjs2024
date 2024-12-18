function isRobotBack(moves) {
  let x = 0
  let y = 0
  const reverse = {
    'R': 'L',
    'L': 'R',
    'U': 'D',
    'D': 'U'
  }

  const modifiers = {
    '*': (nextMove, index) => {
      return moves.substring(0, index) + nextMove + moves.substring(index + 1)
    },
    '!': (nextMove, index) => {
      return moves.substring(0, index) + reverse[nextMove] + moves.substring(index + 2)
    },
    '?': (nextMove, index) => {
      if (moves.substring(0, index).includes(nextMove)) {
        return moves.substring(0, index) + moves.substring(index + 2)
      }

      return moves.substring(0, index) + nextMove + moves.substring(index + 2)
    }
  }

  while (/\!|\*|\?/gi.exec(moves)) {
    const {0: move, index} = /\!|\*|\?/gi.exec(moves)
    let nextMove = moves[index + 1]

    moves = modifiers[move](nextMove, index)
  }

  for (const move of moves.split('')) {
    if (move === 'R') x++
    else if (move === 'L') x--
    else if (move === 'U') y++
    else y--
  }

  return (x === 0 && y === 0) ? true : [x, y]
}

console.log(isRobotBack('R'))     // [1, 0]
console.log(isRobotBack('RL'))    // true
console.log(isRobotBack('RLUD'))  // true
console.log(isRobotBack('*RU'))   // [2, 1]
console.log(isRobotBack('R*U'))   // [1, 2]
console.log(isRobotBack('LLL!R')) // [-4, 0]
console.log(isRobotBack('R?R'))   // [1, 0]
console.log(isRobotBack('U?D'))   // true
console.log(isRobotBack('R!L'))   // [2,0]
console.log(isRobotBack('U!D'))   // [0,2]
console.log(isRobotBack('R?L'))   // true
console.log(isRobotBack('U?U'))   // [0,1]
console.log(isRobotBack('*U?U'))  // [0,2]
console.log(isRobotBack('U?D?U')) // true

// Ejemplos paso a paso:
console.log(isRobotBack('R!U?U')) // [1,0]
// 'R'  -> se mueve a la derecha
// '!U' -> se invierte y se convierte en 'D'
// '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

console.log(isRobotBack('UU!U?D')) // [0,1]
// 'U'  -> se mueve arriba
// 'U'  -> se mueve arriba
// '!U' -> se invierte y se convierte en 'D'
// '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'
