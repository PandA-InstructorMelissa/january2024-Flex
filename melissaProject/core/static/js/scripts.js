console.log('js connected')
var p1Sub = false
var p2Sub = false

function p1(choice) {
    console.log(choice)
    var form  = document.getElementById('p1Choice')
    var res = document.getElementById('p1Chosen')
    form.value = choice
    res.innerText = 'Choice Locked In'
    p1Sub = true
    return p1Sub
}

function p2(choice) {
    console.log(choice)
    var form  = document.getElementById('p2Choice')
    var res = document.getElementById('p2Chosen')
    form.value = choice
    res.innerText = 'Choice Locked In'
    p2Sub =  true
    return p2Sub
}

function run() {
    if(p1Sub == true && p2Sub == true) {
        console.log('choices submitted')
        alert('Scoring')
    }
    if(p1Sub == false || p2Sub == false) {
        console.log('Waiting on player input')
        alert("Waiting for player input")
    }
}