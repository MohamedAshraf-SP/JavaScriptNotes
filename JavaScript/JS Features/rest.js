///**rest is the opposite of spread */

//old way to get multi args of a function
function test() {
    let arr = []
    console.log(arguments)
    for (Element of arguments) {
        arr.push(Element)
    }
    return arr
}

// console.log(test('mohaed','mohaed','mohaed','mohaed'))


// "rest" (...) to pass paramters

function test2(x, ...y) {

    let arr = y  // y is an collection of elements all after x is added to y

    console.log('y', y)
    return arr
}
console.log(test2('x', ...'mohaed'))
console.log(test2('x', ...'mohaed', 'mohaed;', 'mohaed'))


