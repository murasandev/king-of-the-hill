// objective of king of the hill
// be the last man standing

// start with 3 players
// rock paper scissor until oddman eliminated
// ex: two rocks one scissor / scissor is eliminated

// once down to 2 players
// rock paper scissors
// best of 5 is the king

// test userInput = rock paper or scissors
// if equal than continue
// else re ask prompt
let validUserInput;

let userInput;
let userNumber;
let userScore = 0;

let computerRandomNumber;
let computerChoice;
let computerScore = 0;

let kothArray = [];

// Gameplay Loop
playGame();

// ROCK PAPER SCISSORS

function getUserInput(){
  do {
    userInput = prompt("Rock, Paper, or Scissor");
    setUserInputToLower(userInput);
    
    switch (userInput) {
      case "rock":
        userNumber = 0;
        console.log("You chose rock");
        validUserInput = true;
        break;
      case "paper":
        userNumber = 1;
        console.log("you chose paper");
        validUserInput = true;
        break;
      case "scissor":
        userNumber = 2;
        console.log("you chose scissor");
        validUserInput = true;
        break;
      default:
        console.log("Please enter valid input.");
        break;
    }
  } while (!validUserInput);
}

function setUserInputToLower(string){
  return userInput = string.toLowerCase();
}

function getCpuInput(max = 3){
  return computerRandomNumber = Math.floor(Math.random() * max);
}

function setCpuInput(){
  switch (computerRandomNumber) {
    case 0:
      computerChoice = "rock";
      console.log("cpu chose rock");
      break;
    
    case 1:
      computerChoice = "paper";
      console.log("cpu chose paper");
      break;

    case 2:
      computerChoice = "scissor";
      console.log("cpu chose scissor");
      break;

    default:
      break;
  }
}

function compareUserCpuChoice(){
  let outcome = computerRandomNumber - userNumber;
  switch (outcome) {
    case 0:
      console.log(`You chose ${userInput}, CPU chose ${computerChoice}. You tie.`);
      break;
    
    case 1:
    case -2:
      console.log(`You chose ${userInput}, CPU chose ${computerChoice}. You lose.`);
      computerScore++;
      break;

    default:
      console.log(`You chose ${userInput}, CPU chose ${computerChoice}. You win.`);
      userScore++;
      break;
  }
}

function playRound(){
  getUserInput();
  getCpuInput();
  setCpuInput();
  compareUserCpuChoice();
  console.log(`Your Score: ${userScore} | Computer Score: ${computerScore}`);
}

function playGame(winsNeeded = 3){
  for (let index = 0; userScore < winsNeeded && computerScore < winsNeeded; index++) {
    console.log(`Round ${index + 1}`);
    playRound();
  }
}

// KING OF THE HILL

// get input from user
// get input from cpu's
// compare inputs from user and cpu

// could add score for each match
// if no score = oddman out 
// unless everybody is tied

function addUserChoiceToArray(){
  kothArray.push(["user",userNumber]);
}

function setCpuChoices(cpus = 2){
  for (let index = 0; index < cpus; index++) {
    kothArray.push([`cpu ${index + 1}`, getCpuInput()]);
  }
}

addUserChoiceToArray();
setCpuChoices();
console.log(kothArray);