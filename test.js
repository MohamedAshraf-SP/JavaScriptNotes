// function ArrayChallenge(num) { 

//     let count=0
//     let item =null
//     let ans=""
//       for(let i=0; i <num.length; i++){
//         count=1
//         item=num[i]
//           while(item==num[count+i]){
//             count++
//             i++
//           }
       
//           ans=ans.concat(`${count}${item}`)
          
   
    
//       } 

//       return ans; 
    
//     }

// //     ArrayChallenge("1211")


// function StringChallenge(str) { 

//     let count=0
//     let ncount=0
//     let ans='-'
    

//     for(let i=str.length-1;i>=0;i--)
//     {
//         // console.log(ans,i)
//         count++
      
//       if(str[i]=='='){
//         console.log('=',count-1)
//         count=0
        
//       ans= `${count}`.concat(ans)
//        ans= '='.concat(ans)
//        ncount=0
//        while(str[i]!=' '||i==0)
//       {
//        ncount++
//         i--
//         }
//         ans=`${ncount}`.concat(ans)
//         ans= ' '.concat(ans)
//       }
      
     
      
    
//     }

//       // code goes here  
//       return ans; 
    

//     }


    // console.log(StringChallenge("=== a=3dc"))

//    let x = btoa(',,,')
//    console.log(x)

var M = [
     [1, 2, 3, 4, 5], 
     [6, 7, 8, 9, 10],
     [11, 12, 13, 14, 15],
     [16, 17, 18, 19, 20]
]

// 0,0 => 0,l
// 1,l => l,l
// l,l => l,0

// 1,1    => 1,l-1
// 1,l-1  => l-1,l-1
// l,l => l,0

// let spr =(m)=>{

//     let ts ={r:0,c:0}
//     let te ={r:0,c:m[0].length-1}
//     let bs ={r:m.length-1,c:0}
//     let be ={r:m.length-1,c:m[0].length-1}
//     let count=0
//     console.log(ts.c<te.c&&bs.c<be.c&&ts.r<be.r&&te.r<be.r)

//     while(ts.c<te.c&&bs.c<be.c&&ts.r<be.r&&te.r<be.r){
//         for(let i=ts.c;i<=te.c;i++){
//             console.log(m[ts.r][i])
//             count++
//         }
//         ts.r++
//         te.r++
//         for(let i=te.r;i<=be.r;i++){
//             console.log(m[i][te.c])
//             count++
//             // console.log(i,te.c)
//         }
//         te.c--
//         be.c--
//         for(let i=be.c;i>=bs.c;i--){
//             console.log(m[be.r][i])
//             count++
//         }
//         be.r--
//         bs.r--
//         for(let i=bs.r;i>=ts.r;i--){
//             console.log(m[i][ts.c])
//             count++
//             // console.log(i,te.c)
//         }
//         ts.c++
//         bs.c++
        

       
//     }

//     console.log(count)
// }


// function f(x=2,y=3){
//     return x**y
// }

// console.log(f(undefined,2))


// متتاليه فابولتشي

// 