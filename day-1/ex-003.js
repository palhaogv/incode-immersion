/*Modify the `rockPaperScissors` function so that it *returns* the result rather than *displays* it.

You will also change your function to handle errors. If one of the argument given to the function is neither `"rock"`, `"paper"` or `"scissors"`, the function will return `Argument error`.*/
function rockPaperScissors(f_player, s_player) {
    if (f_player == s_player) {
        return console.log('Draw');
    } if (((f_player == 'rock') && (s_player == 'scissors')) || ((f_player == 'scissors') && (s_player == 'paper')) || ((f_player == 'paper') && (s_player == 'rock'))){
        return console.log('First player wins');
    } if (((s_player == 'rock') && (f_player == 'scissors')) || ((s_player == 'scissors') && (f_player == 'paper')) || ((s_player == 'paper') && (f_player == 'rock'))){
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