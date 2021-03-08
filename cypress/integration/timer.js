describe('Timer tests', () => {
	beforeEach(() => {
		cy.visit('/source/index.html');
		cy.window().then(window => {
			window.app.settings.pomoTime = 3000;
			window.app.settings.shortBreakTime = 1000;
			window.app.settings.longBreakTime = 2000;
			window.app.timer.notifySettingsChanged();
		})
	});

	it('Full timer cycle', () => {
		cy.get('#time-remaining').then(timeRemaining => {
			expect(timeRemaining).to.have.value('00:03');
		});
		cy.get('#time-state-message').then(stateMessage => {
			expect(stateMessage).to.have.value('Long break in 3 pomos.');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.have.value('Start Pomo');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.be.enabled;
		});
		cy.get('#timer-button').click();
		cy.wait(1000);
		cy.get('#time-state-message').then(stateMessage => {
			expect(stateMessage).to.have.value('Long break in 3 pomos.');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.have.value('Cancel Pomo');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.be.enabled;
		});
		cy.wait(3000);
		cy.get('#time-remaining').then(timeRemaining => {
			expect(timeRemaining).to.have.value('00:01');
		});
		cy.get('#time-state-message').then(stateMessage => {
			expect(stateMessage).to.have.value('Taking a short break.');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.have.value('Start Short Break');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.be.enabled;
		});
		cy.get('#timer-button').click();
		cy.wait(500);
		cy.get('#time-state-message').then(stateMessage => {
			expect(stateMessage).to.have.value('Taking a short break.');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.have.value('Start Short Break');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.be.disabled;
		});
		cy.wait(1000);

		cy.get('#time-remaining').then(timeRemaining => {
			expect(timeRemaining).to.have.value('00:03');
		});
		cy.get('#time-state-message').then(stateMessage => {
			expect(stateMessage).to.have.value('Long break in 2 pomos.');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.have.value('Start Pomo');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.be.enabled;
		});
		cy.get('#timer-button').click();
		cy.wait(1000);
		cy.get('#time-state-message').then(stateMessage => {
			expect(stateMessage).to.have.value('Long break in 2 pomos.');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.have.value('Cancel Pomo');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.be.enabled;
		});
		cy.wait(3000);
		cy.get('#time-remaining').then(timeRemaining => {
			expect(timeRemaining).to.have.value('00:01');
		});
		cy.get('#time-state-message').then(stateMessage => {
			expect(stateMessage).to.have.value('Taking a short break.');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.have.value('Start Short Break');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.be.enabled;
		});
		cy.get('#timer-button').click();
		cy.wait(500);
		cy.get('#time-state-message').then(stateMessage => {
			expect(stateMessage).to.have.value('Taking a short break.');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.have.value('Start Short Break');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.be.disabled;
		});
		cy.wait(1000);

		cy.get('#time-remaining').then(timeRemaining => {
			expect(timeRemaining).to.have.value('00:03');
		});
		cy.get('#time-state-message').then(stateMessage => {
			expect(stateMessage).to.have.value('Long break in 1 pomo.');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.have.value('Start Pomo');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.be.enabled;
		});
		cy.get('#timer-button').click();
		cy.wait(1000);
		cy.get('#time-state-message').then(stateMessage => {
			expect(stateMessage).to.have.value('Long break in 1 pomo.');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.have.value('Cancel Pomo');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.be.enabled;
		});
		cy.wait(3000);
		cy.get('#time-remaining').then(timeRemaining => {
			expect(timeRemaining).to.have.value('00:01');
		});
		cy.get('#time-state-message').then(stateMessage => {
			expect(stateMessage).to.have.value('Taking a short break.');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.have.value('Start Short Break');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.be.enabled;
		});
		cy.get('#timer-button').click();
		cy.wait(500);
		cy.get('#time-state-message').then(stateMessage => {
			expect(stateMessage).to.have.value('Taking a short break.');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.have.value('Start Short Break');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.be.disabled;
		});
		cy.wait(1000);

		cy.get('#time-remaining').then(timeRemaining => {
			expect(timeRemaining).to.have.value('00:03');
		});
		cy.get('#time-state-message').then(stateMessage => {
			expect(stateMessage).to.have.value('Long break coming up!');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.have.value('Start Pomo');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.be.enabled;
		});
		cy.get('#timer-button').click();
		cy.wait(1000);
		cy.get('#time-state-message').then(stateMessage => {
			expect(stateMessage).to.have.value('Long break coming up!');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.have.value('Cancel Pomo');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.be.enabled;
		});
		cy.wait(3000);
		cy.get('#time-remaining').then(timeRemaining => {
			expect(timeRemaining).to.have.value('00:02');
		});
		cy.get('#time-state-message').then(stateMessage => {
			expect(stateMessage).to.have.value('Taking a long break.');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.have.value('Start Long Break');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.be.enabled;
		});
		cy.get('#timer-button').click();
		cy.wait(500);
		cy.get('#time-state-message').then(stateMessage => {
			expect(stateMessage).to.have.value('Taking a long break.');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.have.value('Start Long Break');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.be.disabled;
		});
		cy.wait(2000);

		cy.get('#time-remaining').then(timeRemaining => {
			expect(timeRemaining).to.have.value('00:03');
		});
		cy.get('#time-state-message').then(stateMessage => {
			expect(stateMessage).to.have.value('Long break in 3 pomos.');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.have.value('Start Pomo');
		});
		cy.get('#timer-button').then(button => {
			expect(button).to.be.enabled;
		});
	});
});
