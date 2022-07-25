// Iteration 1: Names and Input
//
let hacker1 = prompt("What is the driver's name?");
console.log(`The driver's name is ${hacker1}`)
let hacker2 = ("What is the navigator's name?");
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

hackerUpper = hacker1.toUpperCase
hackerUpperSpaced = ""
space = " "
for (i = 0; i < hackerUpper.length; i++) {
    console.log(hackerUpperSpaced += hackerUpper[i] + space)
}


let reverseHacker2 = ""

for (let i = hacker2.length - 1; i >= 0; i--) {
    console.log(reverseHacker2 += hacker2[i]);  
}
    

