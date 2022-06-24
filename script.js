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


document.addEventListener('DOMContentLoaded', () => {
  
  const body = document.querySelector('body')
  const buttons = document.querySelectorAll('#container');
  const para = document.querySelector(".winloss")
  let t = 0
  let w = 0
  let l = 0
  const score = document.createElement('p')
  const final = document.createElement('p')

  buttons.forEach((button)=> {
    button.addEventListener('click', (e) => {
      const playerSelection = e.target.className
      rockPaperScissors(computerPlay(), playerSelection)
  
    });
  });

  function hide() {
    
    buttons.forEach((button)=> {button.remove()})
    para.remove()
    score.remove()
  }
  
  

  function rockPaperScissors(computerSelection, playerSelection) {
    
    if (computerSelection === 'rock' && playerSelection  === 'scissors' || computerSelection === 'scissors' && playerSelection  === 'paper' || computerSelection === 'paper' && playerSelection  === 'rock') {
        
        console.log('lose')
        
        //return round = 'lose'
        para.textContent = `You lost, ${computerSelection} beats ${playerSelection}`
        score.textContent = `${w}-${++l}`
    } 
    else if (computerSelection === 'rock' && playerSelection  === 'paper' || computerSelection === 'scissors' && playerSelection  === 'rock' || computerSelection === 'paper' && playerSelection  === 'scissors') {
        
        console.log('win')
        
        //return round = 'win'
        para.textContent = `You won, ${playerSelection} beats  ${computerSelection}`
        score.textContent = `${++w}-${l}`
    }
    else if (computerSelection === 'rock' && playerSelection  === 'rock' || computerSelection === 'scissors' && playerSelection  === 'scissors' || computerSelection === 'paper' && playerSelection  === 'paper') {
        
        console.log('tie')
        //return  round = 'tie'
        para.textContent = "It's a tie"
        t++
    } else {
        return console.log('error')
    }
    if (w == 5) {
  
      
      final.textContent = 'You beat the Computer!'
      hide()
      const restart = document.createElement('button')
      restart.textContent = 'Restart'
      body.appendChild(restart)
    } else if (l == 5) {
    
      
      final.textContent = 'You lost to the Computer!'
      hide()
      const restart = document.createElement('button')
      restart.textContent = 'Restart'
      body.appendChild(restart)
    } 
};




body.appendChild(score)
body.appendChild(final)


// function game() {
//   for (i=1; i<6; i++) {
//     const playerSelection = prompt("rock, paper, or scissors?").toLowerCase();
//     const computerSelection = computerPlay();
//     rockPaperScissors(computerSelection, playerSelection);
//     if (round == 'lose') {
//       console.log(`${w}-${++l} You lost this round.`)
//     }
//     if (round == 'win') {

//       console.log(`${++w}-${l} You won this round.`)
//     }
//     if (round == 'tie') {

//       console.log(`${w}-${l} You tied this round.`)
//     }
//   }
//   if (w > l) {
//     console.log('You Won!');
//   }
//   else if (w < l) {
//     console.log('You Lost!');
//   }
//   else if (l===w) {
//     console.log("It's a tie")
//   }
// }
 });
