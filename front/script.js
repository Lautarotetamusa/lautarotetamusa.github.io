import { Game } from "./main.js";
const game = new Game("perro");

const lives = document.getElementById("lives");

document.getElementById("submit-letter").addEventListener("click", () => {
    const e = document.getElementById("letter-input")
    game.arriesgarLetra(e.value);
    e.value = ""
    updateLives();
});

function updateLives(){
    lives.innerText = game.lifes;
}
