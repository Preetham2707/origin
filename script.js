//Day2-------------------------------------

// console.log("HEY RIYA")
// var a = 10
// var b = 12.33
// var c = "hii"
// var d = true
// console.log(a, b, c, d)
// var e = "10"
// if (a == e) {
//     console.log("Buchiiii")
// } else {
//     console.log("Boooo")
// }

// if (a === e) {
//     console.log("Buchiii")
// } else {
//     console.log("Boooo")
// }

// if (a != b) {
//     console.log("Buchiii")
// } else {
//     console.log("Booo")
// }

// if (a !== e) {
//     console.log("Buchiii")
// } else {
//     console.log("Boooo")
// }

// for (let i = 0; i < 11; i++) {
//     console.log(i)
// }

// var v = 1000

// if ((v % 400 == 0) || (v % 4 == 0 && v % 100 != 0)) {
//     console.log("Hurrayyyy")
// } else {
//     console.log("NOOOOOOOO")
// }

// var g = 7
// var i = true
// for (let h = 2; h <= Math.sqrt(g); h++) {
//     if (g % h == 0) {
//         i = false
//     }
// }
// console.log(i)
//Day3--------------------------------------------
// var data1 = [1, 2, 3]
// var data2 = [4, 5, 6]
// console.log(data1.length)
// data1.push(11)
// console.log(data1)
// data1.unshift(22)
// console.log(data1)
// data1.pop(1)
// console.log(data1)
// data1.pop()
// console.log(data1)
// data2.shift(88)
// console.log(data2)
// data2.shift(99)
// console.log(data2)
// var data = [1000, ...data1, 2000, ...data2]
// console.log(data)

// var myObj = {
//     id: 1,
//     name: "riya",
//     age: 21
// }
// console.log(myObj.age)

// var obj = [
//     {
//         id: 1,
//         name: "riya",
//         marks: [10, 20, 30]
//     },
//     {
//         id: 89,
//         name: "rithvik",
//         marks: [40, 50, 70]
//     },
//     {
//         id: 30,
//         name: "raz",
//         marks: [43, 55, 77]
//     }
// ]
// console.log(obj[0].marks[1])


// //Declaration Function
// function add(a, b) {
//     console.log(a + b)
// }

// add(3, 5)

// //Expression Function
// const myFun1 = function add(a, b) {   //from function it is Anonymous Function
//     console.log(a - b)
// }

// add(3, 5)

// myFun1(3, 5)


// //Arrow Function
// const myFun2 = (a, b) => {
//     console.log(a * b)
// }

// //Arrow Function Bullet
// const myFun3 = (a, b) => a / b

//-------------------Day 4-------------------------

// let first = document.getElementById('first')
// console.log(first);

// first.innerText = "viiii"

var b=true
const change = ()=>{
    let display = document.getElementsByClassName("display")
    display[0].innerHTML = 'BYE'
}

const fun = ()=> {
    let vr = document.getElementById("cha")
    vr.innerText = "hii"
}

