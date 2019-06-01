var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var userGuess = [];
var computerGuess
var guessesLeft = 9;

// update guesses left
  var updateGuessesLeft = function() {
    document.querySelector("#guesses-left").innerHTML=guessesLeft;
     };

// update letters guessed
  var updateGuessesSoFar = function() {
    document.querySelector("#guessed-already").innerHTML=userGuess.join(", ");
    }; 

// generate random letter
  var updateComputerGuess = function() {
        computerGuess = letters[Math.floor(Math.random() * letters.length)];
    };

// reset
  var reset = function() {
    updateComputerGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
    guessesLeft = 9;
    userGuess = [];
    console.log(computerGuess);
    };

  updateComputerGuess();
  updateGuessesLeft();
  
// see what letter the computer guessed in logs
    console.log(computerGuess);

// capture user input
  document.onkeyup = function (event) {
    guessesLeft--;


// make letter lowercase
    var letter = String.fromCharCode(event.which).toLowerCase();
    userGuess.push(letter);

    updateGuessesLeft();
    updateGuessesSoFar();

// determin win or lose
    if (letter == computerGuess) {
      wins++;
      document.querySelector("#wins").innerHTML = wins;
      reset();
    }
    else if (guessesLeft == 0) {
      losses++;
      document.querySelector("#losses").innerHTML = losses;
      reset();
    }
  };
