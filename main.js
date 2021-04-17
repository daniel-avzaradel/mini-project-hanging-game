let regex = /^[a-z]+$/gi

let word = prompt("Player 1: Please type in a word with at least 8 characters")

while (regex.test(word) == false || word.length < 8 || word == null) {
    word = prompt("Player 1: Please type in a valid word format with at least 8 characters")
}

word = word.toUpperCase().split("");

let hiddenword = "*".repeat(word.length).split("")
console.log(hiddenword)

let regexLetter = /^[a-z]{1}$/i
let tries = [];

while (tries.length < 10) {

    let letter = prompt("Player 2: Please choose a letter");

    while (regexLetter.test(letter) === false || letter.lastIndexOf > 0 || letter === null) {
    letter = prompt("Player 2: Please choose a single letter")
    }

    letter = letter.toUpperCase();

    while (tries.includes(letter)) {
        alert("You already chose this letter. Please pick another one")
        letter = prompt("Player 2: Please choose a letter").toUpperCase()
        while (regexLetter.test(letter) === false || letter.lastIndexOf > 0 || letter === null) {
        letter = prompt("Player 2: Please choose a single letter").toUpperCase()
        }
    }
    
    tries.push(letter);
    console.log(tries);

    for (let i=0; i < word.length; i++) {
        if(word[i] === letter) {
        hiddenword[i] = letter;
        }
    }
    console.log(hiddenword.join(""));

    if(hiddenword.includes("*") === false) {
        alert(`CONGRATULATIONS! YOU WIN. THE WORD IS ${hiddenword.join("")}`)
        tries = [];
        break;
    }

}

if (tries.length == 10) {
    alert("YOU HAVE NO MORE TRIES. YOU LOSE")
}

console.log(hiddenword)
