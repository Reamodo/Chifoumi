let userScore = 0;
let  computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const alien_div = document.getElementById('a');
const man_div = document.getElementById('h');
const robot_div = document.getElementById('r');

function getComputerChoice() {
    const choices = ['a', 'h', 'r'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "a") return "Alien";
    if (letter === "h") return "Human";
    if (letter === "r") return "Robot";
} 

function win(userChoice, computerChoice){
    const smallUserWord = "[you]".fontsize(5).sub();
    const smallCompWord = "[I.A.]".fontsize(5).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  beats ${convertToWord(computerChoice)}${smallCompWord}  !</br> YOU FUCKIIING WIN BRO !`;
    userChoice_div.classList.add('green-glow')
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
};

function lose(userChoice, computerChoice){
    const smallUserWord = "[you]".fontsize(5).sub();
    const smallCompWord = "[I.A.]".fontsize(5).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  loses to ${convertToWord(computerChoice)}${smallCompWord}  !</br> YOU LOST SUCKER !`;
    userChoice_div.classList.add('red-glow')
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
};

function draw(userChoice, computerChoice){
    const smallUserWord = "[you]".fontsize(5).sub();
    const smallCompWord = "[I.A.]".fontsize(5).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  equals ${convertToWord(computerChoice)}${smallCompWord}  !</br> DR DR DR DRAAAAWWWWWW !`;
    userChoice_div.classList.add('grey-glow')
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 500);
};

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "ah":
        case "hr":
        case "ra":
            win(userChoice, computerChoice);
            break;
        case "ar":
        case "ha":
        case "rh":
            lose(userChoice, computerChoice);
            break;
        case "aa":
        case "hh":
        case "rr":
            draw(userChoice, computerChoice);
            break;
    }
};

function main(){
    alien_div.addEventListener('click', function(){
        game('a');
    });

    man_div.addEventListener('click', function(){
        game('h');
    });

    robot_div.addEventListener('click', function(){
        game('r');
    });
};

main();


