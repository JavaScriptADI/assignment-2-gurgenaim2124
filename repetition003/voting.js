// taks 4 :  Voting Eligibility


let input = prompt("Enter your age")
let user = 18 

let num = Number(input)
let someAge = user - num

if (num < user){
    console.log(`you can vote in ${someAge} years `)
} else if (num >= user) {
    console.log("you can vote ")
}

