/**
 * Settings Class
 */
export default class Settings {
	constructor() {
		this.pomoTime = 25 * 60 * 1000;
		this.shortBreakTime = 5 * 60 * 1000;
		this.longBreakTime = 15 * 60 * 1000;
		this.displaySeconds = true;
	}

	/**
	 * Changes the current page to the settings page
	 */
	toSettings() {
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
		this.displaySeconds = document.getElementById('display-seconds').checked;
	}

	/**
	 * Changes the timer's intervals
	 */
	getPomoLength() {
		const pomoLength = document.getElementById('pomo-length');
		this.pomoTime = Number(pomoLength.options[pomoLength.selectedIndex].text.substr(0, 2)) * 60 * 1000;
		window.app.timer.notifySettingsChanged();
	}

	/**
	 * When the user clicks the return home button
	 */
	toHome() {
		document.getElementById('timer').style.display = 'block';
		document.getElementById('task-list').style.display = 'none';
		document.getElementById('stats').style.display = 'none';
		document.getElementById('faq').style.display = 'none';
		document.getElementById('settings').style.display = 'none';
	}

	/**
	 * When the user clicks the return home button
	 */
	toTaskList() {
		document.getElementById('timer').style.display = 'none';
		document.getElementById('task-list').style.display = 'block';
		document.getElementById('stats').style.display = 'none';
		document.getElementById('faq').style.display = 'none';
		document.getElementById('settings').style.display = 'none';
	}

	/**
	 * When the user clicks the return home button
	 */
	toStats() {
		document.getElementById('timer').style.display = 'none';
		document.getElementById('task-list').style.display = 'none';
		document.getElementById('stats').style.display = 'block';
		document.getElementById('faq').style.display = 'none';
		document.getElementById('settings').style.display = 'none';
	}

	/**
	 * When the user clicks the return home button
	 */
	toFaq() {
		document.getElementById('timer').style.display = 'none';
		document.getElementById('task-list').style.display = 'none';
		document.getElementById('stats').style.display = 'none';
		document.getElementById('faq').style.display = 'block';
		document.getElementById('settings').style.display = 'none';
	}
}

document.addEventListener('DOMContentLoaded', () => {
	if (window.app === undefined) window.app = {};
	window.app.settings = new Settings();
	document.getElementById('settings-button').addEventListener('click', () => {
		window.app.settings.toSettings();
	});
	document.getElementById('confirm-settings').addEventListener('click', () => {
		window.app.settings.getPomoLength();
		window.app.settings.getTimerStyle();

		// Update timer seconds display
		window.app.timer.remaining = window.app.timer.remaining;
	});
	document.getElementById('home-button').addEventListener('click', () => {
		window.app.settings.toHome();
	});
	document.getElementById('task-list-button').addEventListener('click', () => {
		window.app.settings.toTaskList();
	});
	document.getElementById('stats-button').addEventListener('click', () => {
		window.app.settings.toStats();
	});
	document.getElementById('faq-button').addEventListener('click', () => {
		window.app.settings.toFaq();
	});
});
