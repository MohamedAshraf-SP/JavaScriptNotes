// using for loop

let usingFor=(n)=>{
let ans =[]
let sum =0
let lastlast =1
let last=0

for(let i =1;i<n; i++)
{   
    
    sum= last+lastlast
    ans.push(sum)
    console.log(last , lastlast,sum)
    lastlast=last
    last=sum
}
return ans
}

// console.log(usingFor(20))


function usingRecursion(n) {
    if (n <= 1) {
        return n
    }

    // console.groupCollapsed(n)
    // console.log('n-1,n-2',n-1,n-2)
    let sum = usingRecursion(n - 1) + usingRecursion(n - 2)
    // console.log('sum',sum)
    return sum
}
usingRecursion(4)
// console.log(usingRecersive(4))



//better way

let betterRecursion=(n,last=1 ,lastlast=1)=>{
if(n==1){
    return last
}
if(n==0){
    return lastlast
}
    return betterRecursion(n-1,lastlast,lastlast+last)
}

console.log(betterRecursion(7,1,1
    ))




    
    