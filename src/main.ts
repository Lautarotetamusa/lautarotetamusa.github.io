import { assert } from "console";

export class Game {
    word: string;
    vidas: number;
    vidasMax: number;
    perdio: boolean; 

    constructor(word: string, vidasMax: number = 3) {
        assert(vidasMax > 1, "El maximo de vidas no puede ser menor a 1");

        this.word = word;
        this.vidasMax = vidasMax;
        this.vidas = vidasMax;
        this.perdio = false;
    }

    arriesgarPalabra(word: string): boolean{
        const correct = word == this.word;
        if (!correct){
            this.vidas --;
        }
        if (this.vidas == 0){
            this.perdio = true;
        }

        return correct;
    }
}
