/**
 * Settings Class
 */
export default class Settings {
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
		const obj = document.getElementById('display-seconds');
		this.displaySeconds = obj.options[obj.selectedIndex].text;
	}

	/**
	 * Changes the timer's intervals
	 */
	getPomoLength() {
		const obj = document.getElementById('pomo-length');
		window.app.timer.remaining = Number(obj.options[obj.selectedIndex].text.substr(0, 2)) * 60 * 1000;
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
