describe('Timer tests', () => {
	beforeEach(() => {
		cy.visit('/source/index.html');
		cy.window().should(window => {
			window.app.settings.pomoDuration = 3000;
			window.app.settings.shortBreakDuration = 1000;
			window.app.settings.longBreakDuration = 2000;
			window.app.timer.notifySettingsChanged();
		});
	});

	it('Full timer cycle', () => {
		const pomo = stateMessage => {
			cy.get('#time-remaining').should('have.text', '00:03');
			cy.get('#timer-state-message').should('have.text', stateMessage);
			cy.get('#timer-button').should('have.text', 'Start Pomo');
			cy.get('#timer-button').should('be.enabled');
			cy.get('#timer-button').click();
			cy.wait(1000);
			cy.get('#timer-state-message').should('have.text', stateMessage);
			cy.get('#timer-button').should('have.text', 'Cancel Pomo');
			cy.get('#timer-button').should('be.enabled');
			cy.wait(3000);
		};
		const shortBreak = () => {
			cy.get('#time-remaining').should('have.text', '00:01');
			cy.get('#timer-state-message').should('have.text', 'Take a short break.');
			cy.get('#timer-button').should('have.text', 'Start Short Break');
			cy.get('#timer-button').should('be.enabled');
			cy.get('#timer-button').click();
			cy.wait(500);
			cy.get('#timer-state-message').should('have.text', 'Taking a short break.');
			cy.get('#timer-button').should('have.text', 'Start Short Break');
			cy.get('#timer-button').should('be.disabled');
			cy.wait(3000);
		};
		const longBreak = () => {
			cy.get('#time-remaining').should('have.text', '00:02');
			cy.get('#timer-state-message').should('have.text', 'Take a long break.');
			cy.get('#timer-button').should('have.text', 'Start Long Break');
			cy.get('#timer-button').should('be.enabled');
			cy.get('#timer-button').click();
			cy.wait(500);
			cy.get('#timer-state-message').should('have.text', 'Taking a long break.');
			cy.get('#timer-button').should('have.text', 'Start Long Break');
			cy.get('#timer-button').should('be.disabled');
			cy.wait(2000);
		};

		pomo('Long break in 3 pomos.');
		shortBreak();
		pomo('Long break in 2 pomos.');
		shortBreak();
		pomo('Long break in 1 pomo.');
		shortBreak();
		pomo('Long break coming up!');
		longBreak();
		pomo('Long break in 3 pomos.');
	});
});
