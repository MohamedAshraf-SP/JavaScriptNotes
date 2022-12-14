let string ='this is my string'

/// cuts from start "5" to end-1 "7-1=6"
let is=string.slice(5,7)
console.log (is) 

/// cuts from start "0"  to the end of  the string

let sliceToTheEnd =string.slice(0)
console.log (sliceToTheEnd) 

/// cuts until reaches the index
let sliceFromStart =string.slice(undefined,string.length)


console.log (sliceFromStart) 