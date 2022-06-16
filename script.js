// create playerSelection variable
// create computerSelection variable
// create function  that randomly picks rock paper or scissors for the computerSelection
// make a function that plays a round of rock paper scissors
// type  whether you won or lost in the console



function computerPlay() {
  let randomNumber = Math.floor(Math.random()*3);
  if (randomNumber === 0) {
    return 'rock';  
  }
  if (randomNumber === 1) {
    return 'paper';
  }
  if (randomNumber === 2) {
    return 'scissors';
  }
}


function rockPaperScissors(computerSelection, playerSelection) {
    if (computerSelection === 'rock' && playerSelection  === 'scissors' || computerSelection === 'scissors' && playerSelection  === 'paper' || computerSelection === 'paper' && playerSelection  === 'rock') {
        return round = 'lose'
        // `You lost, ${computerSelection} beats ${playerSelection}`
    } 
    else if (computerSelection === 'rock' && playerSelection  === 'paper' || computerSelection === 'scissors' && playerSelection  === 'rock' || computerSelection === 'paper' && playerSelection  === 'scissors') {
        return round = 'win'
        // `You won, ${playerSelection} beats  ${computerSelection}`
    }
    else if (computerSelection === 'rock' && playerSelection  === 'rock' || computerSelection === 'scissors' && playerSelection  === 'scissors' || computerSelection === 'paper' && playerSelection  === 'paper') {
        return round = 'tie'
        // "It's a tie"
    } else {
        return console.log('error')
    }
}

let t = 0
let w = 0
let l = 0

function game() {
  for (i=1; i<6; i++) {
    const playerSelection = prompt("rock, paper, or scissors?").toLowerCase();
    const computerSelection = computerPlay();
    rockPaperScissors(computerSelection, playerSelection);
    if (round == 'lose') {
      console.log(`${w}-${++l} You lost this round.`)
    }
    if (round == 'win') {

      console.log(`${++w}-${l} You won this round.`)
    }
    if (round == 'tie') {

      console.log(`${w}-${l} You tied this round.`)
    }
  }
  if (w > l) {
    console.log('You Won!');
  }
  else if (w < l) {
    console.log('You Lost!');
  }
  else if (l===w) {
    console.log("It's a tie")
  }
}
