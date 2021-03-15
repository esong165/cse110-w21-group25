describe('Notification Tests', () => {
	it('Notification support', () => {
		cy.visit('/source/index.html');
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
			window.app.settings.pomoDuration = 3000;
			window.app.settings.shortBreakDuration = 1000;
			window.app.settings.longBreakDuration = 2000;
			window.app.timer.notifySettingsChanged();
		});
		cy.get('#timer-button').click();
		cy.wait(3000);
		cy.get('@Notification').should('have.been.calledWithNew')
			.and('have.been.calledWithExactly', 'Time\'s up! Start your short break now.', { tag: 'timer' });
		cy.get('#timer-button').click();
		cy.wait(1000);
		cy.get('@Notification').should('have.been.calledWithNew')
			.and('have.been.calledWithExactly', 'Time\'s up! Start your work session now.', { tag: 'timer' });
		cy.window().should(window => {
			window.app.timer.$cycle = 6;
			window.app.timer.notifySettingsChanged();
		});
		cy.get('#timer-button').click();
		cy.wait(3000);
		cy.get('@Notification').should('have.been.calledWithNew')
			.and('have.been.calledWithExactly', 'Time\'s up! Start your long break now.', { tag: 'timer' });
		cy.get('#timer-button').click();
		cy.wait(2000);
		cy.get('@Notification').should('have.been.calledWithNew')
			.and('have.been.calledWithExactly', 'Time\'s up! Start your work session now.', { tag: 'timer' });
	});

	it('Test asking for permission, shows notification if permission is granted', () => {
		cy.visit('/source/index.html', {
			onBeforeLoad(window) {
				cy.stub(window.Notification, 'permission', 'unknown');
				cy.stub(window.Notification, 'requestPermission').resolves('granted').as('ask');
				cy.stub(window, 'Notification').as('Notification');
			}
		});
		cy.window().should(window => {
			window.app.settings.pomoDuration = 2000;
			window.app.timer.notifySettingsChanged();
		});
		cy.get('#timer-button').click();
		cy.wait(2000);
		cy.get('@ask').should('have.been.calledOnce')
			.and('have.been.calledBefore', cy.get('@Notification'));
	});

	it('No notification if permission has been denied', () => {
		cy.visit('/source/index.html', {
			onBeforeLoad(window) {
				cy.stub(window.Notification, 'permission', 'denied');
				cy.stub(window.Notification, 'requestPermission').resolves('denied');
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
