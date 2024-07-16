"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Game = /** @class */ (function () {
    function Game(word, maxLifes) {
        if (maxLifes === void 0) { maxLifes = 3; }
        this.word = word;
        this.maxLifes = maxLifes;
        this.lifes = maxLifes;
        this.loss = false;
        this.coincideces = Array(word.length).fill(false);
    }
    Game.prototype.calcLifes = function (correct) {
        if (!correct) {
            this.lifes--;
        }
        if (this.lifes == 0) {
            this.loss = true;
        }
    };
    Game.prototype.win = function () {
        var win = true;
        for (var _i = 0, _a = this.coincideces; _i < _a.length; _i++) {
            var c = _a[_i];
            win = c && win;
        }
        return win;
    };
    Game.prototype.arriesgarPalabra = function (word) {
        var correct = word == this.word;
        this.calcLifes(correct);
        return correct;
    };
    Game.prototype.arriesgarLetra = function (char) {
        var correct = false;
        for (var i = 0; i < this.word.length; i++) {
            if (this.word[i] == char) {
                this.coincideces[i] = true;
                correct = true;
            }
        }
        this.calcLifes(correct);
        return correct;
    };
    return Game;
}());
exports.Game = Game;
