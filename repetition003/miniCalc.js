//Task 5: Basic Calculator with Operation Choice

let num1 = prompt("Enter first number")
let num2 = prompt("Enter second number")
let operations = prompt(`Choose operation (+ - * /)`)

num1 = parseInt(num1)
num2 = parseInt(num2)

if(operations === "+") {
    console.log(num1 + num2)
}else if (operations === "-"){
    console.log(num1 - num2)
} else if (operations === "*"){
    console.log(num1 * num2)
}else if (operations === "/" ) {
    console.log(num1 / num2 )
}else{
    console.log("Some mistake")
}