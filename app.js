// for scoring 
let userScore = 0;
let comScore = 0;

// caching the DOM => storing html elements for future use 
const userScore_span = document.getElementById("user-score");
const comScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];

    //get random chioce out of these...
    // random() given random numebr betwee n 0 and 1...
    const randomNo = Math.floor((Math.random() * 3)); // we'll get random no. excluding 3
    return choices[randomNo];
}
function convertToWord(letter){

    if(letter == 'r') return "Rock";
    else if(letter == 'p') return "Paper";
    else return "Scissors";

}

function win(user, computer){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "computer".fontsize(3).sub();
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord} - You WIN !!!`;

    document.getElementById(user).classList.add("green-glow");
    setTimeout(function() { document.getElementById(user).classList.remove("green-glow")},1000);

}
function lose(user, computer){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "computer".fontsize(3).sub();
    comScore++;
    comScore_span.innerHTML = comScore;
    result_div.innerHTML = `${convertToWord(user)}${smallUserWord} beaten by    ${convertToWord(computer)}${smallCompWord} - You LOST !!!`; // another way of printing without too much + and "" 
    document.getElementById(user).classList.add("red-glow");
    setTimeout(function() { document.getElementById(user).classList.remove("red-glow")},1000);
}
function draw(user,computer){
    result_div.innerHTML = "It's a DRAW...";
    document.getElementById(user).classList.add("blue-glow");
    setTimeout(function() { document.getElementById(user).classList.remove("blue-glow")},1000);

}

function game(userChoice){
    const computerChoice = getComputerChoice();
    //console.log(userChoice+computerChoice);
    // analyse all the cases of win and lose....
    switch(userChoice + computerChoice) {
        case "rs" : 
        case "pr" : 
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp" : 
        case "ps" :
        case "sr" :
            lose(userChoice,computerChoice);
            break;
        case "rr" : 
        case "pp" :
        case "ss" :
            draw(userChoice,computerChoice);
            break;
    } 

}

function main(){
    rock_div.addEventListener('click', function() {
        game("r");
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissors_div.addEventListener('click', function() {
        game("s");
    })

}

main();
