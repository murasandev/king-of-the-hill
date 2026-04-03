// objective of king of the hill
// be the last man standing

// start with 3 players
// rock paper scissor until oddman eliminated
// ex: two rocks one scissor / scissor is eliminated

// once down to 2 players
// rock paper scissors
// best of 5 is the king
let userInput;
let userNumber;
let userScore = 0;

let computerRandomNumber;
let computerChoice;
let computerScore = 0;

let kothArray = [];

const btnContainer = document.querySelector("#btn-container");
const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissor = document.querySelector(".btn-scissor");

const btnPlayAgain = document.querySelector(".btn-play-again");
btnPlayAgain.style.display = "none";

btnRock.addEventListener("click", (e) => {
  setUserInput("rock");
  playRound();
});

btnPaper.addEventListener("click", (e) => {
  setUserInput("paper");
  playRound();
});

btnScissor.addEventListener("click", (e) => {
  setUserInput("scissor");
  playRound();
});

const gameTextContainer = document.querySelector(".game-text-container");

function setGameText(string){
  gameTextContainer.textContent = string;
}

const roundTextContainer = document.querySelector(".round-text-container");

function setRoundNumber(round){
roundTextContainer.textContent = `Round ${round}`;
}

// ROCK PAPER SCISSORS
function setUserInput(userChoice){
    switch (userChoice) {
      case "rock":
        userNumber = 0;
        userInput = "rock";
        break;
      case "paper":
        userNumber = 1;
        userInput = "paper";
        break;
      case "scissor":
        userNumber = 2;
        userInput = "scissor";
        break;
      default:
        console.log("Please enter valid input.");
        break;
    }
}

function getCpuInput(max = 3){
  return computerRandomNumber = Math.floor(Math.random() * max);
}

function setCpuInput(){
  switch (computerRandomNumber) {
    case 0:
      computerChoice = "rock";
      break;
    
    case 1:
      computerChoice = "paper";
      break;

    case 2:
      computerChoice = "scissor";
      break;

    default:
      break;
  }
}

const imageContainer = document.querySelector(".image-container");
let outcomeImage = document.createElement("img");
outcomeImage.classList.add("outcome-image");

function setOutcomeImage(winnerChoice){
  switch(winnerChoice){
    case "rock":
      outcomeImage.src = "images/rockBeatScissor.png";
      imageContainer.appendChild(outcomeImage);
      break;
    case "paper":
      outcomeImage.src = "images/paperBeatRock.png";
      imageContainer.appendChild(outcomeImage);
      break;
    case "scissor":
      outcomeImage.src = "images/scissorBeatPaper.png"
      imageContainer.appendChild(outcomeImage);
      break;
  }
}

function setTieImage(userChoice){
  switch(userChoice){
    case "rock":
      outcomeImage.src = "images/rock.png";
      imageContainer.appendChild(outcomeImage);
      break;
    case "paper":
      outcomeImage.src = "images/paper.png";
      imageContainer.appendChild(outcomeImage);
      break;
    case "scissor":
      outcomeImage.src = "images/scissor.png";
      imageContainer.appendChild(outcomeImage);
      break;

  }
}

const userScoreContainer = document.querySelector(".user-score");

function setUserScore(){
  userScoreContainer.textContent = `0${userScore}`;
}

const cpuScoreContainer = document.querySelector(".cpu-score");

function setCpuScore(){
  cpuScoreContainer.textContent = `0${computerScore}`;
}

function compareUserCpuChoice(){
  let outcome = computerRandomNumber - userNumber;
  switch (outcome) {
    case 0:
      console.log(`You chose ${userInput}, CPU chose ${computerChoice}. You tie.`);
      // removeGameText();
      setGameText(`You chose ${userInput}, CPU chose ${computerChoice}. You tie.`);
      setTieImage(userInput);
      break;
    
    case 1:
    case -2:
      console.log(`You chose ${userInput}, CPU chose ${computerChoice}. You lose.`);
      computerScore++;
      // removeGameText();
      setGameText(`You chose ${userInput}, CPU chose ${computerChoice}. You lost this round!`);
      setOutcomeImage(computerChoice);
      setCpuScore();
      break;

    default:
      console.log(`You chose ${userInput}, CPU chose ${computerChoice}. You win.`);
      // removeGameText();
      setGameText(`You chose ${userInput}, CPU chose ${computerChoice}. You won this round!`);
      setOutcomeImage(userInput);
      userScore++;
      setUserScore();
      break;
  }
}

