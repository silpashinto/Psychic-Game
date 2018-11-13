
//variable declaration

var wins = 0;
var losses = 0;
var guessLeft = 10;

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var GuessleftText = document.getElementById("Guess-left");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoices = ['p', 'r', 'h', 'k', 'o','l','u'];
var userGuessedLetters = [];

//setting default values
GuessleftText.textContent = guessLeft;
lossesText.textContent = 0;
winsText.textContent = 0;    

//onkeyup event

document.onkeyup = function (event) {

    var userGuess = event.key;
    userGuessedLetters.push(userGuess)
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//resetting values
    if (guessLeft === 0) {
        wins = 0;
        losses = 0;
        winsText.textContent = wins;
        lossesText.textContent = losses;
        userChoiceText.textContent = "";
        userGuessedLetters = [];
        guessLeft = 10;

    }
    else if (userGuess === computerGuess) { //wins

        wins++;
        winsText.textContent = wins;
        guessLeft--;
    }

    else { //losses

        losses++;
        lossesText.textContent = losses;
        guessLeft--;
    }

    GuessleftText.textContent = guessLeft;
    userChoiceText.textContent = userGuessedLetters;
};

