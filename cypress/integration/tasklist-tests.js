describe('Tasklist Tests', () => {
	beforeEach(() => {
		cy.visit('/source/index.html');
		cy.clearLocalStorage();
	});

	it('Defaults', () => {
		cy.get('#tasks-container').then($el => {
			expect($el.get(0).$tasks.length).to.eq(0);
			expect($el.get(0).$selected[0]).to.eq('Default');
			expect($el.get(0).$selected[1]).to.eq('1');
			expect($el.get(0).$selected[2]).to.eq('-1');
		});
		cy.get('#current-task').should('have.text', 'Default');
	});

	it('Add A Task', () => {
		cy.get('#task-list-button').click();
		cy.get('#new-task-name').clear().type('Simple Task');
		cy.get('#new-task-count').clear().type('3');
		cy.get('#add-task-button').click();
		cy.get('#tasks-container').children().should('have.length', 1);
		cy.get('#tasks-container').children().eq(0).as('task');
		cy.get('@task').then($el => { expect($el).to.have.id('_Simple Task'); });
		cy.get('@task').shadow().children().eq(1).children().eq(0).children().eq(0).should('have.text', 'Simple Task');
		cy.get('@task').shadow().children().eq(1).children().eq(0).children().eq(1).should('have.text', '3');
		cy.get('@task').then($el => { expect($el.get(0).currPomos).to.eq(0); });
	});

	it('Select A Task', () => {
		cy.get('#task-list-button').click();
		cy.get('#new-task-name').clear().type('New Task');
		cy.get('#new-task-count').clear().type('1');
		cy.get('#add-task-button').click();
		cy.get('#tasks-container').children().eq(0).shadow().children().eq(1).children().eq(0).children().eq(0).click();
		cy.get('#tasks-container').then($el => {
			expect($el.get(0).$selected[0]).to.eq('_New Task');
			expect($el.get(0).$selected[1]).to.eq('1');
			expect($el.get(0).$selected[2]).to.eq(0);
		});
		cy.get('#current-task').should('have.text', 'New Task');
	});

	it('Remove A Task', () => {
		cy.get('#task-list-button').click();
		cy.get('#new-task-name').clear().type('Task');
		cy.get('#new-task-count').clear().type('3');
		cy.get('#add-task-button').click();
		cy.get('#tasks-container').children().eq(0).shadow().children().eq(1).children().eq(1).click();
		cy.get('#tasks-container').then($el => { expect($el.get(0).$tasks.length).to.eq(0); });
		cy.get('#tasks-container').children().should('have.length', 0);
		cy.get('#home-button').click();
		cy.get('#current-task').should('have.text', 'Default');
	});

	it('Remove Selected Task', () => {
		cy.get('#task-list-button').click();
		cy.get('#new-task-name').clear().type('First Task');
		cy.get('#new-task-count').clear().type('3');
		cy.get('#add-task-button').click();
		cy.get('#new-task-name').clear().type('Second Task');
		cy.get('#new-task-count').clear().type('2');
		cy.get('#add-task-button').click();
		cy.get('#tasks-container').children().eq(0).shadow().children().eq(1).children().eq(0).children().eq(0).click();
		cy.get('#task-list-button').click();
		cy.get('#tasks-container').children().eq(0).shadow().children().eq(1).children().eq(1).click();
		cy.get('#tasks-container').children().should('have.length', 1);
		cy.get('#tasks-container').then($el => {
			expect($el.get(0).$selected[0]).to.eq('_Second Task'); 
			expect($el.get(0).$selected[1]).to.eq('2');
			expect($el.get(0).$selected[2]).to.eq(0);
	   });
	   cy.get('#current-task').should('have.text', 'Second Task');
	});
});
