let playerScore = 0;
let computerScore = 0;

const choise = document.getElementById('symbols');
choise.addEventListener('click', game);

  
function getRandomIndex(size){
    return Math.floor(Math.random()*size);    
} 

function computerPlay(){

    let choises = ["rock", "paper", "scissors"];
    return choises[getRandomIndex(choises.length)];

}

function playSingleRound(playerSelection, computerSelection){
     return getRoundResult(playerSelection, computerSelection); 
}

function getRoundResult(playerSelection, computerSelection){

    if(playerSelection==computerSelection){
        document.getElementsByClassName('notifications')[0].innerText = "It's a Tie!";
        return "equal";  
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        document.getElementsByClassName('notifications')[0].innerText = "Winner winner! Rock beats Scissors";
        return "player";
    }    
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        document.getElementsByClassName('notifications')[0].innerText = "Loser Loser! Rock beats Scissors";
        return "computer";
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
        document.getElementsByClassName('notifications')[0].innerText = "Loser Loser! Paper beats Rock";
        return "computer";
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        document.getElementsByClassName('notifications')[0].innerText = "Winner winner! Paper beats Rock";
        return "player";
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        document.getElementsByClassName('notifications')[0].innerText = "Winner Winner! Scissors beat Paper";
        return "player";
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        document.getElementsByClassName('notifications')[0].innerText = "Loser Loser! Scissors beat Paper";
        return "computer";
    }

}

function getChoise(e){

    if(e.target.id=='rock')
        return "rock";
    else if(e.target.id=='paper')
        return "paper";
    else
        return "scissors";
}

function game(e){
    
    let roundWinner;
    let finalWinner;

    let playerSelection = e.target.id;
    let computerSelection = computerPlay();

    console.log(playerSelection);
    console.log(computerSelection);

    roundWinner = playSingleRound(playerSelection, computerSelection);

    if(roundWinner == "player"){
        playerScore++;
    }
    else if(roundWinner == "computer"){
        computerScore++;
    }

    document.getElementById('player').innerText =playerScore;
    document.getElementById('computer').innerText =computerScore;


    if(playerScore==5){
        const blackBlur = document.createElement('div');
        blackBlur.className='popup';
        blackBlur.setAttribute("style","display: block;");
        blackBlur.innerHTML = "<div id="+"reset"+">Congrats, you are the Winner! &#128525; </div>";
        document.getElementsByClassName('container')[0].appendChild(blackBlur);
        console.log("Player");
        blackBlur.addEventListener('click', reset);

    }

    if(computerScore==5){
        const blackBlur = document.createElement('div');
        blackBlur.className='popup';
        blackBlur.setAttribute("style","display: block;");
        blackBlur.innerHTML = "<div id="+"reset"+">Sorry, but you are the Loser! &#128540;</div>";
        document.getElementsByClassName('container')[0].appendChild(blackBlur);
        blackBlur.addEventListener('click', reset);
    }

}

function reset(){
    const popup = document.getElementsByClassName('popup')[0];
    popup.parentNode.removeChild(popup);
    playerScore = 0;
    computerScore = 0;
    document.getElementById('player').innerText =playerScore;
    document.getElementById('computer').innerText =computerScore;
    document.getElementsByClassName('notifications')[0].innerText = "No Result Yet!";
}

