function moveTrain(board, mov) {
  const widthBoard = board[0].length + 1
  const newBoard = board.join('#')

  if (!newBoard.includes('@')) return 'none'

  const index = newBoard.indexOf('@')

  const moves = {
    'L': -1,
    'R': 1,
    'U': -widthBoard,
    'D': widthBoard
  }

  const newCell = newBoard[index + moves[mov]]

  if (newCell === 'o' || newCell === '#' || !newCell) {
    return 'crash'
  } else if (newCell === '*') {
    return 'eat'
  }

  return 'none'

  // let trainColumn = null
  // let trainRow = null

  // for (let i = 0; i < board.length; i++) {
  //   if (board[i].includes('@')) {
  //     trainRow = i + (mov === 'D' ? 1 : (mov === 'U' ? -1 : 0))
  //     trainColumn = board[i].indexOf('@') + (mov === 'R' ? 1 : (mov === 'L' ? -1 : 0))
  //     break
  //   }
  // }

  // const newCell = board[trainRow][trainColumn]

  // if (newCell === 'o' || !newCell) {
  //   return 'crash'
  // } else if (newCell === '*') {
  //   return 'eat'
  // }

  // return 'none';

  // return board.reduce((acc, row, rowIndex) => {
  //   const trainIndex = row.indexOf('@')

  //   if (trainIndex !== -1) {
  //     const newRowIndex = rowIndex + (mov === 'D' ? 1 : mov === 'U' ? -1 : 0)
  //     const newCellIndex = trainIndex + (mov === 'R' ? 1 : mov === 'L' ? -1 : 0)
  //     const newCell = board[newRowIndex]?.[newCellIndex] ?? ' '
  //     if (newCell === 'o' || newRowIndex < 0 || newRowIndex >= board.length || newCellIndex < 0 || newCellIndex >= row.length) {
  //       return 'crash'
  //     } else if (newCell === '*') {
  //       return 'eat'
  //     }
  //   }

  //   return acc
  // }, 'none')
}

const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha