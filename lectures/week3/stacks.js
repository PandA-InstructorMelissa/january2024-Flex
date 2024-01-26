// A Stack is an ordered collection of items that follow the Last In First Out (LIFO) principle

let stackOfDishes = []

let theDishes = "Grandmas Dishes"

console.log('The Dishes before Stacking', theDishes)

for(var d = 0; d < theDishes.length; d++) {
    stackOfDishes.push(theDishes[d])
}

console.log('The Dishes after Stacking', stackOfDishes)

let table = ''

let len = stackOfDishes.length

for(var d = 0; d < len; d++) {
    table += stackOfDishes.pop()
}

console.log("Grandma asked us to set the table... we did carefully", table)


// Check to see if theDishes and table are a palindrome

// if (table === theDishes) {
//     console.log(theDishes + " is a palindrome")
// }
// else {
//     console.log(theDishes + " is NOT a palindrome")
// }

// Put the dishes into the trunk for safe keeping.... clean them first

var Trunk = function() {
    this.count = 0
    this.storage = {}

    // Adds dish to trunk
    this.push = function(value) {
        this.storage[this.count] = value
        this.count++
        console.log(this.storage, this.count)
    }

    // Removes and returns the number of items in the trunk
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }
      else {
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
      }
    }
    
//   the number of items in the trunk
    this.size = function() {
        return this.count;
    }
    
    // Returns the last item added from the trunk
    this.peek = function() {
        return this.storage[this.count-1];
    }
}

var grandmasTrunk = new Trunk()
grandmasTrunk.push(theDishes)