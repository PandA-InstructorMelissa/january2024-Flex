// Strings


// 1. Pull the current date and time
// console.log('corey', time)
// console.log('erics version', datetime now)
// console.log('jesse',timestamp)
let currentDate = new Date()
console.log('mine', currentDate)


// 3. console.log the time only
// console.log('keith',currentTime)
console.log('eric', currentDate.getTime())
// console.log('jesse', currentDate.getTime(now))
// console.log('mine01', currentDate.splice(11,0))

const now = new Date();

const currentDateTime = now.toLocaleString();
console.log(currentDateTime);

const time01 = currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();
console.log('mine02', time01)

// 4. console.log the date only
console.log('corey', currentDate.getDate())
let date = currentDate.toLocaleDateString()
console.log(date)

// 5a. What time zone is displaying?
console.log(currentDate.toString())

// 5b. Change to the different time zones (ET, CT, MT, PT)

let est = currentDate.toLocaleTimeString('en-US', { timeZone: 'America/New_York'})
let cst = currentDate.toLocaleTimeString('en-US', { timeZone: 'America/Chicago'})
let mst = currentDate.toLocaleTimeString('en-US', { timeZone: 'America/Denver'})
let pst = currentDate.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles'})
console.log(est, cst, mst, pst)
console.log(currentDate.getTimezoneOffset());

// Using the provided HTML file create functions to display things on the page (you can not edit the html document) and have a console.log for each

// 6. Display date and time
let dateTime = document.getElementById('dateTime')
dateTime.innerHTML = currentDate

// 7a. Display time only
$(document).ready(function() {
    $('#date').text(date)
    $('#time').text(time01)
    $('#date').css( {
        color: 'red'
    })
})
// 7b. Include the current time zone in the display

// 8. Display date only

// 9. Display time only in each time zone listed

// Bonus questions

// 1. Are there are differences in how the html displays and its corresponding console.log prints?

// 2. Are there other ways we can change what is displayed?






// Arrays


// 1. Max, Min, Average Given an array, print the max, min and average values for that array.

// 2. Given an array that could contain indexes of arrays, determine the amount of numbers in all indexes. Example: lengthNested([4,[],8,[9,6,3],7]) returns 6. Do not consider there being a third level of nesting (something such as [11,[[6]]]).

// 3. Same as above, but do not count empty indexes. [6, 4, , 8] should return 3, not 4.