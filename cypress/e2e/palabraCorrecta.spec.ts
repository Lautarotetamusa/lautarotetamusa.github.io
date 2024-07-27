describe('Juego del Ahorcado - Ganar el Juego', () => {
    beforeEach(() => {
        cy.visit('https://lautarotetamusa.github.io/front/');
        cy.wait(2000);
        cy.window().then((win) => {
            win.setNewWord('perro');
        });
    });

    it('debería mostrar el mensaje de ganar al adivinar la palabra completa', () => {
        const letters = ['p', 'e', 'r', 'o'];
        for (let letter of letters) {
            cy.get('#letter-input').type(letter);
            cy.get('#submit-letter').click();
        }

        cy.get('.swal2-title').should('have.text', 'Ganaste!');
        cy.get('.swal2-html-container').should('contain.text', 'La palabra es: "perro"');
    });
});