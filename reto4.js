function createXmasTree(height, ornament) {
  let result = ''
  const maxWidth = (2 * height) - 1

  for (let i = 1; i <= height; i++) {
    const ornamentLength = (i + (i - 1))
    const padding = (maxWidth - ornamentLength) / 2

    result += '_'.repeat(padding) + ornament.repeat(ornamentLength) + '_'.repeat(padding) + '\n'
  }

  const paddingTrunk = height - 1;
  const trunkRow = '_'.repeat(paddingTrunk) + '#' + '_'.repeat(paddingTrunk) + '\n'
  result += trunkRow + trunkRow.trim()

  return result
}

const tree = createXmasTree(5, '*')
console.log(tree)
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/


console.log('-----------------------')

const tree2 = createXmasTree(3, '+')
console.log(tree2)
/*
__+__
_+++_
+++++
__#__
__#__
*/

console.log('-----------------------')

const tree3 = createXmasTree(6, '@')
console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/
