/* Write a program to claculate factorial of a number using reduce and using for loops methods in JavaScript. */



// USING REDUCE METHOD:
/*
let n = parseInt(prompt("Enter the number, which you want to find the factorial of:"));
let arr = [];
for (let i = n; i >=  1; i--) {
    arr.push(i)
    // console.log(i)
}
console.log(arr)

let newArr = arr.reduce((element,value)=>{
  return  element*value
})
console.log("The factorial of your entered number is:",newArr)
*/


// USING FOR LOOP:

let n = parseInt(prompt("Enter the number, which you want to find the factorial of:"));
let = factorial = 1;

for (let i = n; i >= 1 ; i--) {
    // console.log(i)
    // factorial*=i
    factorial = factorial * i
    
}
console.log(`The factorial of ${n} is:`, factorial)  

