export class Game {
    word: string;

    constructor(word: string) {
        this.word = word;
    }

    arriesgarPalabra(word: string): boolean{
        return word == this.word;
    }
}
