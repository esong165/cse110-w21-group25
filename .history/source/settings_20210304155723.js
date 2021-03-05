/**
 * Settings Class
 */
export default class Settings {
    /**
     * Changes the current page to the settings page
     */
    constructor() {
        //this.buttonId = buttonId;
        document.getElementById("homeID").style.display = "none";
        document.getElementById("settingsID").style.display = "block";
    }

    /**
     * Changes the settings of the appearance of the timer
     */
    getTimerStyle() {
        let obj = document.getElementById("displaySeconds");
        document.getElementById("identify").innerHTML = 
        obj.options[obj.selectedIndex].text;
    }
    
    /**
     * Changes the timer's intervals
     */
    getPomoLength() {
        let obj = document.getElementById("mySelect2");
        document.getElementById("time-remaining").innerHTML = 
        obj.options[obj.selectedIndex].text;
    }

    returnHome() {
        document.getElementById("homeID").style.display = "block";
        document.getElementById("settingsID").style.display = "none";
    }
}

document.getElementById('settings-button').addEventListener('click', () => {
    let a = new Settings();
    document.getElementById('b1').addEventListener('click', () => {
        a.getPomoLength();
    });
    document.getElementById('b1').addEventListener('click', () => {
        a.getTimerStyle();
    });
    document.getElementById('b1').addEventListener('click', () => {
        a.returnHome();
    });
});
