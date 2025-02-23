let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3 + 1);
  switch (random) {
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    case 3:
      return 'scissors';
  }
}
function getHumanChoice() {
  const choice = prompt('rock, paper, or scissors?');
  return choice.toLowerCase();
}
function playRound(humanChoice, computerChoice) {
  const human = humanChoice.toLowerCase();
  if (
    (human === 'rock' && computerChoice === 'rock') ||
    (human === 'paper' && computerChoice === 'paper') ||
    (human === 'scissors' && computerChoice === 'scissors')
  ) {
    console.log('Draw');
  } else if (
    (human === 'rock' && computerChoice === 'scissors') ||
    (human === 'paper' && computerChoice === 'rock') ||
    (human === 'scissors' && computerChoice === 'paper')
  ) {
    console.log(`You win, ${human} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You loose, ${computerChoice} beats ${human}`);
    computerScore++;
  }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(computerSelection, computerSelection);
