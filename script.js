console.log("HEY RIYA")
var a = 10
var b = 12.33
var c = "hii"
var d = true
console.log(a, b, c, d)
var e = "10"
if (a == e) {
    console.log("Buchiiii")
} else {
    console.log("Boooo")
}

if (a === e) {
    console.log("Buchiii")
} else {
    console.log("Boooo")
}

if (a != b) {
    console.log("Buchiii")
} else {
    console.log("Booo")
}

if (a !== e) {
    console.log("Buchiii")
} else {
    console.log("Boooo")
}

for (let i = 0; i < 11; i++) {
    console.log(i)
}

var v = 1000

if ((v % 400 == 0) || (v % 4 == 0 && v % 100 != 0)) {
    console.log("Hurrayyyy")
} else {
    console.log("NOOOOOOOO")
}

var g = 7
var i = true
for (let h = 2; h <= Math.sqrt(g); h++) {
    if (g % h == 0) {
        i = false
    }
}
console.log(i)