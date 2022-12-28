let string ='       this is my string     '

/// cuts from start "5" to end-1 "7-1=6"
let is=string.slice(5,7)
console.log (is) 

/// cuts from start "0"  to the end of  the string

let sliceToTheEnd =string.slice(0)
console.log ('slice',sliceToTheEnd) 

/// cuts until reaches the index
let sliceFromStart =string.slice(undefined,string.length)


console.log ('slice',sliceFromStart) 


//replace
    /* returns new keeping the original */


console.log('replace',string.replace('this','that')) // that ..

console.log(string) // this ..


//trim
/* removes spaces from the start and the end */
    

    console.log('trim',string.trim())


//split
    /* splits every time it finds the sympole ' ' -space-
    returns an array with the splitted items 
    */
   let limit =2 // number of trims

    console.log('split',string.split(' ',limit))


//join
    /* to combine the array to a string again with optional delimiter*/

    console.log('join',string.split(' ').join('----'))

