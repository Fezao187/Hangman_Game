"Use strict";

//Selecting page elements as JS objects
let head = document.querySelector(".head"),
    body = document.querySelector(".body"),
    handLeft = document.querySelector(".handleft"),
    handRight = document.querySelector(".handright"),
    footLeft = document.querySelector(".footleft"),
    footRight = document.querySelector(".footright"),
    //Selecting all the alphabets
    alphabetsArr = document.querySelectorAll(".alphanet");

/**TODO: Code the hangman game, I have no idea how to do it
 * at the moment but I will see. When I have time.
 * jnhjnhjbj
 */

const wordArr = ["Word", "Sanga", "Fez", "ffrfrf", "dfdfd"]
let word = wordArr[Math.floor(Math.random() * wordArr.length)];
console.log(word);
let newStr = word.split("");
console.log(newStr);

for (let i = 0; i < word.length; i++) {

    if (newStr[i] === "f") {
        console.log("Letter found")
    } else {
        console.log("Letter not found")
        // head.style.border="0px solid white"
    }
}