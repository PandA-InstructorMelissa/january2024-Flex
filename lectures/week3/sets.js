// A JavaScript Set is a collection of unique values. Each value can only occur once in a Set. A Set can hold any value of any data type.

function Coins() {
    // Box of coins
    var coinBox = []

    // coinBox = [1978, 1980, 1981, 1978, 1977]

    // Check our box to see if the year is already there
    this.has = function(e) {
        return (coinBox.indexOf(e) !== -1)
            // indexOf means returns the 1st occurrence of e or -1 if not there
    }
    this.values = function() {
        return coinBox
    }
    this.add = function(e) {
        if(!this.has(e)) {
            coinBox.push(e)
            return true
        }
        return false
    }

    //   compare 2 coins set to see what they have in common
    this.intersect = function(box02) {
        var common = new Coins()  // creating a new box of coins called common
        var box01 = this.values()
        box01.forEach(function(e) { // looping through box01
            if(box02.has(e)) { // if box02 has the current value of box01
                common.add(e) // add to new box called common
            }
        })
        return common
    }

    this.diff = function(coll02) {
        var diff = new Coins()
        var coll01 = this.values()
        coll01.forEach(function(e) {
            if(!coll02.has(e)) {
            diff.add(e)
            }
        })
        return diff
    }
}

var pennies = new Coins()
var nickles = new Coins()
var dimes = new Coins()
var quarters = new Coins()
console.log(pennies.has(1980))
console.log(pennies.values())
pennies.add(1978)
pennies.add(1980)
pennies.add(1981)
pennies.add(1978)
pennies.add(2000)
nickles.add(1978)
quarters.add(2000)
dimes.add(2001)
console.log(pennies.values())
console.log(pennies.intersect(quarters).values())
console.log(nickles.intersect(dimes).values())
console.log(pennies.diff(quarters).values())
console.log(nickles.diff(dimes).values())