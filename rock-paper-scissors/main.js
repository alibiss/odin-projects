const moves = ["rock", "paper", "scissors"];
const scoreboard = [0, 0];

function computerPlay() {
  return Math.floor(Math.random() * (3 - 1 + 1) + 1) // random * ((max - min + 1) + min) << INCLUSIVE RANDOM BETWEEN TWO INT
}

function playRound(player, com) {
  if (player === null) throw Error("No input has been selected!");
  if (!player.match(/rock|paper|scissors?/i)) return;

  if (moves.indexOf(player) === 0 && com === 2 ||
      moves.indexOf(player) === 1 && com === 0 ||
      moves.indexOf(player) === 2 && com === 1) {
    console.log(`You win this round: ${player} beats ${moves[com]}`);
    scoreboard[0] += 1;
  } else if (moves.indexOf(player) === com) {
    console.log(`Draw: You both chose ${moves[com]}`);
  } else {
    console.log(`You lose this round: ${moves[com]} beats ${player}`);
    scoreboard[1] += 1;
  }
}

document.querySelector("button").onclick = () => {
  // Reset score
  scoreboard[0] = 0;
  scoreboard[1] = 0;

  // Start five rounds
  for (let i=0; i<5; i++) {
    playRound(prompt("enter rock, paper or scissors: "), computerPlay() - 1);
    if (i < 4) continue;

    // If last round
    let output;
    if (scoreboard[0] > scoreboard[1]) {
      output = "You win this match."
    } else if (scoreboard[0] < scoreboard[1]) {
      output = "You lose this match."
    } else {
      output = "Draw!"
    }
    console.log(output)
  }
}