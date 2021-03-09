describe('Tasklist Tests', () => {
	beforeEach(() => {
		cy.visit('/source/index.html');
	});

	it('Add One Task', () => {
		cy.get('#task-list-button').click();
		cy.get('#new-task-name').clear().type('Simple Task');
		cy.get('#new-task-count').clear().type('3');
		cy.get('#add-task-btn').click();
		cy.get('#tasks-container').should('have.length', 1);
		cy.get('#tasks-container').children().eq(0).as('task');
		cy.get('@task').then($el => { expect($el).to.have.id('_Simple Task'); });
		cy.get('@task').shadow().children().first().children().eq(0).should('have.text', 'Simple Task');
		cy.get('@task').shadow().children().first().children().eq(1).should('have.text', '3');
		cy.get('@task').then($el => { expect($el.get(0).currPomos).to.eq(0); });
	});
});
