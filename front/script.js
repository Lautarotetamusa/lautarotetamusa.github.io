import { Game } from "./main.js";

const maxLifes = 3;
const game = new Game("perro", maxLifes);

const lives = document.getElementById("lives");
const guesses = document.getElementById("guessed-letters-list");
const wordContainer = document.getElementById("word-container");
const letters = wordContainer.getElementsByClassName("letter");
const letterInput = document.getElementById("letter-input");
const letterBtn = document.getElementById("submit-letter");

resetGame();

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
    game.reset(maxLifes);
    update();
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
