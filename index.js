var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var userThrow;
var compChoice = ["rock", "paper", "scissors"];
var button = document.getElementById("clear");
var winTally = 0;
var lossTally = 0;
var tieTally = 0;
var winBox = document.getElementById("win_box");
var lossBox = document.getElementById("loss_box");
var tieBox = document.getElementById("tie_box")

rock.addEventListener( "click", function(){
  userThrow = this.id;
  rpsGame(userThrow)
});

paper.addEventListener( "click", function(){
  userThrow = this.id;
  rpsGame(userThrow)
});

scissors.addEventListener( "click", function(){
  userThrow = this.id;
  rpsGame(userThrow)
});

button.addEventListener( "click", function(){
  historyBox = document.getElementById("scroll_box");
  historyBox.textContent = "";
  winner = "clear";
  tally(winner)
});

function rpsGame(userThrow){
  var winner;
  compThrow = compChoice[Math.floor(Math.random()*compChoice.length)];
  if (compThrow == userThrow){
    winner = "Nobody"
  } else if (compThrow == "scissors" && userThrow == "rock"){
    winner = "You"
  } else if (compThrow == "rock" && userThrow == "paper"){
    winner = "You"
  } else if (compThrow == "paper" && userThrow == "scissors"){
    winner = "You"
  } else if (compThrow == "scissors" && userThrow == "paper"){
    winner = "The Computer"
  } else if (compThrow == "rock" && userThrow == "scissors"){
    winner = "The Computer"
  } else if (compThrow == "paper" && userThrow == "rock"){
    winner = "The Computer"
  }; //There should probably be an else here in case of an error, but the else was causing an error ¯\_(ツ)_/¯
  var endText = ["You threw ", userThrow, ". The computer threw ", compThrow, ". ", winner, " won."];
  tally(winner);
  addElement(endText)
};

function addElement(endText){
  var history = document.getElementById("scroll_box");
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode(endText.join(''));
  newDiv.appendChild(newContent);
  history.appendChild(newDiv);
  history.style.visibility = "visible"
};

function tally(winner){
  if (winner == "You") {
    winTally += 1
  } else if (winner == "The Computer") {
    lossTally += 1
  } else if (winner == "Nobody") {
    tieTally += 1
  } else if (winner == "clear") {
    winTally = 0
    tieTally = 0
    lossTally = 0
    document.getElementById("scroll_box").style.visibility = "hidden";
  };
  tallyTotal = winTally + lossTally + tieTally;
  winPercent = Math.floor((winTally / tallyTotal) * 100);
  lossPercent = Math.floor((lossTally / tallyTotal) * 100);
  tiePercent = Math.floor((tieTally / tallyTotal) * 100);
  winBox.innerHTML = "Wins: " + winTally + " - Win Percentage: " + winPercent + "%";
  lossBox.innerHTML = "Losses: " + lossTally + " - Loss Percentage: " + lossPercent + "%";
  tieBox.innerHTML = "Ties: " + tieTally + " - Tie Percentage: " + tiePercent + "%"
}