describe('Juego del Ahorcado - Adivinanza Correcta', () => {
    beforeEach(() => {
        cy.visit('https://lautarotetamusa.github.io/front/');
        cy.wait(2000);
        cy.window().then((win) => {
            win.setNewWord('perro');
        });
    });

    it('debería permitir adivinar una letra correcta', () => {
        cy.get('#letter-input').type('p');
        cy.get('#submit-letter').click();

        cy.get('#word-container .letter').first().should('have.text', 'p');
        cy.get('#lives').should('have.text', '5');
    });
});