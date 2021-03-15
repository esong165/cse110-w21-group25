describe('Notification Tests', () => {
    //Test css background color properties, when short break, long break, pomo.
    it('Test css background on pomo', () => {
        cy.visit('/source/index.html');
        cy.get('#bodyId').then(function($e1) {
            expect($e1).to.have.attr('background-color', 'rgb(204, 255, 204)')
        });
    }); 

    it('Test css background on short break', () => {
        cy.visit('/source/index.html');
        cy.window().should(window => {
            window.app.timer.remaining = 1000;
        });
        cy.get('#timer-button').click();
		cy.wait(1000);
        cy.get('#bodyId').then(function($e1) {
            expect($e1).to.have.attr('background-color', 'rgb(245, 196, 242)')
        });
    });

    it('Test css background on long break', () => {
        cy.visit('/source/index.html');
        cy.window().should(window => {
			window.app.timer.remaining = 1000;
            cy.get('#timer-button').click();
            cy.wait(1000);
            window.app.timer.remaining = 1000;
            cy.get('#timer-button').click();
            cy.wait(1000);
            window.app.timer.remaining = 1000;
            cy.get('#timer-button').click();
            cy.wait(1000);
            window.app.timer.remaining = 1000;
            cy.get('#timer-button').click();
            cy.wait(1000);
            window.app.timer.remaining = 1000;
            cy.get('#timer-button').click();
            cy.wait(1000);
            window.app.timer.remaining = 1000;
            cy.get('#timer-button').click();
            cy.wait(1000);
            window.app.timer.remaining = 1000;
            cy.get('#timer-button').click();
            cy.wait(1000);
            window.app.timer.remaining = 1000;
            cy.get('#timer-button').click();
            cy.wait(1000);
            window.app.timer.remaining = 1000;
            cy.get('#timer-button').click();
            cy.wait(1000);
            window.app.timer.remaining = 1000;
            cy.get('#timer-button').click();
            cy.wait(1000);
		});
    
        cy.get('#bodyId').then(function($e1) {
            expect($e1).to.have.attr('background-color', 'rgb(209, 236, 255)')
        });
    }); 
    
    //Test highlight of task when select or when hover. 
    //Test stats and tasklist disabled when timer on. test color. test nav bar buttons when clicked. 
    it('all nav bar buttons work',  () => {
        cy.visit('/source/index.html');
        
        //test home button
        cy.get('#home-button').click();
        cy.get('#home').then($el => {
            expect($el.style.display).to.have.value('block');
        });
        cy.get('#task-list').then($el => {
            expect($el.style.display).to.have.value('none');
        });
        cy.get('#stats').then($el => {
            expect($el.style.display).to.have.value('none');
        });
        cy.get('#faq').then($el => {
            expect($el.style.display).to.have.value('none');
        });
        cy.get('#settings').then($el => {
            expect($el.style.display).to.have.value('none');
        });

        //test tasklist button do after just copy paste previous

    });

    it('tasklist and stats disabled on nav bar when timer starts',  () => {
        cy.visit('/source/index.html');

        //test tasklist and stats disabled when timer starts
        cy.get('#timer-button').click();
        cy.get('#home-button').then($el => {
            expect($el.style.display).to.have.value('inline-block');
        });
        cy.get('#task-list-button').then($el => {
            expect($el.style.display).to.have.value('none');
        });
        cy.get('#stats-button').then($el => {
            expect($el.style.display).to.have.value('none');
        });
        cy.get('#faq-button').then($el => {
            expect($el.style.display).to.have.value('inline-block');
        });
        cy.get('#settings-button').then($el => {
            expect($el.style.display).to.have.value('inline-block');
        });

        //test tasklist and stats disabled when timer starts
        cy.get('#timer-button').click();
        cy.get('#home-button').then($el => {
            expect($el.style.display).to.have.value('inline-block');
        });
        cy.get('#task-list-button').then($el => {
            expect($el.style.display).to.have.value('none');
        });
        cy.get('#stats-button').then($el => {
            expect($el.style.display).to.have.value('none');
        });
        cy.get('#faq-button').then($el => {
            expect($el.style.display).to.have.value('inline-block');
        });
        cy.get('#settings-button').then($el => {
            expect($el.style.display).to.have.value('inline-block');
        });
    });
});