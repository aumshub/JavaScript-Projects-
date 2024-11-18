// faulty calculator:


let random = Math.random();
console.log(random);

let a =parseInt(prompt("Enter the value of a:"));
let c = prompt("Enter the operation");
let b = parseInt(prompt("Enter the value of b:"));

obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if(random>0.1){
    // perform the correct operation.
    console.log(`The result is ${a} ${c} ${b}`)
    alert (`Ther result is ${eval(`${a} ${c} ${b}`)}`)

}else{
    // perform the wrong operation.
    c = obj[c];
    alert (`Ther result is ${eval(`${a} ${c} ${b}`)}`)
}
