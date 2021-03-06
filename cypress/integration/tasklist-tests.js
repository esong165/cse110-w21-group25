describe('Tasklist Tests', () => {
	beforeEach(() => {
		cy.visit('https://esong165.github.io/cse110-w21-group25/');
	});

	it('Add One Task', () => {
		cy.get('#task-list-button').click();
		cy.get('#new-task-name').clear().type('Simple Task');
		cy.get('#new-task-count').clear().type('3');
		cy.get('#add-task-btn').click();
		cy.get('#tasks-container').then($el => { expect($el).$tasks[0].to.eq('Simple Task') });
		cy.get('#tasks-container').then($el => { expect($el).$tasks[1].to.have.value(3) });
		cy.get('#tasks-container').then($el => { expect($el).$tasks[2].to.have.value(0) });

		cy.get('#tasks-container').then($el => 
			{ expect($el.children[0].shadowRoot[0].children[0].children[0].innerHTML).to.eq('Simple Task') });
		cy.get('#tasks-container').then($el => 
			{ expect($el.children[0].shadowRoot[0].children[0].children[1].innerHTML).to.have.value(3) });
		cy.get('#tasks-container').then($el => { expect($el.children[0].currPomos).to.have.value(0) });
	});
});