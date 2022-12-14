


let arr = [1, 2, 'h', 'r']

// filter returns the elements which satisfies the condition


let ans = arr.filter(element => { return Number.isInteger(element) })
let ans1 = arr.filter(element => { return typeof element == "number" })
let ans2 = arr.filter(element => element > 1)
let ans3 = arr.filter(element => true)
let ans4 = arr.filter(element => false)


//console.log(ans4)


let x ='x3fx'

console.log(x.slice(1))

