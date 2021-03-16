// Test css background color properties, when short break, long break, pomo
describe('Notification Tests', () => {

    // Before each test, access the website, create a task, and return to home page
    beforeEach(() => {
		cy.visit('/source/index.html');
        cy.get('#task-list-button').click();
        cy.get('#new-task-name').clear().type('Test Highlight');
		cy.get('#new-task-count').clear().type('3');
        cy.get('#add-task-button').click();
        cy.get('#tasks-container').children().eq(0).shadow().children().eq(1).children().eq(0).children().eq(0).click();
        cy.get('#home-button').click();
	});

    // Pomo background should be green and check if tasklist highlighting is working
    it('Test css background on pomo', () => {

        cy.get('#body-id').should('have.css', 'background-color').and('equal', 'rgb(204, 255, 204)');
        cy.get('#task-list-button').click();
        cy.get('#tasks-container').children().eq(0).shadow().children().eq(1).children().eq(0).children().eq(0)
        .should('have.css', 'background-color').and('equal', 'rgb(187, 240, 187)');
        cy.get('#tasks-container').children().eq(0).shadow().children().eq(1).children().eq(0).children().eq(0)
        .trigger('mouseover').should('have.css', 'background-color').and('equal', 'rgb(187, 240, 187)');
    }); 

    // Short Break background should be pink and check if tasklist highlighting is working
    it('Test css background on short break', () => {

        cy.window().should(window => {
            window.app.timer.remaining = 1000;
        });
        cy.get('#timer-button').click();
		cy.wait(1001);
        cy.get('#body-id').should('have.css', 'background-color').and('equal', 'rgb(245, 196, 242)');
        cy.get('#task-list-button').click();
        cy.get('#tasks-container').children().eq(0).shadow().children().eq(1).children().eq(0).children().eq(0)
        .should('have.css', 'background-color').and('equal', 'rgb(232, 174, 228)');
        cy.get('#tasks-container').children().eq(0).shadow().children().eq(1).children().eq(0).children().eq(0)
        .trigger('mouseover').should('have.css', 'background-color').and('equal', 'rgb(232, 174, 228)');
    });

    // Long Break background should be blue and check if tasklist highlighting is working
    it('Test css background on long break', () => {

        for (let i = 0; i < 7; i++) {
            cy.window().should(window => {
                window.app.timer.remaining = 1000;
            });
            cy.get('#timer-button').click();
            cy.wait(1001);
        }
        cy.get('#body-id').should('have.css', 'background-color').and('equal', 'rgb(209, 236, 255)');
        cy.get('#task-list-button').click();
        cy.get('#tasks-container').children().eq(0).shadow().children().eq(1).children().eq(0).children().eq(0)
        .should('have.css', 'background-color').and('equal', 'rgb(185, 206, 235)');
        cy.get('#tasks-container').children().eq(0).shadow().children().eq(1).children().eq(0).children().eq(0)
        .trigger('mouseover').should('have.css', 'background-color').and('equal', 'rgb(185, 206, 235)');
    }); 

    // Test stats and tasklist disabled when timer on. test color. test nav bar buttons when clicked. 
    it('Make sure all nav buttons works on load',  () => {

        cy.get('#home-button').should('have.css', 'display').and('equal', 'inline');
        cy.get('#task-list-button').should('have.css', 'display').and('equal', 'inline');
        cy.get('#stats-button').should('have.css', 'display').and('equal', 'inline');
        cy.get('#faq-button').should('have.css', 'display').and('equal', 'inline');
        cy.get('#settings-button').should('have.css', 'display').and('equal', 'inline');
    });

    // Test to make sure correct nav buttons are hidden
    it('Make sure correct nav buttons are hidden when timer starts',  () => {

        cy.get('#timer-button').click();
        cy.get('#home-button').should('have.css', 'display').and('equal', 'inline');
        cy.get('#task-list-button').should('have.css', 'display').and('equal', 'none');
        cy.get('#stats-button').should('have.css', 'display').and('equal', 'none');
        cy.get('#faq-button').should('have.css', 'display').and('equal', 'inline');
        cy.get('#settings-button').should('have.css', 'display').and('equal', 'inline');
    });

    // Test to make sure correct nav buttons are unhidden
    it('Make sure correct nav buttons are unhidden when timer is in standby',  () => {

        cy.get('#timer-button').click();
        cy.wait(1000);
        cy.get('#timer-button').click();
        cy.get('#home-button').should('have.css', 'display').and('equal', 'inline');
        cy.get('#task-list-button').should('have.css', 'display').and('equal', 'inline');
        cy.get('#stats-button').should('have.css', 'display').and('equal', 'inline');
        cy.get('#faq-button').should('have.css', 'display').and('equal', 'inline');
        cy.get('#settings-button').should('have.css', 'display').and('equal', 'inline');

    });

    // Test to make sure correct page is being displayed when home-button clicked and button is dark
    it('Test home-button works',  () => {

        cy.get('#home-button').click()
        cy.get('#home-button').should('have.attr', 'src').and('equal', 'images/home2.png');
        cy.get('#timer').should('have.css', 'display').and('equal', 'block');
        cy.get('#task-list').should('have.css', 'display').and('equal', 'none');
        cy.get('#stats').should('have.css', 'display').and('equal', 'none');
        cy.get('#faq').should('have.css', 'display').and('equal', 'none');
        cy.get('#settings').should('have.css', 'display').and('equal', 'none');
    });

    // Test to make sure correct page is being displayed when task-list-button clicked and button is dark
    it('Test task-list-button works',  () => {

        cy.get('#task-list-button').click()
        cy.get('#task-list-button').should('have.attr', 'src').and('equal', 'images/tasklist2.png');
        cy.get('#timer').should('have.css', 'display').and('equal', 'none');
        cy.get('#task-list').should('have.css', 'display').and('equal', 'block');
        cy.get('#stats').should('have.css', 'display').and('equal', 'none');
        cy.get('#faq').should('have.css', 'display').and('equal', 'none');
        cy.get('#settings').should('have.css', 'display').and('equal', 'none');
    });

    // Test to make sure correct page is being displayed when stats-button clicked and button is dark
    it('Test stats-button works/button is selected',  () => {

        cy.get('#stats-button').click()
        cy.get('#stats-button').should('have.attr', 'src').and('equal', 'images/stats2.png');
        cy.get('#timer').should('have.css', 'display').and('equal', 'none');
        cy.get('#task-list').should('have.css', 'display').and('equal', 'none');
        cy.get('#stats').should('have.css', 'display').and('equal', 'block');
        cy.get('#faq').should('have.css', 'display').and('equal', 'none');
        cy.get('#settings').should('have.css', 'display').and('equal', 'none');
    });

    // Test to make sure correct page is being displayed when faq-button clicked and button is dark
    it('Test faq-button works/button is selected',  () => {

        cy.get('#faq-button').click()
        cy.get('#faq-button').should('have.attr', 'src').and('equal', 'images/faq2.png');
        cy.get('#timer').should('have.css', 'display').and('equal', 'none');
        cy.get('#task-list').should('have.css', 'display').and('equal', 'none');
        cy.get('#stats').should('have.css', 'display').and('equal', 'none');
        cy.get('#faq').should('have.css', 'display').and('equal', 'block');
        cy.get('#settings').should('have.css', 'display').and('equal', 'none');
    });

    // Test to make sure correct page is being displayed when settings-button clicked and button is dark
    it('Test settings-button works/button is selected',  () => {

        cy.get('#settings-button').click()
        cy.get('#settings-button').should('have.attr', 'src').and('equal', 'images/settings2.png');
        cy.get('#timer').should('have.css', 'display').and('equal', 'none');
        cy.get('#task-list').should('have.css', 'display').and('equal', 'none');
        cy.get('#stats').should('have.css', 'display').and('equal', 'none');
        cy.get('#faq').should('have.css', 'display').and('equal', 'none');
        cy.get('#settings').should('have.css', 'display').and('equal', 'grid');
    });

    // Test to make sure done button and add task button work
    it('Test for highlighting for done and add task', () => {

        cy.get('#task-list-button').click();
        cy.get('#add-task-button').trigger('mouseover').should('have.css', 'background-color')
        .and('equal', 'rgb(0, 0, 0)');
        cy.get('#add-task-button').trigger('mouseover').should('have.css', 'color')
        .and('equal', 'rgb(255, 255, 255)');
        cy.get('#home-button').click();
        cy.get('#done-button').trigger('mouseover').should('have.attr', 'src').and('equal', 'images/done.png');
    });
});
