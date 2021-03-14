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

	it('Notification support', () => {
		cy.window().should('have.property', 'Notification').should('be.a', 'function');
	});

	it('No notification support', () => {
		cy.visit('/source/index.html', {
			onBeforeLoad(window) {
				delete window.Notification;
			}
		});
		cy.window().should(window => {
			window.app.settings.pomoDuration = 1000;
			window.app.timer.notifySettingsChanged();
		});
		cy.on('window:alert', cy.stub().as('alerted'));
		cy.get('#timer-button').click();
		cy.wait(1000);
		cy.get('@alerted').should('have.been.calledOnce').and('have.been.calledWith',
			'This browser does not support desktop notification.');
	});

	it('Test notifications when permission is granted', () => {
		cy.visit('/source/index.html', {
			onBeforeLoad(window) {
				cy.stub(window.Notification, 'permission', 'granted');
				cy.stub(window, 'Notification').as('Notification');
			}
		});
		cy.window().should(window => {
			window.app.settings.pomoDuration = 1000;
			window.app.settings.shortBreakDuration = 1000;
			window.app.settings.longBreakDuration = 1000;
			window.app.timer.notifySettingsChanged();
		});
		cy.get('#timer-button').click();
		cy.wait(1000);
		cy.get('@Notification').should('have.been.calledWithNew')
			.and('have.been.calledWithExactly', 'Time\'s up! Start your short break now.');
		cy.get('#timer-button').click();
		cy.wait(1000);
		cy.get('@Notification').should('have.been.calledWithNew')
			.and('have.been.calledWithExactly', 'Time\'s up! Start your work session now.');
		cy.window().should(window => {
			window.app.timer.$cycle = 6;
			window.app.timer.notifySettingsChanged();
		});
		cy.get('#timer-button').click();
		cy.wait(1000);
		cy.get('@Notification').should('have.been.calledWithNew')
			.and('have.been.calledWithExactly', 'Time\'s up! Start your long break now.');
		cy.get('#timer-button').click();
		cy.wait(1000);
		cy.get('@Notification').should('have.been.calledWithNew')
			.and('have.been.calledWithExactly', 'Time\'s up! Start your work session now.');
	});

	it('Test asking for permission, shows notification if permission is granted', () => {
		cy.visit('/source/index.html', {
			onBeforeLoad(window) {
				cy.stub(window.Notification, 'permission', 'unknown');
				cy.stub(win.Notification, 'requestPermission').resolves('granted').as('ask');
				cy.stub(window, 'Notification').as('Notification');
			}
		});
		cy.window().should(window => {
			window.app.settings.pomoDuration = 1000;
			window.app.timer.notifySettingsChanged();
		});
		cy.get('#timer-button').click();
		cy.wait(1000);
		cy.get('@ask').should('have.been.calledOnce')
			.and('have.been.calledBefore', cy.get('@Notification'));
	});

	it('No notification if permission has been denied', () => {
		cy.visit('/source/index.html', {
			onBeforeLoad(window) {
				cy.stub(window.Notification, 'permission', 'denied');
				cy.stub(win.Notification, 'requestPermission').resolves('denied').as('ask');
				cy.stub(window, 'Notification').as('Notification');
			}
		});
		cy.window().should(window => {
			window.app.settings.pomoDuration = 1000;
			window.app.timer.notifySettingsChanged();
		});
		cy.get('#timer-button').click();
		cy.wait(1000);
		cy.get('@Notification').should('not.have.been.called');
	});
});
