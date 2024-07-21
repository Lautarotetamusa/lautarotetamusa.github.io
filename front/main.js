//import { assert } from "console";
import { getRandomWord } from "./api.js";
export class Game {
    word = "";
    lifes;
    coincideces = [];
    guesses = [];
    constructor(word, maxLifes = 3) {
        //assert(maxLifes > 1, "El maximo de vidas no puede ser menor a 1");
        this.lifes = maxLifes;
        if (!word) {
            this.setNewWord(() => { });
        }
        else {
            this.word = normalizeStr(word);
            this.coincideces = Array(this.word.length).fill(false);
        }
    }
    setNewWord(cb) {
        getRandomWord((word, err) => {
            if (err !== null) {
                console.error(err);
                throw new Error(err);
            }
            this.word = normalizeStr(word);
            this.coincideces = Array(this.word.length).fill(false);
            this.guesses = [];
            cb();
        });
    }
    getCoincidences() {
        return this.coincideces;
    }
    getGuesses() {
        return this.guesses;
    }
    alreadyGuessed(letter) {
        return this.guesses.includes(letter);
    }
    getLifes() {
        return this.lifes;
    }
    reset(maxLifes = 3, cb) {
        this.lifes = maxLifes;
        this.setNewWord(cb);
    }
    loss() {
        return this.lifes <= 0;
    }
    win() {
        let win = true;
        for (const c of this.coincideces) {
            win = c && win;
        }
        return win;
    }
    guessWord(word) {
        this.guesses.concat(word.split(''));
        const correct = word == this.word;
        if (!correct)
            this.lifes--;
        return correct;
    }
    isValidLetter(letter) {
        return letter.length === 1 &&
            letter.match(/[a-z]/i) !== null;
    }
    guessLetter(letter) {
        letter = normalizeStr(letter);
        if (this.alreadyGuessed(letter))
            return true;
        if (!this.isValidLetter(letter))
            return false;
        let correct = false;
        this.guesses.push(letter);
        for (let i = 0; i < this.word.length; i++) {
            if (this.word[i] == letter) {
                this.coincideces[i] = true;
                correct = true;
            }
        }
        if (!correct)
            this.lifes--;
        return correct;
    }
}
function normalizeStr(str) {
    return str.normalize('NFD')
        .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, "$1$2")
        .normalize()
        .toLowerCase();
}
