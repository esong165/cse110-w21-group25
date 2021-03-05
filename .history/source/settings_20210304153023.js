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
}

	
window.app.settings = new Settings();
document.getElementById('settings-button').addEventListener('click', () => {
    window.app.setting.buttonClick();
});