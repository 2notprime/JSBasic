console.log("Hello World!".toLocaleUpperCase())

let a = 5
let b = 6
let c = 3.1
let d = `5`

// Ngoại trừ +, thì các phép khác sẽ cố convert string => number trước khi thực hiện
console.log(a + b, a + c, a + d, a * d, a - d)
console.log(a == d, a === d)

// Convert string to number

let e = "10"
console.log(typeof e, typeof parseInt(e), parseInt(e))
console.log(typeof e, typeof Number(e), Number(e))
console.log(typeof e, typeof +e, +e)