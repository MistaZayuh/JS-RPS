var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var userThrow;
var compChoice = ["rock", "paper", "scissors"];
var button = document.getElementById("clear");

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
  historyBox = document.getElementById("scroll_box")
  historyBox.textContent = ""
});

function rpsGame(userThrow){
  var winner;
  compThrow = compChoice[Math.floor(Math.random()*compChoice.length)];
  if (compThrow == userThrow){
    winner = "Nobody";
  } else if (compThrow == "scissors" && userThrow == "rock"){
    winner = "You";
  } else if (compThrow == "rock" && userThrow == "paper"){
    winner = "You";
  } else if (compThrow == "paper" && userThrow == "scissors"){
    winner = "You";
  } else if (compThrow == "scissors" && userThrow == "paper"){
    winner = "The Computer";
  } else if (compThrow == "rock" && userThrow == "scissors"){
    winner = "The Computer";
  } else if (compThrow == "paper" && userThrow == "rock"){
    winner = "The Computer";
  } //There should probably be an else here in case of an error, but the else was causing an error ¯\_(ツ)_/¯

  var history = document.getElementById("scroll_box");
  history.textContent += "You threw " + userThrow + ".\n The computer threw " + compThrow + ".\n " + winner + " won.\n" 
};