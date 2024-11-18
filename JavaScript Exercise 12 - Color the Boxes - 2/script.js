console.log("JS initializing")
let randomNumber = Math.floor(Math.random()*50);
console.log(randomNumber)



function randomColor() {
    
    if (randomNumber >= 49 ){
        return "red"
    }else if (randomNumber >= 40 ){
        return "black"
    }else if (randomNumber >= 30 ){
        return "yellow"
    }else if (randomNumber >= 20 ){
        return "purple"
    }else if (randomNumber >= 10 && randomNumber < 0 ){
        return "green"
    }
    
}
let box = document.querySelectorAll(".box")

Array.from(box).forEach(element => {

        element.style.backgroundColor = randomColor();
    
});