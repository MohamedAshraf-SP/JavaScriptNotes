let set= new Set()


console.log(set.add("unique item")) //return the set
console.log(set.add("unique item1")) //return the set
console.log(set.add("unique item2")) //return the set
console.log(set.add("unique item3")) //return the set
console.log(set.add("unique item4")) //return the set
console.log(set.add("unique item5")) //return the set
console.log(set.add("unique item6"))// return the set
console.log(set.delete("unique item")) // return true 
console.log(set.delete("unique item")) //return false
console.log(set.has('unique item'))  // true or false
console.log(set.values()) //set iterator
console.log(set.keys()) //set iterator

set.clear() //delete all items

console.log(set.size) //the set size
//iterator

let iter =set.values()
let c=0
while(c<=set.size){
    let x=iter.next()
    console.log(x.value)
    console.log(x.done)
    c++
}


for(item of set){
    console.log(item)
}

console.log(set) //the set




////////////////////////////////weak set

/*
What is a WeakSet?
A WeakSet is just like a normal Set with a few key differences:

a WeakSet can only contain objects
a WeakSet is not iterable which means it can’t be looped over
a WeakSet does not have a .clear() method
*/

let student1 = { name: 'James', age: 26, gender: 'male' };
let student2 = { name: 'Julia', age: 27, gender: 'female' };
let student3 = { name: 'Richard', age: 31, gender: 'male' };

const roster = new WeakSet([student1, student2, student3]);
console.log(roster)

let ws =new WeakSet([{}])

let obj={
    name:"only objects accepted in the weak sets"
}

ws.add(obj) //add item 

obj=null // deleted obj from the weak set 



console.log(ws.size)
