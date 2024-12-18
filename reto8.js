function drawRace(indices, length) {
  let result = ''
  const rail = '~'.repeat(length)

  for (let i = 1; i <= indices.length; i++) {
    const position = indices[i - 1]
    let newRail = rail

    if (position !== 0) {
      newRail = rail.split('')

      if (position > 0)
        newRail[position] = 'r'
      else
        newRail[newRail.length + position] = 'r'

      newRail = newRail.join('')
    }

    result += ' '.repeat(indices.length - i) + `${newRail} /${i}\n`
  }

  return result.substring(0, result.length - 1)
}


console.log(drawRace([0, 5, -3], 10))
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

console.log(drawRace([2, -1, 0, 5], 8))
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

console.log(drawRace([3, 7, -2], 12))
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~~r~~~ /2
~~~~~~~~~~r~ /3
*/

