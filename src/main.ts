import { getRandomWord } from "./api";

export class Game {
    word: string = "";

    private lifes: number;
    private coincideces: boolean[] = [];
    private guesses: string[] = [];

    constructor(maxLifes: number = 3) {
        if (maxLifes < 1) throw new Error("El maximo de vidas no puede ser menor a 1");
        this.lifes = maxLifes;
    }

    setRandomWord(cb: Function){
        getRandomWord((word, err) => {
            if (err !== null) {
                console.error(err);
                throw new Error(err);
            }
            this.setWord(word as string); // El error es null entonces word no es null
            cb();
        });
    }

    setWord(word: string){
        if (!word) throw new Error(`La palabra es undefined palabra: ${word}`);
        if (typeof word != "string") throw new Error("La palabra debe ser un string");

        this.word = normalizeStr(word);
        this.coincideces = Array(this.word.length).fill(false);
        this.guesses = [];
    }

    reset(maxLifes: number){
        this.lifes = maxLifes;
        this.setWord(this.word);
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

    guessLetter(letter: string): boolean{
        letter = normalizeStr(letter);

        if (this.alreadyGuessed(letter)) return true;
        if (!isValidLetter(letter)) return false; 

        let correct = false;
        this.guesses.push(letter);
        for (let i = 0; i < this.word.length; i++){
            if (this.word[i] == letter){
                this.coincideces[i] = true;
                correct = true;
            }
        }

        return correct;
    }
}

function normalizeStr(str: string){
    return str.normalize('NFD')
        .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2")
        .normalize()
        .toLowerCase();
}

function isValidLetter(letter: string): boolean{
    return letter.length === 1 && 
           letter.match(/[a-z]/i) !== null;
}
