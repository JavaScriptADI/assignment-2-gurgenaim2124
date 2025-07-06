// task 2 : Grade Evaluator

let input = prompt("Enter your score")
let num = Number(input)

if (num >= 90 && num <= 100){
    console.log("You got an A")
}else if ( num >= 80 && num < 90){
    console.log("You got a B")
}else if ( num >=70 && num < 80){
    console.log("You got a C")
}else if (num >=60 && num < 70){
    console.log("You got a D")
}else if (num < 60){
    console.log("you failed")
}else {
    console.log("no result ")
}