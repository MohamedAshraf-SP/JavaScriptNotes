let arr = [3,323,33,23,3,3,32,3,3,3,2,3]

let arrayOfObjects=[
    {name:'value'},
    {},
    {},
    {},
    {}
]

// add , delete from end 

 //console.log (arr)
//
arr.push(4,3,3,3,3,3)

//console.log (arr)
//[3,323,33,23,3,3,32,3,3,3,2,3,4]
arr.pop()

//console.log (arr)
//[3,323,33,23,3,3,32,3,3,3,2,3]

// add , delete from start 

arr.unshift(1,3,3)

//console.log (arr)
//[3,323,33,23,3,3,32,3,3,3,2,3,1,3,3]
arr.shift()

//console.log (arr) 
//[323,33,23,3,3,32,3,3,3,2,3,1,3,3]


let arr2=[4,4,4,4,4]
let arr3=[5,5,5,5,55,5]

// concat

let concated=arr.concat(arr2,arr3)
// console.log(concated)
//



// includes

arr.includes(3)
//return true or false 

arr.includes(3,4)

// the second parameter is for "index to start search from"


//index OF


arr.indexOf('X')
arr.indexOf('X',2)
// the second parameter is for "index to start search from"


// reverse

arr.reverse()
// reverses array arr in place now the arr is reversed  xyz =>  zyx


// join

arr.join()

// returns the array as a single string


arr.join('--')

// the parameter is delemter added in the string between the elements


// slice 

arr.slice(2,5)
// gets elements from including 2 up to not including 5

arr.slice(2)
// gets elements from including index 2 to the end

arr.slice(undefined, 2)
// get the elements from the start to not including 2

arr.slice(-3,-1)
//get one element from the end

arr.slice()
//return copy of the array


// splice

let ar=[1,2,3,4]
ar.splice(-1,0,"hi")
console.log(ar)

//arr.splice(start,deleteCount,itemsToAdd)
//console.log(arr)

//console.log(arr.splice(2,0,'xxx'),arr)


//sort

arr.sort()
//sorts the array in place ""alphabetically""
// not sort the numbers

// for(let x =0; x <50
//     ;x ++)
// {
// let num = Math.floor(Math.random()*50
// )
// console.log(num)
// }







