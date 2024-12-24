function findMissingNumbers(nums) {
  const missingNumbers = []

  for (let i = 1; i < Math.max(...nums); i++) {
    if (!nums.includes(i)) {
      missingNumbers.push(i)
    }
  }

  return missingNumbers
}

console.log(findMissingNumbers([1, 2, 4, 6]))
// [3, 5]

console.log(findMissingNumbers([4, 8, 7, 2]))
// [1, 3, 5, 6]

console.log(findMissingNumbers([3, 2, 1, 1]))
// []

console.log(findMissingNumbers([5, 5, 5, 3, 3, 2, 1]))
// [4]