//Basic Logic 
//Randomly decide letter
//Track how many guesses I have left
//when correct answer is picked- ++win
//when guesses = 0 ++lose
//display keys pressed and do not allow repeats
//when win or lose ++ - clear guesses made and pick new letter

//Declare all variables being used
var wins=0;
var loses=0;
var guessesLeft=9;
var guessesArray= [];
var chosenLetter;



//Variables used for writing text to document
var winText = document.getElementById("wintext");
var loseText = document.getElementById("losetext");
var guessText = document.getElementById("guesstext");
var userGuessText = document.getElementById("userguesstext");
var guessesLeftText= document.getElementById("guessesleft");
var tryAgainText= document.getElementById("tryagain");

//Function to randomly select a letter
function randLetter() {
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter
};

//Game start function. Picks new letter, clears guesses, restores chances
function newGame() {
    randLetter();
    chosenLetter = randLetter();
    guessesArray = [];
    guessesLeft = 10;
    tryAgainText.textContent= "";
    }

//Activates on key press
document.onkeyup = function(event) {
   var userGuess = event.key;
   //if user is wrong and is out of guesses
   if (guessesArray.includes(userGuess)) {
    tryAgainText.textContent = "you did that already, pick again"
   }
   else if (guessesLeft == 0) {
    loses++;
    newGame();
}
   else if (userGuess !== chosenLetter) {
    guessesLeft--;
    guessesArray.push(userGuess);
    tryAgainText.textContent= "";
    }
   
    //if user is correct
    else if (userGuess == chosenLetter) {
        wins++;
        newGame();
    };
//Display scoreboard
    guessText.textContent = "You just guessed " + userGuess;
    winText.textContent = "wins: " + wins;
    loseText.textContent = "losses: " + loses;
    userGuessText.textContent = "You've already chosen " + guessesArray;
    guessesLeftText.textContent= "You've got " + guessesLeft +" chances left!"
}
newGame()