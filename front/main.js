//import { assert } from "console";
var Game = /** @class */ (function () {
    function Game(word, maxLifes) {
        //assert(maxLifes > 1, "El maximo de vidas no puede ser menor a 1");
        if (maxLifes === void 0) { maxLifes = 3; }
        this.word = word;
        this.lifes = maxLifes;
        this.coincideces = Array(word.length).fill(false);
        this.guesses = [];
    }
    Game.prototype.getCoincidences = function () {
        return this.coincideces;
    };
    Game.prototype.getGuesses = function () {
        return this.guesses;
    };
    Game.prototype.alreadyGuessed = function (letter) {
        return this.guesses.includes(letter);
    };
    Game.prototype.getLifes = function () {
        return this.lifes;
    };
    Game.prototype.reset = function (maxLifes) {
        if (maxLifes === void 0) { maxLifes = 3; }
        this.lifes = maxLifes;
        this.coincideces = Array(this.word.length).fill(false);
        this.guesses = [];
    };
    Game.prototype.loss = function () {
        return this.lifes <= 0;
    };
    Game.prototype.win = function () {
        var win = true;
        for (var _i = 0, _a = this.coincideces; _i < _a.length; _i++) {
            var c = _a[_i];
            win = c && win;
        }
        return win;
    };
    Game.prototype.guessWord = function (word) {
        this.guesses.concat(word.split(''));
        var correct = word == this.word;
        if (!correct)
            this.lifes--;
        return correct;
    };
    Game.prototype.guessLetter = function (letter) {
        if (this.alreadyGuessed(letter)) {
            return true;
        }
        var correct = false;
        this.guesses.push(letter);
        for (var i = 0; i < this.word.length; i++) {
            if (this.word[i] == letter) {
                this.coincideces[i] = true;
                correct = true;
            }
        }
        if (!correct)
            this.lifes--;
        return correct;
    };
    return Game;
}());
export { Game };
