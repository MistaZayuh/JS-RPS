var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var userThrow;
var compChoice = ["rock", "paper", "scissors"];

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
  } //There should probably be an else here in case of an error



  document.getElementById("scroll_box").innerHTML = "You threw " + userThrow + ". The computer threw " + compThrow + ". " + winner + " won."
};