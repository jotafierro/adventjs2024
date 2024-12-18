function fixPackages(packages) {
  const newPackages = packages.replace(/\(([^()]*)\)/g, (_, inner) => [...inner].reverse().join(''))

  return newPackages.includes('(') ? fixPackages(newPackages) : newPackages

  // const stack = []
  // let result = ''

  // for (let i = 0; i < packages.length; i++) {
  //   const char = packages[i]

  //   if (char === '(') {
  //     stack.push(result.length)
  //   } else if (char === ')') {
  //     const start = stack.pop()
  //     const reversed = result.slice(start, result.length).split('').reverse().join('')

  //     result = result.slice(0, start) + reversed
  //   } else {
  //     result += char
  //   }
  // }

  // return result
}


console.log(fixPackages('a(cb)de'))
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

console.log(fixPackages('a(bc(def)g)h'))
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

console.log(fixPackages('abc(def(gh)i)jk'))
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

console.log(fixPackages('a(b(c))e'))
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"
