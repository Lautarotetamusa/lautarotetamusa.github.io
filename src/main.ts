import { assert } from "console";

export class Game {
    word: string;
    lifes: number;
    maxLifes: number;
    loss: boolean; 

    coincideces: boolean[]

    constructor(word: string, maxLifes: number = 3) {
        assert(maxLifes > 1, "El maximo de vidas no puede ser menor a 1");

        this.word = word;
        this.maxLifes = maxLifes;
        this.lifes = maxLifes;
        this.loss = false;

        this.coincideces = Array(word.length).fill(false)
    }

    private calcLifes(correct: boolean) {
        if (!correct){
            this.lifes --;
        }
        if (this.lifes == 0){
            this.loss = true;
        }
    }

    win(): boolean {
        let win = true;
        for (const c of this.coincideces) {
            win = c && win;
        }
        return win;
    }

    arriesgarPalabra(word: string): boolean{
        const correct = word == this.word;
        this.calcLifes(correct);

        return correct;
    }

    arriesgarLetra(char: string): boolean{
        let correct = false;
        for (let i = 0; i < this.word.length; i++){
            if (this.word[i] == char){
                this.coincideces[i] = true;
                correct = true;
            }
        }
        this.calcLifes(correct);

        return correct;
    }
}
