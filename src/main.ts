import { assert } from "console";

export class Game {
    word: string;
    lifes: number;
    maxLifes: number;
    loss: boolean; 

    constructor(word: string, maxLifes: number = 3) {
        assert(maxLifes > 1, "El maximo de vidas no puede ser menor a 1");

        this.word = word;
        this.maxLifes = maxLifes;
        this.lifes = maxLifes;
        this.loss = false;
    }

    private calcLifes(correct: boolean) {
        if (!correct){
            this.lifes --;
        }
        if (this.lifes == 0){
            this.loss = true;
        }
    }

    arriesgarPalabra(word: string): boolean{
        const correct = word == this.word;
        this.calcLifes(correct);

        return correct;
    }

    arriesgarLetra(char: string): boolean{
        const correct = this.word.includes(char)
        this.calcLifes(correct);

        return correct;
    }
}
