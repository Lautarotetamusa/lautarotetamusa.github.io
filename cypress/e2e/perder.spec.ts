describe('Juego del Ahorcado - Perder el Juego', () => {
    beforeEach(() => {
        cy.visit('https://lautarotetamusa.github.io/front/');
        cy.wait(2000);
        cy.window().then((win) => {
            win.setNewWord('perro');
        });
    });

    it('debería mostrar el mensaje de perder al quedarse sin vidas', () => {
        const wrongLetters = ['x', 'y', 'z', 'a', 'b'];
        for (let letter of wrongLetters) {
            cy.get('#letter-input').type(letter);
            cy.get('#submit-letter').click();
        }

        cy.get('.swal2-title').should('have.text', 'Perdiste :((');
        cy.get('.swal2-html-container').should('contain.text', 'La palabra era: "perro"');
    });
});