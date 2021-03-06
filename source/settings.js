/**
 * Settings Class
 */
export default class Settings {
    /**
     * Changes the current page to the settings page
     */
    constructor() {
        document.getElementById('timer').style.display = 'none';
        document.getElementById('task-list').style.display = 'none';
        document.getElementById('stats').style.display = 'none';
        document.getElementById('faq').style.display = 'none';
        document.getElementById('settings').style.display = 'block';
    }
    
    /**
     * Changes the settings of the appearance of the timer
     */
    getTimerStyle() {
        const obj = document.getElementById('display-seconds');
        document.getElementById('identify').innerHTML = obj.options[obj.selectedIndex].text;
    }
    
    /**
     * Changes the timer's intervals
     */
    getPomoLength() {
        const obj = document.getElementById('pomo-length');
        document.getElementById('time-remaining').innerHTML = obj.options[obj.selectedIndex].text;
    }
    
    /**
     * When the user clicks the return home button
     */
    returnHome() {
        document.getElementById('timer').style.display = 'block';
        document.getElementById('task-list').style.display = 'block';
        document.getElementById('stats').style.display = 'block';
        document.getElementById('faq').style.display = 'block';
        document.getElementById('settings').style.display = 'none';
    }
}

document.getElementById('settings-button').addEventListener('click', () => {
    const a = new Settings();
    document.getElementById('confirm-settings').addEventListener('click', () => {
        a.getPomoLength();
        a.getTimerStyle();
    });
    document.getElementById('home-button').addEventListener('click', () => {
        a.returnHome();
    });
});
