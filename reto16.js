function removeSnow(s) {
  // primera idea - 4 estrellas
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      return removeSnow(s.slice(0, i) + s.slice(i + 2))
    }
  }

  return s
}


console.log(removeSnow('zxxzoz')) // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

console.log(removeSnow('abcdd')) // -> "abc"
// 1. Eliminamos "dd", quedando "abc"

console.log(removeSnow('zzz')) // -> "z"
// 1. Eliminamos "zz", quedando "z"

console.log(removeSnow('a')) // -> "a"
// No hay montículos repetidos