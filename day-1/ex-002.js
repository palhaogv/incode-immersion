/*You probably know the game "Rock, paper, scissors" (if you don't, look up the rules and have a couple of games with your neighbour!).

Write a function that announces the result of the game.

Your function `rockPaperScissors` will take two arguments:

- the first is the move of the first player, between `"rock"`, `"paper"` and `"scissors"`
- the second is the move of the second player, between `"rock"`, `"paper"` and `"scissors"`

Your function will print `First player wins` if the first player wins, `Second player wins` if the second player wins, and `Draw` if nobody wins.*/

function rockPaperScissors(f_player, s_player) {
    if (f_player == s_player) {
        console.log('Draw');
    } if (((f_player == 'rock') && (s_player == 'scissors')) || ((f_player == 'scissors') && (s_player == 'paper')) || ((f_player == 'paper') && (s_player == 'rock'))){
        console.log('First player wins');
    } if (((s_player == 'rock') && (f_player == 'scissors')) || ((s_player == 'scissors') && (f_player == 'paper')) || ((s_player == 'paper') && (f_player == 'rock'))){
        console.log('Second player wins');
    }
}

rockPaperScissors('rock', 'rock')
rockPaperScissors("rock", "paper")
rockPaperScissors("rock", "scissors")
rockPaperScissors("paper", "scissors")