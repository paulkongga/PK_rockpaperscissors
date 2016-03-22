$(document).ready(function(){

// Generates random computer choice
function computerPlay() {
  var randomNum = getRandomInt(0, 2);
  var choices = ["rock", "paper", "scissors"];
  
  computerChoice = choices[randomNum];
}

// Generates random number from range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var player;
var computerChoice;
var result;

$(".play-button").click(userClick);
function userClick() {
  $(".play-button").slideUp();
  $(".game-container").slideDown();
  computerPlay();
}

$(".play-again").click(againButton);
function againButton() {
  again();
  $(".results-container").slideDown();
  $(".choices-container").slideDown();    
  computerPlay();
}  

// this function clears out the text whenever the user wants to play again.
function again() {
  $(".user-choice").text("");
  $(".computer-choice").text("");
  $(".results").text("");
}

$(".rock").click(rockButton)
function rockButton() {
  player = "rock";
  result();
}

$(".paper").click(paperButton)
function paperButton() {
  player = "paper";
  result();
}

$(".scissors").click(scissorsButton)
function scissorsButton() {
  player = "scissors";
  result();
}

function result() {
  
  //If the player's choice matched with the computer's choice, display the result "It's a tie!"
  if (player === computerChoice) {
    result = "It's a tie!";
  }

  //If the player picked rock and the computer picked paper, display the result "Computer wins!", otherwise, if the computer picked scissors, display the result "you win!"
  else if (player === "rock") {
    if (computerChoice === "paper") {
      result = "Computer wins!";
    }
    else {
      result = "You win!";
    }

    //If the player picked paper and the computer picked scissors, display the result "Computer wins!", otherwise, if the computer picked rock, display the result "you win!"
  }
  else if (player === "paper") {
    if (computerChoice === "scissors") {
      result = "Computer wins!";
    }
    else {
      result = "You win!";
    }    

    //If the player picked scissors and the computer picked rock, display the result "Computer wins!", otherwise, if the computer picked paper, display the result "you win!"
  }
  else if (player === "scissors") {
    if (computerChoice === "rock") {
      result = "Computer wins!";
    }
    else {
      result = "You win!";
    }    
  }
  
  //this is to display the outcome of the game
  $(".user-choice").text(player);
  $(".computer-choice	").text(computerChoice);
  $(".results").text(result);  
  $(".choices-container").slideUp();
  $(".results-container").slideDown();
 

}


});