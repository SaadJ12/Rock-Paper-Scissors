function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const index = Math.floor(Math.random() * 3);
    return choices[index];
  }
  
  function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (playerChoice === 'Rock', 'ROCK', 'rOck', 'rock' && computerChoice === 'Scissors') ||
      (playerChoice === 'Scissors', 'SCISSORS', 'scissors', 'sCISSORS' && computerChoice === 'Paper') ||
      (playerChoice === 'Paper', 'paper', 'PAPER', 'pAper' && computerChoice === 'Rock')
    ) {
      console.log('You win!');
    } else {
      console.log('You lose!');
    }
  }