

let mp =new Map(
)

mp.set('key','value')
mp.set('key',obj={
    keyname:"overwritten"      // دي غيرت قيمه ال انا ضفتها ف الاول مضافتش واحده جديده
})
mp.set('key1',obj={
    keyname:"new"      // دي مغيرتش قيمه ال انا ضفتها ف الاول ضافت واحده جديده
})

console.log("delete",mp.set('todelete',"delete"))  //returns the new map
// console.log(mp)
mp.delete('todelete')   //true , false

// console.log(mp)



mp.clear()//  clear all items from the map
mp.has('an item')  // true or false



//loooooooooping 
    //1- iterator
        let itr=mp.values()

        let c=0
        while(c<=mp.size){
            let x=itr.next()
            console.log(x)
           
            c++
        }
        //2- for of

        for( item of mp){
            console.log(item)
        }
    //3- .foreach()

        mp.forEach((val,key)=>{
            console.log (val,key)
        })