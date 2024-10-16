const prompt = require("prompt-sync")();

const ans = Math.floor((Math.random() * 100) + 1);
let guess;
let guesses = 0;

do {
    guess = prompt("Enter a number between 1 to 100 : ");
    guess = Number.parseInt(guess);
    if (guess > ans) {
        console.log("Your guess is greater than the answer.");
    } else {
        console.log("Your guess is lower than the answer.");
    }
    guesses++;
} while (guess != ans);

console.log("Your score is :", guesses);