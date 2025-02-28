const getComputerChoice = () => {
  const options = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * 3);
  return options[random];
};
const getWinner = (human, computer) => {
  if (human === computer) {
    return 'draw';
  } else if (
    (human === 'rock' && computer === 'scissors') ||
    (human === 'paper' && computer === 'rock') ||
    (human === 'scissors' && computer === 'paper')
  ) {
    return 'human';
  } else {
    return 'computer';
  }
};

const printResult = (humanScore, computerScore) => {
  const resultLabel = document.querySelector('.result');
  if (humanScore > computerScore) {
    resultLabel.textContent = `You've won the game! ${humanScore}-${computerScore}`;
  } else if (humanScore < computerScore) {
    resultLabel.textContent = `Computer has won the game! ${computerScore}-${humanScore}`;
  }
};

const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach((btn) =>
    btn.addEventListener('click', (event) => playRound(event))
  );
  const playRound = (event) => {
    const human = event.target['ariaLabel'];
    const computer = getComputerChoice();
    const winner = getWinner(human, computer);
    if (winner === 'human') {
      humanScore++;
    }
    if (winner === 'computer') {
      computerScore++;
    }
    if (humanScore === 5 || computerScore === 5) {
      printResult(humanScore, computerScore);
    }
  };
};
playGame();
