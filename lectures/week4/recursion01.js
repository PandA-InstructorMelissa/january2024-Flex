// What is recursion?  

var count = 0

function magicalTask(num) {
    count += 1
    if (num <= 0) {
        return "Magic!";
    } else {
      // The magical mirror reflects a smaller version of the task
        return magicalTask(num - 1);
    }
}

  // Let's cast the spell!
// console.log(magicalTask(5));
// console.log(count)


const sadDay = () => {
    console.log("Melissa is sad that the class is almost over")
    sadDay()
}

// sadDay()

const gettingClose = (num) => {
    // console.log(num)
    console.log("The countdown to Melissa's last day")
    if(num > 0) {
        console.log("Melissa still has time with her students")
    } else {
        console.log("The time has come to say goodby")
        return 
    }
    num--
    gettingClose(num)
}
// gettingClose(3)


// Create a function that can look through an array of any dimension, that is a list that could have any number of lists in it, and will return the sum of all values within.
// Using this five dimensional array should return 80
let office = [
    3,
    [1, 2, 3, 4],
    [
        [1, 2, 3, 4],
        [1, 2, 3, 4, 5],
        [
            [1, 2, 3],
            [1, 2, 3, 4, [1, 2, 3, 4]],
        ]
    ],
    [3, 4, 5],
    1,
    3,
]

// just looking at the floors won't give us the human count
// we need to check each room on each floor too
// so we need to say if current floor has a room go into it and count (but also if that room has rooms go into each of those too)


let sum = 0
// for(i = 0; i < office.length; i++) {
//     sum = sum+office[i]
//     console.log(office[i])
//     console.log(sum)
// }

function swatTeamAway(building) {
    for(var i = 0; i < building.length; i++) {
        if(!Array.isArray(building[i])) {
            sum = sum + building[i]
        } else {
            swatTeamAway(building[i])
        }
    }
    console.log(sum)
    return sum
}
swatTeamAway(office)