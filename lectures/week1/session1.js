// 1. What are the 3 ways to declare something in js
var a = 1
let b = 2
const c = 3

// 2. Which ones can change and which ones can not
var a = 2  // can change - is mutable
a = 10
// let b = 4 // can change - is mutable however they can not be redeclared
b = 4
// const c = 6  // can not change = is immutable



// 3. What are some data types
var arr = [] // Array
var d = 'string' // String
var d = "string"
var e = true // Boolean
var e = false
function functionName() {} // set of instructions that can be executed by one command // Function
var obj = {'key': 'value'} // Object
var f = 1 // Integer

// 4. Create an array and print it's contents
// 5. Add an item to the array
// 6. Remove an item from the array
// 7. Add to the beginning of the array 
// 8. Remove from the beginning of the array
// push, pop, shift, unshift, splice

let newArr = []
// console.log('my Array', newArr)
newArr.push("Keith")
// console.log('my Array', newArr)
newArr.push("Corey")
// console.log('my Array', newArr)
newArr.push("Bill Bob")
// console.log('my Array', newArr)
newArr.pop()
// console.log('my Array', newArr)
newArr.unshift("Melissa")
// console.log('my Array', newArr)
newArr.unshift("Replacement Instructor")
// console.log('my Array', newArr)
newArr.shift()
// console.log('my Array', newArr)
newArr.splice(3,0,"Lydia")
// console.log('my Array', newArr)
newArr.splice(2,0, "Replacement Instructor")
// console.log('my Array', newArr)
newArr.splice(2,1)
// console.log('my Array', newArr)


// arr.splice(startAtIndex, amountToDelete, whatToInsert)

// 9. What is the length of the array?
// console.log(newArr.length)

// 10. Create an object

// 11. Create an objects with multiple key/value pairs plus an array containing objects

// Q 12-14
var duck = {
    bill: true,
    feet: "webbed",
    featherColors: [
        "yellow",
        "Brown",
        "Blue",
        "Green"
    ],
    famousDucks: [
        {name: "Scrooge McDuck", company: "Disney"},
        {name: "Daffy Duck", company: "Warner Brothers"},
        {name: "Darkwing Duck", company: "Disney"},
        {name: "Psyduck", company: "Pokemon"}
    ]
}

// 12. Print out the Names of the Famous Ducks in the provided object
// console.log(famousDucks.name)
// console.log(famousDucks.name[0])
// console.log(duck.famousDucks.name)
// console.log(duck.famousDucks.name[0])
// console.log(duck.famousDucks)
// console.log(duck.famousDucks[0].name)

// for(var i = 0; i < duck.famousDucks.length; i++) {
//     console.log(duck.famousDucks[i].company)
// }

// 13. Print out the duck object

// 14. What data type is bill? 
console.log(typeof duck.bill)
console.log(typeof duck.feet)
console.log(typeof duck.featherColors)
console.log(typeof duck.famousDucks)
console.log(typeof newArr)

// 15 Add an item to the end of an array without push. :)

let newArray = ["a", "b", "c", "d", "e", "f"]
console.log('newArray', newArray)
newArray[newArray.length] = "g"
console.log('newArray', newArray)

let newerArray = [...newArray, "h"]  // spread
console.log('newArray', newerArray)


const addItem = (array, item) => {
    array[array.length] = item
}

const whileAddItem = (array, item) => {
    length = 0;
    while (array[length]) {
        length++;
    }
    array[length] = item;
}