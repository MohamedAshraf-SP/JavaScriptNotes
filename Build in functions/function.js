//
// function declare
/*
function func() {
    // code goes here
    console.log("this is my function'")

    return 0
}

//
//call
let x = "d"
x.ind

// func().
console.log("Xxxxxxxxxxxxxxxxx")



/////task 1
function isValid(user, pass) {

    //* includes return true or false

    //return !(pass.length <= 8||pass.includes(" ")||pass.includes(user)) 

    //* indexof retrun the index or -1 if not exist
    return !(pass.length <= 8||pass.indexOf(" ")!=-1||pass.indexOf(user)!=-1) 
}
console.log(isValid("xx", "e"))

///////task 2

function avg(arr){
return Math.a(arr)
}
console.log(avg([3,4,4,5]))
*/

/////scope 
/*
 let vr =' this is my outer var'
    console.log('before',vr)
    function f(){
        let vr ='this is my inner var'
        console.log('in',vr)
    }
    f(

    )
    console.log('after',vr)
*/

// block scope $$not$$$ in function case
/*
    // var  ( if , for ,)
        if(true)
        {
            var x='inner'
        }
        console.log(x)  //'inner'

    //let , const
        if(true)
        {
            let z='inner'
        }
        console.log(z)  //'ReferenceError: z is not defined'
*/



///function expressions
        // array of functions
/*
        let arr=[()=>{console.log('1')},()=>{console.log('2')},()=>{console.log('3')},()=>{console.log('4')}]

        arr.forEach((val)=>{
            console.log(val.toString())
            val.call()
            // val.bind()
            val.apply()
            val()
        })

        let obj={
            frist:(x)={}
        }
*/
    

///function as return


        //sucess test task

             function markRange(from,to){
               
                return function(mark){
                    return (mark>=from && mark<=to)     ///& return 0,1 ......... && returns true, false
                }
            }

            let fails =markRange(0,49)
            let sucess =markRange(50,Infinity)
            let excellent =markRange(85,100)
            let vgood =markRange(75,84)

           console.log( excellent(100))