// return array with the numbers in order

// given array [-1, 7, 3]  result array should be [-1, 3, 7]
// look in array see if index 0 is less than or greater than index 1 and so on and push the smaller number into a new array
// need for loop
// if statement
// temparry

let arr01 = [-1,7,3,8,-24]

let temp = []

let curr = arr01[0]
function orderArr() {
    for(var i = 0; i < arr01.length; i++) {
        console.log('old array',arr01)
        console.log(arr01[i]) // current value 
        // curr = arr01[i] // setting curr as current value
        if(arr01[i] <= curr) { // if curr is less than current value
            temp.push(arr01[i]) // push to temp
            // console.log('temp arr',temp)
            // console.log(arr01[i])
            arr01.splice(i, 1)  // remove pushed value from old array
        }
        curr = arr01[i] // update curr
        
        console.log('old array',arr01)
        console.log('temp arr',temp)
    }
    // after for loop finishes check both arrays for length
    if(arr01.length == 0) { // if old array is empty return => thus ending function
        return
    }
    else { // if not empty but old array and temp not equal in length return function
        orderArr()
    }
}
orderArr()