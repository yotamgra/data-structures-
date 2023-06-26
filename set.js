const set = new Set([1,2,3])
set.add(4)
set.delete(3)
console.log(set.has(4))
for(const item of set){
    console.log(item)
}
console.log(set.size)