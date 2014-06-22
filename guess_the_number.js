var MAX_NUM = 10;
var RAND_NUM = Math.floor((Math.random() * MAX_NUM));
var NUM_GUESSES = 0;
function getGuess() {

  var userGuess = prompt("Guess a number between 0 and " + MAX_NUM);
  var userGuessToInt = parseInt(userGuess);

  if (userGuessToInt > MAX_NUM || userGuessToInt < 0) {
    alert("Invalid input, must enter a number between 0 and " + MAX_NUM);
    getGuess();
  } else {
    if(userGuess != RAND_NUM) {
      if(userGuess > RAND_NUM) {
        alert(userGuess + ' was too high, try again...');
        NUM_GUESSES++;
        getGuess();
      } else {
        alert(userGuess + ' was too low, try again...');
        NUM_GUESSES++;
        getGuess();
      };
    } else {
      alert("Congratulations, you've guessed the number in " + NUM_GUESSES + " guesses!");
    };
  };
};

getGuess();
