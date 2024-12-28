function isTreesSynchronized(tree1, tree2) {
  if (tree1.value !== tree2.value) {
    return [false, tree1.value]
  }

  if (tree1.left && tree2.right) {
    const [synchronized, ] = isTreesSynchronized(tree1.left, tree2.right)

    if (!synchronized) {
      return [false, tree1.value]
    }
  }

  if (tree1.right && tree2.left) {
    const [synchronized, ] = isTreesSynchronized(tree1.right, tree2.left)

    if (!synchronized) {
      return [false, tree1.value]
    }
  }

  return [true, tree1.value]
}

const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

const tree2 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '⭐' }
}

console.log(isTreesSynchronized(tree1, tree2)) // [true, '🎄']

/*
  tree1          tree2
   🎄              🎄
  / \             / \
⭐   🎅         🎅   ⭐
*/

const tree3 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '🎁' }
}

console.log(isTreesSynchronized(tree1, tree3)) // [false, '🎄']

const tree4 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

console.log(isTreesSynchronized(tree1, tree4)) // [false, '🎄']

console.log(isTreesSynchronized(
  { value: '🎅' },
  { value: '🧑‍🎄' }
)) // [false, '🎅']