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
        return l++
        // `You lost, ${computerSelection} beats ${playerSelection}`
    } 
    else if (computerSelection === 'rock' && playerSelection  === 'paper' || computerSelection === 'scissors' && playerSelection  === 'rock' || computerSelection === 'paper' && playerSelection  === 'scissors') {
        return w++
        // `You won, ${playerSelection} beats  ${computerSelection}`
    }
    else if (computerSelection === 'rock' && playerSelection  === 'rock' || computerSelection === 'scissors' && playerSelection  === 'scissors' || computerSelection === 'paper' && playerSelection  === 'paper') {
        return t++
        // "It's a tie"
    } 
}
let wScore = 0
let lScore = 0
let t = 0
let w = 0
let l = 0

function game() {
  for (let i=1; i<= 5; i++) {
    const playerSelection = prompt('rock, paper, or scissors?');
    const computerSelection = computerPlay();
    rockPaperScissors(computerSelection, playerSelection);
    if (w++) {
       return console.log(`${i}: ${w}-${l}, you won this round, ${playerSelection} beats  ${computerSelection}`)
       
    }
    else if (l++) {
        return console.log(`${i}: ${w}-${l}, you lost this round, ${computerSelection} beats ${playerSelection}`)
        
    }
    else if (t++) {

        console.log(`${i}: ${w}-${l}, It's a tie this round`)
    }
  }
  if (w>l) {
    console.log('You Won')
  }
  if (l>w) {
    console.log('You Lost')
  }
  if (w === l) {
    console.log('Tie!')
  }
}
