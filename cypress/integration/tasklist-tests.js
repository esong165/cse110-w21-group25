describe('Tasklist Tests', () => {
	beforeEach(() => {
		cy.visit('https://esong165.github.io/cse110-w21-group25/');
	});

	it('Add One Task', () => {
		cy.get('#task-list-button').click();
		cy.get('#new-task-name').clear().type('Simple Task');
		cy.get('#new-task-count').clear().type('3');
		cy.get('#add-task-btn').click();
		cy.get('#tasks-container').should('have.length', 1);
		cy.get('#tasks-container').children().eq(0).as('task');
		cy.get('@task').shadow().children().first().children().eq(0).should('have.innerHTML', 'Simple Task');
	});
});