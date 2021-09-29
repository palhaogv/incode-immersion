/*Modify the `rockPaperScissors` function so that it *returns* the result rather than *displays* it.

You will also change your function to handle errors. If one of the argument given to the function is neither `"rock"`, `"paper"` or `"scissors"`, the function will return `Argument error`.*/
function rockPaperScissors(firstPlayer, secondPlayer) {
    if (firstPlayer == secondPlayer) {
        return console.log('Draw');
    } if (((firstPlayer == 'rock') && (secondPlayer == 'scissors')) || ((firstPlayer == 'scissors') && (secondPlayer == 'paper')) || ((firstPlayer == 'paper') && (secondPlayer == 'rock'))){
        return console.log('First player wins');
    } if (((secondPlayer == 'rock') && (firstPlayer == 'scissors')) || ((secondPlayer == 'scissors') && (firstPlayer == 'paper')) || ((secondPlayer == 'paper') && (firstPlayer == 'rock'))){
        return console.log('Second player wins');
    }
    else {
        return console.log('Argument error');
    }
}


rockPaperScissors("paper", "scissors")
rockPaperScissors("rock", "potatoes")
rockPaperScissors("glue", "scissors")
rockPaperScissors("rock", "rock")