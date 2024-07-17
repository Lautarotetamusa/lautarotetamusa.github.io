import { Game } from "./main.js";
const game = new Game("perro");

const lives = document.getElementById("lives");
const tries = document.getElementById("guessed-letters");
const wordContainer = document.getElementById("word-container");
const letters = wordContainer.getElementsByClassName("letter");

document.getElementById("submit-letter").addEventListener("click", () => {
    const letterInput = document.getElementById("letter-input");
    game.arriesgarLetra(letterInput.value);
    letterInput.value = ""
    updateLives();
    updateWord();
});

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
