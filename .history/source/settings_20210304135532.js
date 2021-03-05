/**
 * Settings Class
 */
export default class Settings {
    /**
     * Changes the current page to the settings page
     */
    constructor(buttonId) {
        this.buttonId = buttonId;
    }

    /**
     * Changes the settings of the appearance of the timer
     */

    /**
     * Changes the theme of the timer
     */

    /**
     * Changes the language of the timer
     */

    /**
     * Changes the timer's intervals
     */
    
     /**
     * Changes the timer's break time
     */
}

document.addEventListener('DOMContentLoaded', () => {
	if (window.app === undefined) window.app = {};
	window.app.setting = new Settings('settings-button');
	document.getElementById('settings-button').addEventListener('click', () => {
		window.app.setting.buttonClick();
	});
});