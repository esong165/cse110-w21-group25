describe('Timer tests', () => {
	beforeEach(() => {
		cy.visit('/source/index.html');
		cy.window().should(window => {
			window.app.settings.pomoTime = 3000;
			window.app.settings.shortBreakTime = 1000;
			window.app.settings.longBreakTime = 2000;
			window.app.timer.notifySettingsChanged();
		})
	});

	it('Full timer cycle', () => {
		cy.get('#time-remaining').should('have.text', '00:03');
		cy.get('#timer-state-message').should('have.text', 'Long break in 3 pomos.');
		cy.get('#timer-button').should('have.text', 'Start Pomo');
		cy.get('#timer-button').should('be.enabled');
		cy.get('#timer-button').click();
		cy.wait(1000);
		cy.get('#timer-state-message').should('have.text', 'Long break in 3 pomos.');
		cy.get('#timer-button').should('have.text', 'Cancel Pomo');
		cy.get('#timer-button').should('be.enabled');
		cy.wait(3000);
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

		cy.get('#time-remaining').should('have.text', '00:03');
		cy.get('#timer-state-message').should('have.text', 'Long break in 2 pomos.');
		cy.get('#timer-button').should('have.text', 'Start Pomo');
		cy.get('#timer-button').should('be.enabled');
		cy.get('#timer-button').click();
		cy.wait(1000);
		cy.get('#timer-state-message').should('have.text', 'Long break in 2 pomos.');
		cy.get('#timer-button').should('have.text', 'Cancel Pomo');
		cy.get('#timer-button').should('be.enabled');
		cy.wait(3000);
		cy.get('#time-remaining').should('have.text', '00:01');
		cy.get('#timer-state-message').should('have.text', 'Take a short break.');
		cy.get('#timer-button').should('have.text', 'Start Short Break');
		cy.get('#timer-button').should('be.enabled');
		cy.get('#timer-button').click();
		cy.wait(500);
		cy.get('#timer-state-message').should('have.text', 'Taking a short break.');
		cy.get('#timer-button').should('have.text', 'Start Short Break');
		cy.get('#timer-button').should('be.disabled');
		cy.wait(1000);

		cy.get('#time-remaining').should('have.text', '00:03');
		cy.get('#timer-state-message').should('have.text', 'Long break in 1 pomo.');
		cy.get('#timer-button').should('have.text', 'Start Pomo');
		cy.get('#timer-button').should('be.enabled');
		cy.get('#timer-button').click();
		cy.wait(1000);
		cy.get('#timer-state-message').should('have.text', 'Long break in 1 pomo.');
		cy.get('#timer-button').should('have.text', 'Cancel Pomo');
		cy.get('#timer-button').should('be.enabled');
		cy.wait(3000);
		cy.get('#time-remaining').should('have.text', '00:01');
		cy.get('#timer-state-message').should('have.text', 'Take a short break.');
		cy.get('#timer-button').should('have.text', 'Start Short Break');
		cy.get('#timer-button').should('be.enabled');
		cy.get('#timer-button').click();
		cy.wait(500);
		cy.get('#timer-state-message').should('have.text', 'Taking a short break.');
		cy.get('#timer-button').should('have.text', 'Start Short Break');
		cy.get('#timer-button').should('be.disabled');
		cy.wait(1000);

		cy.get('#time-remaining').should('have.text', '00:03');
		cy.get('#timer-state-message').should('have.text', 'Long break coming up!');
		cy.get('#timer-button').should('have.text', 'Start Pomo');
		cy.get('#timer-button').should('be.enabled');
		cy.get('#timer-button').click();
		cy.wait(1000);
		cy.get('#timer-state-message').should('have.text', 'Long break coming up!');
		cy.get('#timer-button').should('have.text', 'Cancel Pomo');
		cy.get('#timer-button').should('be.enabled');
		cy.wait(3000);
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

		cy.get('#time-remaining').should('have.text', '00:03');
		cy.get('#timer-state-message').should('have.text', 'Long break in 3 pomos.');
		cy.get('#timer-button').should('have.text', 'Start Pomo');
		cy.get('#timer-button').should('be.enabled');
	});
});
