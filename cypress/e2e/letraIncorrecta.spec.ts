describe('Juego del Ahorcado - Adivinanza Incorrecta', () => {
    beforeEach(() => {
        cy.visit('https://lautarotetamusa.github.io/front/');
        cy.wait(2000);
        cy.window().then((win) => {
            win.setNewWord('perro'); // Configurar la palabra del juego
        });
    });

    it('debería reducir las vidas al adivinar una letra incorrecta', () => {
        cy.get('#letter-input').type('x');
        cy.get('#submit-letter').click();
        cy.get('#lives').should('have.text', '4');
    });
});