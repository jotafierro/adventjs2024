function execute(code) {
  const calc = (str, value) => {
    for (let i = 0; i < str.length; i++) {
      const char = str[i]

      if (char === '+') value++
      if (char === '-') value--

      if (char === '{') {
        const end = str.indexOf('}', i)
        if (value !== 0) {
          const innerStr = str.slice(i + 1, end)
          value = calc(innerStr, value)
        }
        i = end
      }

      if (char === '[') {
        const end = str.indexOf(']', i)

        while (value !== 0) {
          const innerStr = str.slice(i + 1, end)
          value = calc(innerStr, value)
        }

        i = end
      }
    }

    return value
  }

  return calc(code, 0)
}

console.log(execute('+++')) // 3
console.log(execute('+--')) // -1
console.log(execute('>+++[-]')) // 0
console.log(execute('>>>+{++}')) // 3
console.log(execute('+{[-]+}+')) // 2
console.log(execute('{+}{+}{+}')) // 0
console.log(execute('------[+]++')) // 2
console.log(execute('-[++{-}]+{++++}')) // 5
console.log(execute('+++{[-]+++[-]+}')) // 1
