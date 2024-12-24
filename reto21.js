// esta tiene 3 estrellas, pero es lo más sencillo que se me ocurre
function treeHeight(tree) {
  if (!tree) return 0
  if (!tree.left && !tree.right) return 1

  return Math.max(treeHeight(tree.left), treeHeight(tree.right)) + 1
}

// esta solución solo tiene 2 estrellas
// function treeHeight(tree) {
//   // Handle empty tree
//   if (!tree) return 0;

//   let height = 0;
//   const queue = [[tree, 1]]; // Store node and its level

//   while (queue.length > 0) {
//     const [node, level] = queue.shift();

//     // Update max height
//     height = Math.max(height, level);

//     // Add children to queue with increased level
//     if (node.left) {
//       queue.push([node.left, level + 1]);
//     }
//     if (node.right) {
//       queue.push([node.right, level + 1]);
//     }
//   }

//   return height;
// }

// esta solución tiene 2 estrellas
// function treeHeight(tree) {
//   if (!tree) return 0;

//   let height = 0;
//   let currentLevel = [tree];

//   while (currentLevel.length > 0) {
//     height++;
//     const nextLevel = [];

//     // Process all nodes at current level
//     for (const node of currentLevel) {
//       if (node.left) nextLevel.push(node.left);
//       if (node.right) nextLevel.push(node.right);
//     }

//     currentLevel = nextLevel;
//   }

//   return height;
// }


// Definición del árbol
const tree = {
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: null,
      right: null
    },
    right: {
      value: '🎅',
      left: null,
      right: null
    }
  },
  right: {
    value: '❄️',
    left: null,
    right: {
      value: '🦌',
      left: null,
      right: {
        value: '🦌',
        left: null,
        right: null
      }
    }
  }
}

// Representación gráfica del árbol:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Llamada a la función
console.log(treeHeight(tree))
// Devuelve: 3