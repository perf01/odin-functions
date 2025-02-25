let humanScore = 0;
let computerScore = 0;
const getComputerChoice = () => {
  const random = Math.floor(Math.random() * 3 + 1);
  switch (random) {
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    case 3:
      return 'scissors';
  }
};
const getHumanChoice = () => {
  const choice = prompt('rock paper or scissors?');
  const lowerChoice = choice.toLowerCase();
  if (!choice) {
    alert('empty choice, type again!');
    return getHumanChoice();
  } else if (
    lowerChoice !== 'rock' &&
    lowerChoice !== 'paper' &&
    lowerChoice !== 'scissors'
  ) {
    alert('wrong choice, type again!');
    return getHumanChoice();
  } else {
    return choice;
  }
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

const addScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
};

const printResult = () => {
  if (humanScore > computerScore) {
    console.log(`You've won the game! ${humanScore}-${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(`Computer has won the game! ${computerScore}-${humanScore}`);
  } else {
    console.log('Draw');
  }
};

const playGame = () => {
  const playRound = () => {
    const human = getHumanChoice();
    const computer = getComputerChoice();
    const winner = getWinner(human, computer);
    addScore(winner);
  };
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  printResult();
};
playGame();
// const playRound = () => {
//   const human = getHumanChoice();
//   const computer = getComputerChoice();
//   const winner = getWinner(human, computer);
//   addScore(winner);
// };

// const humanChoice = getHumanChoice();
// console.log(humanChoice);
// function getComputerChoice() {
//   const random = Math.floor(Math.random() * 3 + 1);
//   switch (random) {
//     case 1:
//       return 'rock';
//     case 2:
//       return 'paper';
//     case 3:
//       return 'scissors';
//   }
// }

// function getHumanChoice() {
//   const choice = prompt('rock, paper, or scissors?', '');
//   if (!choice) {
//     console.log('wrong choice');
//     return getComputerChoice();
//   }
//   if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
//     return choice;
//   }
// }
// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;
//   function playRound() {
//     const human = getHumanChoice();
//     const computer = getComputerChoice();
//     if (human) {
//       console.log(human, typeof human, Boolean(human));
//       if (human === computer) {
//         console.log('Draw');
//       } else if (
//         (human === 'rock' && computer === 'scissors') ||
//         (human === 'paper' && computer === 'rock') ||
//         (human === 'scissors' && computer === 'paper')
//       ) {
//         console.log(`You win, ${human} beats ${computer}`);
//         humanScore++;
//       } else {
//         console.log(`You loose, ${computer} beats ${human}`);
//         computerScore++;
//       }
//     }
//   }
//   playRound();
//   playRound();
//   playRound();
//   playRound();
//   playRound();
//   console.log(
//     `The final score is: H(${humanScore}) - C(${computerScore}) and the winner is: ${
//       humanScore > computerScore
//         ? 'human'
//         : computerScore > humanScore
//         ? 'computer'
//         : 'draw'
//     }`
//   );
// }
// playGame();
