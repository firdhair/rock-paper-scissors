const button = document.querySelector("#start");
let para = document.createElement("p");

button.addEventListener("click", game);

let player_wins = 0;
let computer_wins = 0;

function playerPlay() {
  let answer = prompt("Choose between rock, paper, or scissor!");
  let capitalized = answer.charAt(0).toUpperCase() + answer.slice(1);
  return capitalized;
}

function computerPlay() {
  let array1 = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * array1.length);
  let choice = array1[random];
  return choice;
}

function playRound() {
  const playerSelection = playerPlay();
  const computerSelection = computerPlay();
  // let player_wins = 0;

  console.log("User: " + playerSelection + ", Computer: " + computerSelection);
  if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      console.log("Boohoo, You Lose!");
      computer_wins += 1;
      return computer_wins;
    } else if (computerSelection === "Scissors") {
      console.log("Yay, You Won!");
      player_wins += 1;
      return player_wins;
    } else {
      console.log("It's a Tie!");
      return 0;
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      console.log("Boohoo, You Lose!");
      computer_wins += 1;
      return computer_wins;
    } else if (computerSelection === "Rock") {
      console.log("Yay, You Won!");
      player_wins += 1;
      return player_wins;
    } else {
      console.log("It's a Tie!");
      return 0;
    }
  } else if (playerSelection === "Scissor") {
    if (computerSelection === "Rock") {
      console.log("Boohoo, You Lose!");
      computer_wins += 1;
      return computer_wins;
    } else if (computerSelection === "Paper") {
      console.log("Yay, You Won!");
      player_wins += 1;
      return player_wins;
    } else {
      console.log("It's a Tie!");
      return 0;
    }
  }
}

function game() {
  //let value = [];
  for (let i = 0; i < 5; i++) {
    playRound();
    // let play = playRound();
    // value += play;
    // console.log(player_wins);
    // console.log(computer_wins);
  }
  if (player_wins > computer_wins) {
    console.log("You won this round!");
  } else if (player_wins === computer_wins) {
    console.log("This round is a tie!");
  } else {
    console.log("Woops, sorry but you lost this round:(");
  }
}
