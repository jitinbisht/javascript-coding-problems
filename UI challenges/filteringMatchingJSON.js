function findMatches(data, match) {
    // Write your code here
    return data.filter(row => {
        const itemKeys = Object.keys(row);
        const searchKeys = Object.keys(match);
        return searchKeys.every(key => itemKeys.includes(key) && row[key] === match[key])
    })
}
const data = [
  { name: 'John', company: 'Google', position: 'Software Engineer', level: 'Entry' },
  { name: 'Ann', company: 'Waymo', position: 'Product Manager', level: 'Entry' }
]
const match= { position: 'Product Manager', level: 'Entry' }

console.log(findMatches(data, match))