function inBox(box) {
  for (let i = 1; i < box.length - 1; i++) {
    if (
      box[i][0] === '#'
      && box[i][box[i].length - 1] === '#'
      && box[i].includes('*')
    ) {
      return true
    }
  }

  return false
}

console.log(inBox([
  "###",
  "#*#",
  "###"
])) // ➞ true

console.log(inBox([
  "####",
  "#* #",
  "#  #",
  "####"
])) // ➞ true

console.log(inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
])) // ➞ false

console.log(inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
])) // ➞ false