let choices = document.querySelectorAll(".choice");
let message = document.querySelector(".msg");
let body = document.querySelector("body");
body.style.backgroundColor = "#FAFAD2";

let userScore = 0;
let compScore = 0;
let compS = document.querySelector(".comp-score");
let userS = document.querySelector(".user-score");

const showWinner= (userWin, compChoice, userChoice) =>{
    if(userWin){
        userScore++;
        userS.innerText = `${userScore}`;
        message.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "green";
    }else{
        compScore++;
        compS.innerText = `${compScore}`;
        message.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "#fd5c63";
    }
}

let getcompChoice = () =>{
    let choices = ["rock", "paper", "scissor"];
    let choice = Math.floor(Math.random()*3);
    return choices[choice];
}

const drawGame = () =>{
    message.innerText = "Game was Draw, play Again!";
    message.style.backgroundColor = "#5f9ea0";
}

let playGame = (userChoice) =>{
    const compChoice = getcompChoice();
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
           userWin = compChoice === "paper"? false : true;
        }
        else if(userChoice === "paper"){
           userWin = compChoice === "scissor"? false : true;
        }
        else{
            userWin = compChoice === "rock"? false : true;
        }

        showWinner(userWin, compChoice, userChoice);
    }
}
choices.forEach(choice => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});