function rockPaperScissors(f_player, s_player) {
    if (f_player == s_player) {
        return console.log('Draw');
    } if (((f_player == 'rock') && (s_player == 'scissors')) || ((f_player == 'scissors') && (s_player == 'paper')) || ((f_player == 'paper') && (s_player == 'rock'))){
        return console.log('First player wins');
    } if (((s_player == 'rock') && (f_player == 'scissors')) || ((s_player == 'scissors') && (f_player == 'paper')) || ((s_player == 'paper') && (f_player == 'rock'))){
        return console.log('Second player wins');
    }
}

rockPaperScissors('rock', 'rock')
rockPaperScissors("rock", "paper")
rockPaperScissors("rock", "scissors")
rockPaperScissors("paper", "scissors")