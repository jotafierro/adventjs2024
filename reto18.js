function findInAgenda(agenda, phone) {
  const match = agenda?.match(new RegExp(phone.replace(/-/g, '[ -]'), 'g'))
  if (!match) return null
  if (match.length > 1) return null

  const list = agenda.split('\n')

  for (const item of list) {
    const [itemNameMatch, itemName] = /<(.+)>/.exec(item)
    const itemPhone = /\+[\d-]+/.exec(item)?.[0]
    const itemAddress = item.replace(itemNameMatch,'').replace(itemPhone, '').trim()

    if (itemPhone.includes(phone)) {
      return { name: itemName, address: itemAddress}
    }
  }

  return null
}

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

console.log(findInAgenda(agenda, '34-600-123-456'))
// { name: "Juan Perez", address: "Calle Gran Via 12" }

console.log(findInAgenda(agenda, '600-987'))
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

console.log(findInAgenda(agenda, '111'))
// null
// Explicación: No hay resultados

console.log(findInAgenda(agenda, '1'))
// null
// Explicación: Demasiados resultados