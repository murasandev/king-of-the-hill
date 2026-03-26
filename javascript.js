// objective of king of the hill
// be the last man standing

// start with 3 players
// rock paper scissor until oddman eliminated
// ex: two rocks one scissor / scissor is eliminated

// once down to 2 players
// rock paper scissors
// best of 3 is the king

// test userInput = rock paper or scissors
// if equal than continue
// else re ask prompt
let validUserInput;
let userInput;
let computerChoice;

// Gameplay Loop
getUserInput();
getCpuInput();
setCpuInput();

function getUserInput(){
  do {
    userInput = prompt("Rock, Paper, or Scissor");
    setUserInputToLower(userInput);
    
    switch (userInput) {
      case "rock":
        console.log("You chose rock");
        validUserInput = true;
        break;
      case "paper":
        console.log("you chose paper");
        validUserInput = true;
        break;
      case "scissor":
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
  userInput = string.toLowerCase();
}

function getCpuInput(max = 3){
  computerChoice = Math.floor(Math.random() * max);
  console.log(computerChoice);
}

function setCpuInput(){
  switch (computerChoice) {
    case 0:
      // rock
      console.log("cpu rock");
      break;
    
    case 1:
      // paper
      console.log("cpu paper");
      break;

    case 2:
      // scissor
      console.log("cpu scissor");
      break;

    default:
      break;
  }
}