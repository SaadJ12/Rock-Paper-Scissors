function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const index = Math.floor(Math.random() * 3);
    return choices[index];
  }
  
  function playGame(playerChoice) {
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
      console.log('You win!');
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
        console.log("It's a tie!");
    }    
    else {
      console.log('You Lost');
    }
  }