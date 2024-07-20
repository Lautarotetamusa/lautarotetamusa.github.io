//import { assert } from "console";

export class Game {
    word: string;

    private lifes: number;
    private coincideces: boolean[];
    private guesses: string[];

    constructor(word: string, maxLifes: number = 3) {
        //assert(maxLifes > 1, "El maximo de vidas no puede ser menor a 1");

        this.word = word;
        this.lifes = maxLifes;

        this.coincideces = Array(word.length).fill(false);
        this.guesses = [];
    }

    getCoincidences(){
        return this.coincideces;
    }
    getGuesses(){
        return this.guesses;
    }
    alreadyGuessed(letter: string){
        return this.guesses.includes(letter);
    }
    getLifes(){
        return this.lifes;
    }

    reset(maxLifes: number = 3){
        this.lifes = maxLifes;
        this.coincideces = Array(this.word.length).fill(false);
        this.guesses = [];
    }

    loss(): boolean {
        return this.lifes <= 0
    }

    win(): boolean {
        let win = true;
        for (const c of this.coincideces) {
            win = c && win;
        }
        return win;
    }

    guessWord(word: string): boolean{
        this.guesses.concat(word.split(''));

        const correct = word == this.word;
        if (!correct) this.lifes--;
        return correct;
    }

    private isValidLetter(letter: string): boolean{
        return  letter.length === 1 && 
                letter.match(/[a-z]/i) !== null;
    }

    guessLetter(letter: string): boolean{
        if (this.alreadyGuessed(letter)) return true;
        if (!this.isValidLetter(letter)) return false; 

        let correct = false;
        this.guesses.push(letter);
        for (let i = 0; i < this.word.length; i++){
            if (this.word[i] == letter){
                this.coincideces[i] = true;
                correct = true;
            }
        }
        if (!correct) this.lifes--;

        return correct;
    }
}
