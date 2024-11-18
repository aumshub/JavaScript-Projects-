// WRITE A JS PROGRAM TO CREATE A WORD-MEANING DICTIONARY OF 3 WORDS.

let trans = {
    apple : "sapherjan",
    orange: "santra",
    guava : "jamphad"
}

let input = prompt("Enter your name:")


if (trans[input]){
    console.log("The translation of the word in Gujarati is:",trans[input])
}
else{
    console.log("Invalid Entry")
}

