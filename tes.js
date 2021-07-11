const button = document.querySelector("#start");
const choices = document.querySelector(".choices");
const head = document.querySelector(".head");
const comp = document.querySelector(".computer");
const player = document.querySelector(".player");
//let para = document.createElement("p");

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
      //console.log("Boohoo, You Lose!");
      computer_wins += 1;
      return computer_wins;
    } else if (computerSelection === "Scissors") {
      // console.log("Yay, You Won!");
      player_wins += 1;
      return player_wins;
    } else {
      // console.log("It's a Tie!");
      return 0;
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      // console.log("Boohoo, You Lose!");
      computer_wins += 1;
      return computer_wins;
    } else if (computerSelection === "Rock") {
      // console.log("Yay, You Won!");
      player_wins += 1;
      return player_wins;
    } else {
      //console.log("It's a Tie!");
      return 0;
    }
  } else if (playerSelection === "Scissor") {
    if (computerSelection === "Rock") {
      //console.log("Boohoo, You Lose!");
      computer_wins += 1;
      return computer_wins;
    } else if (computerSelection === "Paper") {
      //console.log("Yay, You Won!");
      player_wins += 1;
      return player_wins;
    } else {
      //console.log("It's a Tie!");
      return 0;
    }
  }
  let para = document.createElement("p");
  para.innerText = player_wins;
  head.appendChild(para);

  let para2 = document.createElement("p");
  para2.innerText = computer_wins;
  head.appendChild(para2);
}

function game() {
  //let value = [];
  // for (let i = 0; i < 5; i++) {
  //   playRound();
  //   // let play = playRound();
  //   // value += play;
  //   // console.log(player_wins);
  //   // console.log(computer_wins);
  // }
  let number1 = 2;
  player.innerText = player_wins;
  comp.innerText = computer_wins;
  while (player_wins !== number1 && computer_wins !== number1) {
    // player.innerText = player_wins;
    // comp.innerText = computer_wins;
    playRound();
    console.log(player_wins);
    console.log(computer_wins);
  }

  //result.appendChild(para);

  if (player_wins > computer_wins) {
    console.log("You won this round!");
  } else if (player_wins === computer_wins) {
    console.log("This round is a tie!");
  } else {
    console.log("Woops, sorry but you lost this round:(");
  }
}

// const button = document.querySelector("#start");
// const choices = document.querySelector(".choices");
// const rock = document.querySelector(".Rock");
// const paper = document.querySelector(".Paper");
// const scissor = document.querySelector(".Scissor");
// const player = document.querySelector(".player");
// const computer = document.querySelector(".computer");
// const result = document.querySelector(".result");
// const playerResult = document.querySelector(".player-result");
// const computerResult = document.querySelector(".computer-result");
// const description = document.querySelector(".description");

// choices.addEventListener("click", game);
// rock.addEventListener("click", rockPlay);
// paper.addEventListener("click", paperPlay);
// scissor.addEventListener("click", scissorPlay);

// let player_wins = 0;
// let computer_wins = 0;
// let getClass = "";
// let jumlahPlay = 0;

// function rockPlay(event) {
//   getClass = document.querySelector(".Rock").className;
//   console.log(getClass);
//   jumlahPlay += 1;
//   return [getClass, jumlahPlay];
// }

// function paperPlay(event) {
//   getClass = document.querySelector(".Paper").className;
//   console.log(getClass);
//   jumlahPlay += 1;
//   return [getClass, jumlahPlay];
// }

// function scissorPlay(event) {
//   getClass = document.querySelector(".Scissor").className;
//   console.log(getClass);
//   jumlahPlay += 1;
//   return [getClass, jumlahPlay];
// }

// function computerPlay() {
//   let array1 = ["Rock", "Paper", "Scissors"];
//   let random = Math.floor(Math.random() * array1.length);
//   let choice = array1[random];

//   let para2 = document.createElement("p");
//   para2.innerText = choice;
//   computer.appendChild(para2);
//   return choice;
// }

// function playRound() {
//   const playerSelection = getClass;
//   const computerSelection = computerPlay();

//   console.log("User: " + playerSelection + ", Computer: " + computerSelection);
//   if (playerSelection === "Rock") {
//     if (computerSelection === "Paper") {
//       //  console.log("Boohoo, You Lose!");
//       description.innerText = "Rock lost to Paper!";
//       computer_wins += 1;
//       return computer_wins;
//     } else if (computerSelection === "Scissors") {
//       description.innerText = "Rock won over Scissor!";
//       // console.log("Yay, You Won!");
//       player_wins += 1;
//       return player_wins;
//     } else {
//       description.innerText = "It's a Tie!";
//       console.log("It's a Tie!");
//       return 0;
//     }
//   } else if (playerSelection === "Paper") {
//     if (computerSelection === "Scissors") {
//       description.innerText = "Paper lost to Scissor!";
//       // console.log("Boohoo, You Lose!");
//       computer_wins += 1;
//       return computer_wins;
//     } else if (computerSelection === "Rock") {
//       description.innerText = "Paper won over Rock!";
//       // console.log("Yay, You Won!");
//       player_wins += 1;
//       return player_wins;
//     } else {
//       description.innerText = "It's a Tie!";
//       // console.log("It's a Tie!");
//       return 0;
//     }
//   } else if (playerSelection === "Scissor") {
//     if (computerSelection === "Rock") {
//       description.innerText = "Scissor lost to Rock!";
//       // console.log("Boohoo, You Lose!");
//       computer_wins += 1;
//       return computer_wins;
//     } else if (computerSelection === "Paper") {
//       description.innerText = "Scissor won over Paper!";
//       //console.log("Yay, You Won!");
//       player_wins += 1;
//       return player_wins;
//     } else {
//       description.innerText = "It's a Tie!";
//       //console.log("It's a Tie!");
//       return 0;
//     }
//   }

//   // let number1 = 5;
//   // while (player_wins !== number1 && computer_wins !== number1) {
//   //   playRound();
//   //   console.log(player_wins);
//   //   console.log(computer_wins);
//   //   console.log(jumlahPlay);
//   // }
// }

// function game() {
//   //let value = [];
//   let number2 = 5;
//   playRound();
//   let para = document.createElement("p");
//   para.innerText = getClass;
//   player.appendChild(para);

//   playerResult.innerText = player_wins;
//   computerResult.innerText = computer_wins;

//   console.log(player_wins);
//   console.log(computer_wins);
//   if (player_wins === number2 || computer_wins === number2) {
//     if (player_wins > computer_wins) {
//       let win = document.createElement("h3");
//       win.innerText = "You won this round!";
//       result.appendChild(win);
//       return win;
//       console.log("You won this round!");
//       // } else if (player_wins === computer_wins) {
//       //   console.log("This round is a tie!");
//     } else {
//       console.log("Woops, sorry but you lost this round:(");
//       let lose = document.createElement("h3");
//       lose.innerText = "You lose this round!";
//       result.appendChild(lose);
//       return lose;
//       console.log("You won this round!");
//     }
//   } else if (player_wins >= number2 || computer_wins >= number2) {
//     return;
//   }
//   //console.log(getClass);
//   // if (player_wins > computer_wins) {
//   //   console.log("You won this round!");
//   // } else if (player_wins === computer_wins) {
//   //   console.log("This round is a tie!");
//   // } else {
//   //   console.log("Woops, sorry but you lost this round:(");
//   // }
// }
