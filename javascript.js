//Computer has to choose randomly between following given options
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const index = Math.floor(Math.random() * 3);
    return choices[index];
  }
  //Starting scores will be 0
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
      //function to reset scores and round after the game finishes
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
      //If the score of either computer or player reaches 5 it will execute reset function
    if (scores.computer >= 5 || scores.player >= 5) {
      reset();
    }
  } 