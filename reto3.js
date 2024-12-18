function organizeInventory(inventory) {
  let result = {}

  for (const {category, name, quantity} of inventory) {
    if (result[category]) {
      if (result[category][name]) {
        result[category][name] += quantity
      } else {
        result[category][name] = quantity
      }
    } else {
      result[category] = {
        [name]: quantity
      }
    }
  }

  return result

  // otra solución que solo saco 4 estrellas de las 5
  /*
  return inventory.reduce((result, item) => {
     const { category, name, quantity } = item;
     if (!result[category]) {
       result[category] = {};
     }
     result[category][name] = (result[category][name] || 0) + quantity;
     return result;
   }, {});
  */
}



const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]

const i1 = organizeInventory(inventory)
console.log(i1)
// Resultado esperado:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }

const inventory2 = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' }
]

const i2 = organizeInventory(inventory2)
console.log(i2)
// Resultado esperado:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }
