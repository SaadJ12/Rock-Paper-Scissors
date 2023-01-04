// Following is the single round game code to run this type playRound('Rock, Paper or Scissors'); in console
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const index = Math.floor(Math.random() * 3);
    return choices[index];
  }
  let scores = {
    computer: 0,
    player: 0,
    ties: 0
  };
  let round = 0; //initialize round to 0
  function playRound(playerChoice) {
  let result = "";
  const computerChoice = getComputerChoice();
     if (
      (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
      (playerChoice === 'ROCK' && computerChoice === 'Scissors') ||
      (playerChoice === 'rock' && computerChoice === 'Scissors') ||
      (playerChoice === 'SCISSORS' && computerChoice === 'Paper') ||
      (playerChoice === 'scissors' && computerChoice === 'Paper') ||
      (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
      (playerChoice === 'Paper' && computerChoice === 'Rock') ||
      (playerChoice === 'paper' && computerChoice === 'Rock') ||
      (playerChoice === 'PAPER' && computerChoice === 'Rock')
    ) {
      result += "You Win";
      scores.player += 1;
      round++;
    } else if (
      (playerChoice === 'PAPER' && computerChoice === 'Paper') ||
      (playerChoice === 'paper' && computerChoice === 'Paper') ||
      (playerChoice === 'Paper' && computerChoice === 'Paper') ||
      (playerChoice === 'ROCK' && computerChoice === 'Rock') ||
      (playerChoice === 'rock' && computerChoice === 'Rock') ||
      (playerChoice === 'Rock' && computerChoice === 'Rock') ||
      (playerChoice === 'SCISSORS' && computerChoice === 'Scissors') ||
      (playerChoice === 'scissors' && computerChoice === 'Scissors') ||
      (playerChoice === 'Scissors' && computerChoice === 'Scissors')
    ) {
      result += "Its a Tie";
      round++;
      scores.ties += 1;
    }    
      else {
      result += "You Lost";
      scores.computer += 1;
      round++;
    }
    if(result === "You Win") {
      document.querySelector(".final").innerText = result;
      document.querySelector(".playerScore").innerText = "PlayerScore: " + scores.player;
    }
    else if(result === "Its a Tie") {
      document.querySelector(".final").innerText = result;
      document.querySelector(".ties").innerText = "Ties: " + scores.ties;
    }
    else {
      document.querySelector(".final").innerText = result;
      document.querySelector(".computerScore").innerText = "Computer Score: " + scores.computer;
    }
    document.querySelector(".round").innerText = "Round: " + round;
    function reset() {
      //reset round to 0
      scores.computer = 0;
      scores.player = 0;
      scores.ties = 0;
      round = 0;
      document.querySelector(".playerScore").innerText = "PlayerScore: " + 0;
      document.querySelector(".ties").innerText = "Ties: " + 0;
      document.querySelector(".computerScore").innerText = "Computer Score: " + 0;
      document.querySelector(".round").innerText = "Round: " + "Game Finished";
      if(scores.computer >= 5) {
      document.querySelector(".gameResults").innerText = "" + "Computer Won"; 
      }
      else if(scores.computer <= 5) {
      document.querySelector(".gameResults").innerText = "" + "Player Won";
      }
    }
      if(scores.computer >= 5) {
        reset();
      }
      else if(scores.player >= 5) {
        reset();
      }
    }


// Following is the 5 round game code to run this type playGame(); in console

// function getComputerChoice() {
//     const choices = ['Rock', 'Paper', 'Scissors'];
//     const index = Math.floor(Math.random() * 3);
//     return choices[index];
//   }
  
// function playGame() {
//     let computerScore = 0;
//     let playerScore = 0;
//     let tie = 0;
//     const playerChoice = prompt('Enter your choice (Rock, Paper or Scissors)');
  
//     for (let i = 0; i < 5; i++) {
//       const computerChoice = getComputerChoice();
//       let result;
  
//       if (
//         (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
//         (playerChoice === 'ROCK' && computerChoice === 'Scissors') ||
//         (playerChoice === 'rock' && computerChoice === 'Scissors') ||
//         (playerChoice === 'SCISSORS' && computerChoice === 'Paper') ||
//         (playerChoice === 'scissors' && computerChoice === 'Paper') ||
//         (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
//         (playerChoice === 'Paper' && computerChoice === 'Rock') ||
//         (playerChoice === 'paper' && computerChoice === 'Rock') ||
//         (playerChoice === 'PAPER' && computerChoice === 'Rock')
//       ) {
//         result = 'You Win';
//         playerScore++;
//       } else if (
//         (playerChoice === 'PAPER' && computerChoice === 'Paper') ||
//         (playerChoice === 'paper' && computerChoice === 'Paper') ||
//         (playerChoice === 'Paper' && computerChoice === 'Paper') ||
//         (playerChoice === 'ROCK' && computerChoice === 'Rock') ||
//         (playerChoice === 'rock' && computerChoice === 'Rock') ||
//         (playerChoice === 'Rock' && computerChoice === 'Rock') ||
//         (playerChoice === 'SCISSORS' && computerChoice === 'Scissors') ||
//         (playerChoice === 'scissors' && computerChoice === 'Scissors') ||
//         (playerChoice === 'Scissors' && computerChoice === 'Scissors')
//       ) {
//         result = "It's a tie!";
//         tie++;
//       } else {
//         result = 'You Lost';
//         computerScore++;
//       }
//       if (playerScore > computerScore) {
//         console.log("You won the game");
//       }
//       else if (computerScore > playerScore) {
//         console.log("Computer won the game");
//       }
//       else {
//         console.log("Its a tie!");
//       }
//     }
    
//     console.log(`Player score: ${playerScore}`);
//     console.log(`Computer score: ${computerScore}`);
//     console.log(`Ties: ${tie}`);
//   }