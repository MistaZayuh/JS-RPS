var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var userThrow;
var compChoice = ["Rock", "Paper", "Scissors"];

rock.addEventListener( "click", function(){
  userThrow = this.id;
  return userThrow
});

paper.addEventListener( "click", function(){
  userThrow = this.id;
  return userThrow
});

scissors.addEventListener( "click", function(){
  userThrow = this.id;
  return userThrow
});

rpsGame(){

};