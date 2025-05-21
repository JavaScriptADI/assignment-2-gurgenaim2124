// Task 1:Even and Odd Checker


let number = 7;
number = prompt("Enter a number");

if (number %2 ===0){
    console.log("That number is even")
}else{
    console.log("That number is odd")
}     

// task 2: grade evaluator

let score = prompt("Enter your score");
score = parseInt(score);



if (score >=90 && score <=100){
    console.log("You got a A!")
}else if (score >=80 && score <=89){
    console.log("You got a B!")
}else if (score >=70 && score <=79){
    console.log("You got a C!")
}else if (score >=60 && score <=69){
    console.log("You got a D!")
}else if (score < 60){
    console.log("You got a F!")
}

//task 3: compare two numbers

let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");

num1 = parseInt(num1)
num2 = parseInt(num2)

if (num1>num2){
    console.log("First number is greater")
}else if (num1<num2){
    console.log("Second number is greater")
}else{
    console.log("Equal")
}

//task 4: Voting eligibility

let age = prompt("Enter your age");
age = parseInt(age);

let yearsLeft = 18 - age;

if(age >= 18){
    console.log("You can vote")
}else if (yearsLeft){
    console.log("you can vote in " + yearsLeft + " years")
}


// task 5 : Basic calculator with operation choice

let num3 = prompt("Enter first number for calculation ");
let num4 = prompt("Enter second number for calculation");
let operation = prompt("Choose operation (+ - * /):");

num3 = parseFloat(num3);
num4 = parseFloat(num4);

if (operation === "+"){
     console.log(num3 + num4 )
}else if (operation === "-"){
    console.log(num3 - num4)
}else if ( operation === "*"){
    console.log(num3 * num4)
}else if ( operation === "/"){
    console.log(num3 / num4)
}
    
