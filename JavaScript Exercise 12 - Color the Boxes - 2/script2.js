console.log("JS initializing");


// let boxes = document.getElementsByClassName("box");
let boxes = document.querySelector(".container").children;
// console.log(Array.from(boxes));

function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random()*255);
    let val2 = Math.ceil(0 + Math.random()*255);
    let val3 = Math.ceil(0 + Math.random()*255);
    return `rgb(${val1}, ${val2}, ${val3})`;
}
console.log(getRandomColor());

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
    e.textContent = getRandomColor()
});
