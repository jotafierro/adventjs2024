function createFrame(names) {
  let large = 0
  let result = ''

  for (const name of names) {
    large = name.length > large ? name.length : large
  }

  result += '*'.repeat(large + 4) + '\n'

  for (const name of names) {
    const repeatSpace = large - name.length

    result += '* ' + name + ' '.repeat(repeatSpace) + ' *\n'
  }

  result += '*'.repeat(large + 4)

  return result
}

const frame1 = createFrame(['midu', 'madeval', 'educalvolpz'])
console.log(frame1)
// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

const frame2 = createFrame(['midu'])
console.log(frame2)
// Resultado esperado:
// ********
// * midu *
// ********

const frame3 = createFrame(['a', 'bb', 'ccc'])
console.log(frame3)
// Resultado esperado:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

const frame4 = createFrame(['a', 'bb', 'ccc', 'dddd'])
console.log(frame4)
// Resultado esperado
// ********
// * a    *
// * bb   *
// * ccc  *
// * dddd *
// ********