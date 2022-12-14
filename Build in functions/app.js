// let string ='121'

// function isIsogram(str){
// if(str=='')
//     return true
// str=str.toLowerCase()
// // for(let index=0;index<str.length;index++){
// //     for(let start=index+1;start<str.length;start++){
// //         if(str[index]==str[start])
// //             return false
// //     }
// // }
// return new Set(str.toUpperCase()).size == str.length;
// //return true
    
// }


// let x;
// var y;
// const e=true;


// let foo={one:1,two:2}

// var{one,two}=foo

// // console.log (one,two)

// r=3
 
// console.log(r)

// let r=5


//   //console.log (isIsogram(string))

//  // console.log (isIsogram("Dermatoglyphics"))//, true 
// //   console.log (isIsogram("isogram"))//, true 
// //   console.log (isIsogram("aba"))//, false, "same chars may not be adjacent" 
// //   console.log (isIsogram("moOse"))//, false, "same chars may not be same case" 
// //   console.log (isIsogram("isIsogram"))//, false 
// //   console.log (isIsogram(""))//, true, "an empty string is a valid isogram"

// console.log()
// const fs = require('fs')

// let x = fs.readFileSync('filter.js','utf-8')

// //console.log(x)

// let y= fs.writeFileSync('auto.js',x)

// console.log("/n \n ")


// if (-1){
//     console.log(3)
// }else if(2){
//     console.log(2)
// }



// let arr=new Array(1,2,2,3,3,3)
// console.table(arr[4])

// arr[arr.length+44]=3

// console.log (100n)



// const fs =require('fs/promises')
// (async()=>{
// const watcher= fs.watch('./')

// for await(const event of watcher){
//     console.log(event)
// }})()


// let temp = Number.NEGATIVE_INFINITY




// var maxSubArray = function(nums) {
//     let total =Number.NEGATIVE_INFINITY
//     let temp = Number.NEGATIVE_INFINITY
//     for(let index=0;index <nums.length; index ++ )
//     {   
//         let tempTotal=nums[index]
//      //   console.log(nums.length)
//         if(nums.length<=1){
//             temp =tempTotal
//             break
//         }
//         for(ptr=index+1;ptr <nums.length; ptr ++){
//                 tempTotal+=nums[ptr]
//                 temp = Math.max(temp,tempTotal)
//         }
//         total= Math.max(total,temp)
//     }
//     return total
// };

// console.log(maxSubArray([1]))

// var maxSubArray = function(nums) {
//     let finalTotal =Number.NEGATIVE_INFINITY
//     let cycleTotal = Number.NEGATIVE_INFINITY
//     for(let index=0;index <nums.length; index ++ )
//     {   
//         let sum=nums[index]
//       //  cycleTotal = Math.max(cycleTotal,sum)
//         // console.log(nums.length)
//         if(nums.length<=1){
//              finalTotal= Math.max(finalTotal,sum)
//             break
//         }
//         if(nums[index+1]==undefined){
//              finalTotal= Math.max(finalTotal,sum)
//              break
//         }
        
//         for(ptr=index+1;ptr <nums.length; ptr ++){
//                cycleTotal = Math.max(cycleTotal,sum)
//                 sum+=nums[ptr]
//                 cycleTotal = Math.max(cycleTotal,sum)
                
//         }

//         finalTotal= Math.max(finalTotal,cycleTotal)
//     }
//     return finalTotal
// };

// console.log(maxSubArray([-1,-2]))


// /////////////
// var merge = function(nums1, m, nums2, n) {

//     let ptr1=0;
//     let ptr2=0;
//     let result=[]
//     nums1=nums1.filter(ele=>ele!=0)
    
//     nums2=nums2.filter(ele=>ele!=0)
    
//     if(!nums1.length>nums2.length){
//         let temp=nums1
//         nums1=nums2
//         nums2=temp
//     }
//     //let count= Math.max(nums1.length,nums2.length)
    
//         for (let i=0;i<=nums2.length+nums1.length;i++){
           
//              if(ptr2>=nums2.length){
//                 result.concat(nums1.slice(i))
//                 break
//             // 
//             }
//             if(nums1[ptr1]<nums2[ptr2]){
//                 result.push(nums1[ptr1])
//                 ptr1++
//             }else{
//                 result.push(nums2[ptr2])
//                 ptr2++
//             }
            
    
//             console.log("res",result)
//             console.log("arr1:",nums1)
//             console.log("arr2:",nums2)
//         }
//             nums1=result
//           console.log("RES:::",nums1)
//           return nums1
     
//     }
 
let nums1 = [1,2,3,0,0,0] 
let  m = 3
let  nums2 = [2,5,6]
let  n = 3

var merge = function(nums1, m, nums2, n) {
    let ptr2=0
    let i=0
    while(i<m){
       
        console.log(i,nums1,'\n',ptr2,nums2)
        if(nums1[i]>nums2[ptr2]){
            nums1.splice(i,0,nums2[ptr2])
            nums1.pop()
            ptr2++
            
        }else{
            i++
        }
        
     
    }
    //console.log(nums2.slice(ptr2))
    nums1=nums1.filter(ele=>ele!=0)
    nums1=nums1.concat(nums2.slice(ptr2))
    console.log(nums1)
    
};
merge(nums1, m, nums2, n)