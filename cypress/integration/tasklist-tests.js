describe('Tasklist Tests', () => {
	beforeEach(() => {
		cy.visit('/source/index.html');
		cy.window().should(window => {
			window.app.settings.pomoDuration = 3000;
			window.app.settings.shortBreakDuration = 1000;
			window.app.settings.longBreakDuration = 2000;
			window.app.timer.notifySettingsChanged();
		});
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

	it('Update CurrPomos', () => {
		cy.get('#task-list-button').click();
		cy.get('#new-task-name').clear().type('A Task');
		cy.get('#new-task-count').clear().type('1');
		cy.get('#add-task-button').click();
		cy.get('#tasks-container').children().eq(0).then($el => { expect($el.get(0).currPomos).to.eq(0) });
		cy.get('#tasks-container').children().eq(0).shadow().children().eq(1).children().eq(0).children().eq(0).click();
		cy.get('#home-button').click();
		cy.get('#timer-button').click();
		cy.wait(3000);
		cy.get('#tasks-container').children().eq(0).then($el => { expect($el.get(0).currPomos).to.eq(1) });
		cy.get('#timer-button').click();
		cy.wait(1000);
		cy.get('#timer-button').click();
		cy.wait(3000);
		cy.get('#tasks-container').children().eq(0).then($el => { expect($el.get(0).currPomos).to.eq(2) });
	});

	it('LocalStorage Access On Reload', () => {
		cy.get('#task-list-button').click();
		cy.get('#new-task-name').clear().type('Small Task');
		cy.get('#new-task-count').clear().type('2');
		cy.get('#add-task-button').click();
		cy.get('#tasks-container').children().eq(0).shadow().children().eq(1).children().eq(0).children().eq(0).click();
		cy.reload();

		cy.get('#tasks-container').children().should('have.length', 1);
		cy.get('#tasks-container').children().eq(0).as('task');
		cy.get('@task').then($el => { expect($el).to.have.id('_Small Task'); });
		cy.get('@task').shadow().children().eq(1).children().eq(0).children().eq(0).should('have.text', 'Small Task');
		cy.get('@task').shadow().children().eq(1).children().eq(0).children().eq(1).should('have.text', '2');
		cy.get('@task').then($el => { expect($el.get(0).currPomos).to.eq(0); });

		cy.get('#tasks-container').then($el => {
			expect($el.get(0).$selected[0]).to.eq('_Small Task');
			expect($el.get(0).$selected[1]).to.eq('2');
			expect($el.get(0).$selected[2]).to.eq(0);
		});
		cy.get('#current-task').should('have.text', 'Small Task');
	});

	it('Add Duplicate Task', () => {
		cy.get('#task-list-button').click();
		cy.get('#new-task-name').clear().type('Duplicate Task');
		cy.get('#new-task-count').clear().type('1');
		cy.get('#add-task-button').click();
		cy.get('#new-task-name').clear().type('Duplicate Task');
		cy.get('#new-task-count').clear().type('1');
		cy.get('#add-task-button').click();
		cy.on('window:alert', $el => { expect($el).to.contains('Task is already in tasklist.'); });
	});

	it('Incorrect Task Name', () => {
		cy.get('#task-list-button').click();
		cy.get('#new-task-name').clear();
		cy.get('#new-task-count').clear().type('1');
		cy.get('#add-task-button').click();
		cy.get('window:alert', $el => { expect($el).to.contains('Please enter a valid task name.'); });
	});

	it('Incorrect Pomo Count', () => {
		cy.get('#task-list-button').click();
		cy.get('#new-task-name').clear().type('task');
		cy.get('#new-task-count').clear().type('31');
		cy.get('#add-task-button').click();
		cy.get('input:invalid').then($el => { expect($el[0].validationMessage).to.eq('Value must be less than or equal to 30.'); });
		cy.get('#new-task-count').clear().type('0');
		cy.get('#add-task-button').click();
		cy.get('input:invalid').then($el => { expect($el[0].validationMessage).to.eq('Value must be greater than or equal to 1.'); });
		cy.get('#new-task-count').clear();
		cy.get('#add-task-button').click();
		cy.get('window:alert', $el => { expect($el).to.contains('Please enter a valid pomo count.'); });
	});
});
