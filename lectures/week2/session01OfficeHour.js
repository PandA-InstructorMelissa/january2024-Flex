var array = [3,5,1,8,-1,9,-2]
// array.sort()
// console.log(array)

// loop to go through whole array
// need new array to place numbers once in order
// var to check value 
// way to go back through the original array if needed

function sorting(arr) {
    var len = arr.length
    var temp = 0
    function loop(arr) {
        var change = false
        for(var i = 0; i < len; i++) {
            if(arr[i] > arr[i+1]) { // if current index value is greater than next index value is 5 > 1
                temp = arr[i] // temp = current index value temp = 5
                arr[i] = arr[i+1] // current index = next index value index 1 now = 1
                arr[i+1] = temp // next index = temp index 2 now = 5
                change = true
            } else {
                change = false
            }
        }
        return change
    }
    if(change = true) {
        loop(arr)
    }
    console.log(array)
}
sorting(array)