
//decleration

let obj = {
    name: 'value',
    age: 3
}

let obj1 = {
    name: 'value',
    '5age': 3,
    arr: [1, 1, 1, 2],
    obj: {
        frist: 1,
        second: 2
    }
}

// getting an element

obj.age
console.log(obj1.arr)
console.log(obj.age)
console.log('special', obj1["5age"])
console.table( obj1)

// logging the object itself
console.table(obj)

/**
let obj={}
let x ='hi'
obj[x]=[]
obj[x].unshift('first')

console.log(obj)

 */
