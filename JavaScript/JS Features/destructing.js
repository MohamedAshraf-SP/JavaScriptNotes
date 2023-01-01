//** Destructing  is putting elements from array or object in a separated variable */

// In Array
// use []
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let [first, second, , , fifth] = arr // commas skips items
// console.log(first,second,fifth)

let [, , ...others] = arr /// skips 1,2

// console.log(others)

// In Object 
//use {}
const obj = {
    name: 'mohamed',
    age: '30',
    job: 'programmer'
}

let {name,age,job}=obj  //the same obj name

// console.log(name,age,job)

let {name:myname,age:myage}=obj ///differant from obj names

// console.log (myname,myage)

// Nested

// let [{nested}]



// Parameters

function f({name,age,job}){
    console.log(name)
}

f(obj)