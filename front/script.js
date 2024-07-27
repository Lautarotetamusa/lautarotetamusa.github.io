import { Game } from "./main.js";

const maxLifes = 5;
const game = new Game(() => {
    update();
    setupWord();
}, undefined, maxLifes);

window.setTestWord = (word) => {
    game.word = word;
    update();
    setupWord();
};

const lives = document.getElementById("lives");
const guesses = document.getElementById("guessed-letters-list");
const wordContainer = document.getElementById("word-container");
const letters = wordContainer.getElementsByClassName("letter");
const letterInput = document.getElementById("letter-input");
const letterBtn = document.getElementById("submit-letter");

const winAlert = (word) => {
    return{
        title: "Ganaste!",
        text: `La palabra es: "${word}"`,
        icon: "success"
}}

const lossAlert = (word) => {
    return{
        title: "Perdiste :((",
        text: `La palabra era: "${word}"`,
        icon: "error"
}}

letterBtn.addEventListener("click", () => {
    const letterInput = document.getElementById("letter-input");
    game.guessLetter(letterInput.value);
    update();

    if (game.win()){
        Swal.fire(winAlert(game.word));
        resetGame();
    }else if(game.loss()){
        Swal.fire(lossAlert(game.word));
        resetGame();
    }

    letterInput.value = ""
});

letterInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    letterBtn.click();
  }
}); 

document.getElementById("reset-button").addEventListener("click", () => {
    console.log("click");
    resetGame();
});

function resetGame(){
    game.reset(maxLifes, () => {
        update();
        setupWord();
    });
}

function update(){
    updateLives();
    updateWord();
    updateGuesses();
}

function updateGuesses(){
    if (game.getGuesses().length > 0){
        guesses.innerHTML = game.getGuesses().join(', ');
    }else{
        guesses.innerHTML = '-';
    }
}

function setupWord(){
    wordContainer.innerHTML = '';

    for (const _ in game.word) {
        var span = document.createElement("span");
        span.className = "letter";
        span.innerHTML = "_";
        wordContainer.appendChild(span);
    }
}

function updateLives(){
    lives.innerText = game.lifes;
}

function updateWord(){
    let i = 0;
    for (const letterElement of letters){
        letterElement.innerHTML = game.coincideces[i] ? game.word[i] : '_';
        i ++;
    }
}
