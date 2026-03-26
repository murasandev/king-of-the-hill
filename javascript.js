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
let validUserInput = false;

do {
  let userInput = prompt("Rock, Paper, or Scissor");
  
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
      break;
  }
} while (!validUserInput);

console.log(userInput);