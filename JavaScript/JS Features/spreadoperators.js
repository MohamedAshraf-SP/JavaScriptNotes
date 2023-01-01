//** */  the spread operator it the three dots (...)

// spread operator
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let copy = [...arr]  //1,2,3,4,5,6,7,8,9
// console.log (copy)

// as parameter

Math.min(...arr) //1



//** */ spread operator with Arrays

let combination = [...arr, ...copy]//1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9

// console.log(combination)

//** */ spread operator with strings 

let strArr = [...'this text converted to single characters in array']

strArr = 'this text converted to single characters in array'.split('')

// console.log(strArr)


//** */ spread operator with objects

const obj = {
    name: 'mohamed',
    age: '30',
    job: 'programmer'
}


const more = {
    ...obj,
    fullname: `${obj.name} mahlawi`,
    job: 'software engineer'
}       // same as obj and job overridden and full name added

console.log(obj)
console.log(more)

const arrToObject = { ...arr } //object of index : value pairs

console.log(arrToObject)



