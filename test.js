const {add , multi} = require("./app.js")

let pass=0
let fail=0

let r1= add(25 ,30)
let r2= add(10,20)
let r3= add(30,30)

if (r1 === 55) {
    console.log('test pass hua')
    pass++
} else {
    console.log('test fail hau')
    fail++
}


if (r2 === 30) {
    console.log('test pass hua')
    pass++
} else {
    console.log('test fail hau')
    fail++
}

if (r3 === 60) {
    console.log('test pass hua')
    pass++
} else {
    console.log('test fail hau')
    fail++
}



// multi


let r4=multi(25,2)
let r5=multi(2,2)
let r6=multi(5,2)

if (r4 === 50) {
    console.log('test pass hua')
    pass++
} else {
    console.log('test fail hau')
    fail++
}



if (r5 === 4) {
    console.log('test pass hua')
    pass++
} else {
    console.log('test fail hau')
    fail++
}



if (r6 === 10) {
    console.log(  'r6: test pass hua')
    pass++
} else {
    console.log(' r6:test fail hau')
    fail++
}



console.log('result are here')
console.log('pass_tests' , pass )
console.log('fail_tests' , fail )

