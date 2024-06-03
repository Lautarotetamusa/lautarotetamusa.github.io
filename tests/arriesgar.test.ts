import {describe, expect, test} from '@jest/globals';
import { assert } from 'console';
import {Game} from "../src/main";

test('Acierta la palabra', function () {
    const game = new Game("perro");
    
    expect(game.arriesgarPalabra("perro")).toBeTruthy();
});

test('No acierta la palabra', function () {
    const game = new Game("casa");
    
    expect(game.arriesgarPalabra("perro")).toBeFalsy();
});
