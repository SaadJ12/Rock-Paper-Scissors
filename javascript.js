// Following is the single round game code to run this type playRound('Rock, Paper or Scissors'); in console

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const index = Math.floor(Math.random() * 3);
    return choices[index];
  }
    
  function playRound(playerChoice) {
  let result = "";
  const computerChoice = getComputerChoice();
  let computerScore = 0;
  let playerScore = 0;
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
      playerScore ++;
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
    }    
      else {
      result += "You Lost";
      computerScore++;
    }
    if(result === "You Win") {
      document.querySelector(".final").innerText = result;
    }
    else if(result === "Its a Tie") {
      document.querySelector(".final").innerText = result;

    }
    else {
    document.querySelector(".final").innerText = result;   
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