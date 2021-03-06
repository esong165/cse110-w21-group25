/**
 * Settings Class
 */
export default class Settings {
    /**
     * Changes the current page to the settings page
     */
    constructor() {
        //this.buttonId = buttonId;
        document.getElementById("home-id").style.display = "none";
        document.getElementById("settings-id").style.display = "block";
    }

    /**
     * Changes the settings of the appearance of the timer
     */
    getTimerStyle() {
        let obj = document.getElementById("display-seconds");
        document.getElementById("identify").innerHTML = 
        obj.options[obj.selectedIndex].text;
    }
    
    /**
     * Changes the timer's intervals
     */
    getPomoLength() {
        let obj = document.getElementById("pomo-length");
        document.getElementById("time-remaining").innerHTML = 
        obj.options[obj.selectedIndex].text;
    }

    returnHome() {
        document.getElementById("home-id").style.display = "block";
        document.getElementById("settings-id").style.display = "none";
    }
}

document.getElementById('settings-button').addEventListener('click', () => {
    let a = new Settings();
    document.getElementById('confirm-settings').addEventListener('click', () => {
        a.getPomoLength();
        a.getTimerStyle();
    });
    document.getElementById('return-home').addEventListener('click', () => {
        a.returnHome();
    });
});
