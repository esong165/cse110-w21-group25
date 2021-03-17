describe('Settings Tests', () => {
	beforeEach(() => {
		cy.visit('/source/index.html');
		cy.window().should(window => {
			window.app.settings.pomoDuration = 3000;
			window.app.settings.shortBreakDuration = 1000;
			window.app.settings.longBreakDuration = 2000;
			window.app.timer.notifySettingsChanged();
		});
		cy.get('#current-task').should('have.text', 'No Current Task');
		cy.get('#settings-button').click();
		cy.get('#pomo-duration').select('20:00');
		cy.get('#short-break-duration').select('10:00');
		cy.get('#long-break-duration').select('30:00');
		cy.get('#show-seconds-label').click();
		cy.get('#alarm-sound').select('Alarm');
		cy.get('#volume-slider').invoke('val', 0).trigger('input');
	});

	it('Reset to defaults', () => {
		let startAndWait = ms => {
			cy.get('#timer-button').click();
			cy.wait(ms);
		};
		cy.get('#home-button').click();
		cy.get('#time-remaining').should('have.text', '20');
		cy.get('#settings-button').click();
		cy.get('#reset-settings').click();

		cy.get('#pomo-duration').find('option:selected').should('have.text', '25:00');
		cy.get('#short-break-duration').find('option:selected').should('have.text', '5:00');
		cy.get('#long-break-duration').find('option:selected').should('have.text', '15:00');
		cy.get('#show-seconds').should('be.checked');
		cy.get('#alarm-sound').find('option:selected').should('have.text', 'Beeping');
		cy.get('#volume-slider').should('have.value', '100');

		cy.get('#home-button').click();

		cy.get('#alarm').should('have.prop', 'src').then(src => {
			expect(src).to.contain('sounds/beeping.mp3');
		});
		cy.get('#alarm').should('have.prop', 'volume', 1);

		cy.get('#time-remaining').should('have.text', '25:00');
		startAndWait(3300);
		cy.get('#time-remaining').should('have.text', '5:00');
		startAndWait(1300);

		startAndWait(3300);
		startAndWait(1300);

		startAndWait(3300);
		startAndWait(1300);

		startAndWait(3300);
		cy.get('#time-remaining').should('have.text', '15:00');
	});
});
