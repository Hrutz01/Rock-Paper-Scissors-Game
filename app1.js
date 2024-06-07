// this are global variables use in every function....
let userscore = 0;
let comscore = 0;
let userChoice;
let CompChoice;

// access of all div
const choices = document.querySelectorAll(".choice");
// access of message
const msg = document.querySelector("#msg");
// access of user and computer score para
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#com-score");
// here we decide the winner (either computer or user)
const showwinner = (userwin) => {
  if (userwin) {
    userscore++;
    userscorepara.innerText = userscore;
    console.log(userChoice);
    msg.innerText = `You Win! Your ${userChoice} beats ${CompChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    comscore++;

    compscorepara.innerText = comscore;
    console.log("comp win");
    msg.innerText = `You Lose! Computer ${CompChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
// code for draw game condition
const drawgame = () => {
  console.log("game is draw");
  msg.innerText = "Game Draw";
  msg.style.backgroundColor = blue;
};

// here we accept computer choice by applying logic of Math.rando() function
const getcomchoice = () => {
  // rock paper scissors
  const options = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return options[index];
};

// here we actually play the game and call the showwinner function
const playgame = (userchoice) => {
  console.log("user choice ", userchoice);
  // now we have user choice, its time to decide computers choice
  // generate computer choice

  CompChoice = getcomchoice();
  console.log("comchoice", CompChoice);

  // who wins?
  // draw game

  if (CompChoice == userchoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice == "rock") {
      // scissors or paper

      userwin = CompChoice === "paper" ? false : true;
    } else if (userchoice == "paper") {
      //compchoice =  rock or scissors
      userwin = CompChoice === "scissors" ? false : true;
    } else {
      // userchoice = scissor....
      // compchoice = rock or paper
      userwin = CompChoice === "rock" ? false : true;
    }
    showwinner(userwin);
  }
};

// here we iterate over all three divs and add eventlistner click...
// we get user choice by getting attribute value and then pass to playgame() function
choices.forEach((Choice) => {
  Choice.addEventListener("click", () => {
    userChoice = Choice.getAttribute("id");
    playgame(userChoice);
  });
});
