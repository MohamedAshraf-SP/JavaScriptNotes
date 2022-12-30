// for each
/*
iterates on every element 
- has no return
*/

let arr = [3, 4, 5, 6, 7, 8, 'X']

let feArr = arr.forEach((value, index, arr) => {
    return value * 2
})

console.log(
    feArr)//undefined
console.log(
    arr)



//map
// returns new array keeping the original

let mparr = arr.map((value, index, arr) => {
    return value * 2
})

console.log(
    arr)

console.log(
    mparr)


// find 
/* returns the FIRST match only*/

console.log(
    'find', arr.find(x => (
        x > 1 ? x : 1
    )))

//filter

console.log(
    'filter', arr.filter((val, index, arr) => (
        val > 1 ? val : 1
    )))


//every
/** return true if all items match the condition else false */

console.log(
    'EVERY',
    arr.every(item => typeof (item) == "number"))


//some

/** return true if 'at least one item' match the condition else false */

console.log(
    'SOME',
    arr.some(item => typeof (item) == "number"))




//Reduce

/* the return assigned to the first parameter*/


arr = [3, 4, 5, 6, 7, 8]
console.log(arr.reduce((currentTotal, val) => {
    currentTotal += val
    return currentTotal
}))


console.log(arr.reduce((currentMax, val) => {
    currentMax = currentMax > val ? currentMax : val
    return currentMax
}))

console.log(arr.reduce((currentMax, val) => {
    return currentMax > val ? currentMax : val  // if val greater ? val assigned to current max

}))
let initialValue=0
// THE initial value if i want to compare the array with outside value
arr.reduce(() => { }, initialValue)



let vote =['y','n','y','n','y','y','n','y','n','y']

console.log(vote.reduce((votes,curVote)=>{
votes[curVote]=(votes[curVote]||0)+1
return votes

},{}))

console.log(vote.concat(arr))
Math.floor()
Math

[1,8,6,2,5,4,8,3,7].reduce((n,r))




