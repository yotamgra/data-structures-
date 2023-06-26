const map = new Map([
  ["a", 1],
  
]);
map.set("c", 3);
map.set('b',2)
console.log(map.has('a'));
console.log(map.get("a"))

console.log(map.size)

for (const [key, value] of map) {
  console.log(`key: ${key}, value: ${value}`);
}
