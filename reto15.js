function drawTable(data){
  // primera idea - 4 estrellas
  const keys = Object.keys(data[0])

  const widths = keys.map(key => Math.max(...data.map(item => String(item[key]).length), key.length))

  const separator = widths.map(width => '+-' + '-'.repeat(width) + '-').join('') + '+'

  const header = keys.map((key, index) => {
    key = key.charAt(0).toUpperCase() + key.slice(1)
    return `| ${key.padEnd(widths[index])} `
  }).join('') + '|'

  const rows = data.map(item => keys.map((key, index) => `| ${String(item[key]).padEnd(widths[index])} `).join('') + '|')

  return [
    separator,
    header,
    separator,
    rows.join('\n'),
    separator
  ].join('')
}


console.log(drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
]))
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

console.log(drawTable([
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 }
]))
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+


console.log(drawTable([
  { gift: 'Doll', quantity: 10, price: 100 },
  { gift: 'Book', quantity: 5, price: 50 },
  { gift: 'Music CD', quantity: 1, price: 20 }
]))