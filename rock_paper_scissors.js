const images = Array.from(document.querySelectorAll("#choice-image"));
const rock = document.querySelector(".Rock");
const paper = document.querySelector(".Paper");
const scissor = document.querySelector(".Scissor");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const result = document.querySelector(".result");
const playerResult = document.querySelector(".player-result");
const computerResult = document.querySelector(".computer-result");
const description = document.querySelector(".description");

rock.addEventListener("click", rockPlay);
paper.addEventListener("click", paperPlay);
scissor.addEventListener("click", scissorPlay);

let player_wins = 0;
let computer_wins = 0;
let getClass = "";

// Start game once user clicks any image
images.forEach((image) =>
  image.addEventListener("click", () => {
    if (player_wins >= 5 || computer_wins >= 5) {
      return;
    }
    game();
  })
);

function rockPlay() {
  getClass = document.querySelector(".Rock").className;
  console.log(getClass);
  return getClass;
}

function paperPlay() {
  getClass = document.querySelector(".Paper").className;
  console.log(getClass);
  return getClass;
}

function scissorPlay() {
  getClass = document.querySelector(".Scissor").className;
  console.log(getClass);
  return getClass;
}

function computerPlay() {
  let array1 = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * array1.length);
  let choice = array1[random];

  let para2 = document.createElement("p");
  para2.innerText = choice;
  computer.appendChild(para2);
  return choice;
}

function playRound() {
  const playerSelection = getClass;
  const computerSelection = computerPlay();

  console.log("User: " + playerSelection + ", Computer: " + computerSelection);
  if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      //  console.log("Boohoo, You Lose!");
      description.innerText = "Rock lost to Paper!";
      computer_wins += 1;
      return computer_wins;
    } else if (computerSelection === "Scissors") {
      description.innerText = "Rock won over Scissor!";
      // console.log("Yay, You Won!");
      player_wins += 1;
      return player_wins;
    } else {
      description.innerText = "It's a Tie!";
      console.log("It's a Tie!");
      return 0;
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      description.innerText = "Paper lost to Scissor!";
      // console.log("Boohoo, You Lose!");
      computer_wins += 1;
      return computer_wins;
    } else if (computerSelection === "Rock") {
      description.innerText = "Paper won over Rock!";
      // console.log("Yay, You Won!");
      player_wins += 1;
      return player_wins;
    } else {
      description.innerText = "It's a Tie!";
      // console.log("It's a Tie!");
      return 0;
    }
  } else if (playerSelection === "Scissor") {
    if (computerSelection === "Rock") {
      description.innerText = "Scissor lost to Rock!";
      // console.log("Boohoo, You Lose!");
      computer_wins += 1;
      return computer_wins;
    } else if (computerSelection === "Paper") {
      description.innerText = "Scissor won over Paper!";
      //console.log("Yay, You Won!");
      player_wins += 1;
      return player_wins;
    } else {
      description.innerText = "It's a Tie!";
      //console.log("It's a Tie!");
      return 0;
    }
  }
}

function game() {
  let number2 = 5;
  playRound();

  let para = document.createElement("p");
  para.innerText = getClass;
  player.appendChild(para);

  playerResult.innerText = player_wins;
  computerResult.innerText = computer_wins;

  // console.log(player_wins);
  // console.log(computer_wins);
  if (player_wins === number2 || computer_wins === number2) {
    if (player_wins > computer_wins) {
      let win = document.createElement("h3");
      win.innerText = "You won this round!";
      result.appendChild(win);
      return win;
    } else {
      console.log("Woops, sorry but you lost this round:(");
      let lose = document.createElement("h3");
      lose.innerText = "You lose this round!";
      result.appendChild(lose);
      return lose;
    }
  }
}