let roundNumber = 1;

function playRound(){
  setRoundNumber(roundNumber);
  getCpuInput();
  setCpuInput();
  compareUserCpuChoice();
  console.log(`Your Score: ${userScore} | Computer Score: ${computerScore}`);
  endGame();
  roundNumber++;
}

function endGame(winsNeeded = 3){
  if(computerScore === winsNeeded || userScore === winsNeeded){
    
    console.log("gameover");
    if (computerScore === winsNeeded) {
      console.log(`gameover computer won! computer score: ${computerScore} | user score: ${userScore}`);
      setGameText(`gameover computer won! computer score: ${computerScore} | user score: ${userScore}`);
    }
    else {
      console.log(`Congrats! you won! computer score: ${computerScore} | user score: ${userScore}`);
      setGameText(`Congrats! you won! computer score: ${computerScore} | user score: ${userScore}`)
    }
    removeBtns();
    btnPlayAgain.style.display = "flex";
  }
}

function removeBtns(){
  btnRock.style.display = "none";
  btnPaper.style.display = "none";
  btnScissor.style.display = "none";
}

btnPlayAgain.addEventListener("click", (e) => {
  playAgain();
})

function playAgain(){
  btnRock.style.display = "flex";
  btnPaper.style.display = "flex";
  btnScissor.style.display = "flex";

  userScore = 0;
  computerScore = 0;

  setUserScore();
  setCpuScore();

  roundNumber = 1;
  setRoundNumber(roundNumber);

  setGameText(`Select Rock, Paper, or Scissor to start!`);
  btnPlayAgain.style.display = "none";
}


// KING OF THE HILL

// get input from user
// get input from cpu's
// compare inputs from user and cpu

// could add score for each match
// if no score = oddman out 
// unless everybody is tied
let totalPlayers = 2;

function addUserChoiceToArray(){
  kothArray.push(["user",userNumber]);
}

function setCpuChoices(cpus = 2){
  for (let index = 0; index < cpus; index++) {
    kothArray.push([`cpu ${index + 1}`, getCpuInput()]);
  }
}

function compareArrayValues(){
  let currUserScore = 0;
  for (let index = 0; index < kothArray.length; index++) {
    for (let y = 0; y < kothArray.length; y++) {
      if(index !== y){
        if (kothArray[index][1] === kothArray[y][1]) {
          currUserScore++;
        }
      }
    }
    kothArray[index][2] = currUserScore;
    currUserScore = 0;
  }
}

// eliminate users with least amount of points
// check array to see if all users have same point total
// if same point total then repeat round
// if not then eliminate all players with least amount of points
let highScore = 0;

function getHighScore(){
  for (let index = 0; index < kothArray.length; index++) {
    if (kothArray[index][2] > highScore) {
      highScore = kothArray[index][2];
    }  
  }
}

function allPlayersTied(){
  if (highScore === 0) {
  //  replay round
  }
}

function eliminateLowScores(){
  for (let index = 0; index < kothArray.length; index++) {
    if (kothArray[index][2] < highScore) {
      console.log(`${kothArray[index]} has been eliminated with a matching score of ${kothArray[index][2]}`);
      totalPlayers--;
      console.log("total playerS: " + totalPlayers);
    }
  }
}

let newArray = [];
function remainingPlayers(){
  for (let index = 0; index < kothArray.length; index++) {
    if (kothArray[index][2] === highScore) {
      newArray.push(kothArray[index]);
      console.log("New Array: " + newArray);
    }
  }
}

function resetKothArray(){
  kothArray = [];
  kothArray = newArray;
  newArray = [];
}

function resetHighScore(){
  highScore = 0;
}

// KOTH Game Loop
// do {
//   getUserInput();
//   addUserChoiceToArray();
//   setCpuChoices(totalPlayers - 1);
//   compareArrayValues();
//   // console.log(kothArray);
//   getHighScore();
//   console.log("high score: " + highScore);
//   eliminateLowScores();
//   // console.log(kothArray);
//   remainingPlayers();
//   resetKothArray();
//   console.log("koth array: " + kothArray);
//   resetHighScore();
//   console.log("total players" + totalPlayers);
// } while (totalPlayers > 2);

// if(totalPlayers < 3){
//   // Gameplay Loop
//   playGame();
// }