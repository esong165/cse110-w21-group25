// Run on DOM load
document.addEventListener('DOMContentLoaded', () => {
	const datalist = document.getElementById('tasks-container');
	const statlist = document.getElementById('total-tasks');

	/**
	 * Sets all taskbar icons to not selected and all style.displays to none.
	 */
	function setAllNone() {
		const home = document.getElementById('timer');
		home.style.display = 'none';

		const tasklist = document.getElementById('task-list');
		tasklist.style.display = 'none';

		const faq = document.getElementById('faq');
		faq.style.display = 'none';

		const settings = document.getElementById('settings');
		settings.style.display = 'none';

		const stats = document.getElementById('stats');
		stats.style.display = 'none';

		const taskListButtonStart = document.getElementById('task-list-button');
		const homeButtonStart = document.getElementById('home-button');
		const statsButtonStart = document.getElementById('stats-button');
		const settingsButtonStart = document.getElementById('settings-button');
		const faqButtonStart = document.getElementById('faq-button');

		taskListButtonStart.setAttribute('src', 'images/tasklist.png');
		homeButtonStart.setAttribute('src', 'images/home.png');
		statsButtonStart.setAttribute('src', 'images/stats.png');
		settingsButtonStart.setAttribute('src', 'images/settings.png');
		faqButtonStart.setAttribute('src', 'images/faq.png');
	}

	/* initial load home page */
	setAllNone();
	const homeButtonSelect = document.getElementById('home-button');
	homeButtonSelect.setAttribute('src', 'images/home2.png');

	// Changes Color of selected button. Default is home
	const home = document.getElementById('timer');
	home.style.display = 'block';

	// If tasklist icon clicked on
	const taskListButton = document.getElementById('task-list-button');
	taskListButton.addEventListener('click', function tasklist() {
		/* hides non tasklist elements and makes tasklist elements visible */
		/* see if we have to do anything to make new tasklist items show appropriately */

		setAllNone();
		/* Changes Color of selected button. */
		const tasklistButtonSelect = document.getElementById('task-list-button');
		tasklistButtonSelect.setAttribute('src', 'images/tasklist2.png');
		// shows tasklist
		const tasklist = document.getElementById('task-list');
		tasklist.style.display = 'block';
	});

	// If home icon clicked on
	const homeButton = document.getElementById('home-button');
	homeButton.addEventListener('click', function home() {
		/* add listeners or something to change color for timer */
		/* hides non timer elements and makes timer elements visible */

		setAllNone();
		/* Changes Color of selected button. */
		const homeButtonSelect = document.getElementById('home-button');
		homeButtonSelect.setAttribute('src', 'images/home2.png');
		// shows timer
		const home = document.getElementById('timer');
		home.style.display = 'block';
	});

	// If stats icon clicked on
	const statsButton = document.getElementById('stats-button');
	statsButton.addEventListener('click', function stats() {
		/* hides non stats elements and makes stats elements visible */

		setAllNone();
		/* Changes Color of selected button. */
		const statsButtonSelect = document.getElementById('stats-button');
		statsButtonSelect.setAttribute('src', 'images/stats2.png');
		// shows settings
		const stats = document.getElementById('stats');
		stats.style.display = 'block';
	});

	const faqButton = document.getElementById('faq-button');
	faqButton.addEventListener('click', function faq() {
		/* hides non stats elements and makes stats elements visible */

		setAllNone();
		/* Changes Color of selected button. */
		const faqButtonSelect = document.getElementById('faq-button');
		faqButtonSelect.setAttribute('src', 'images/faq2.png');
		// shows settings
		const faq = document.getElementById('faq');
		faq.style.display = 'block';
	});

	const settingsButton = document.getElementById('settings-button');
	settingsButton.addEventListener('click', function settings() {
		/* hides non stats elements and makes stats elements visible */

		setAllNone();
		/* Changes Color of selected button. */
		const settingsButtonSelect = document.getElementById('settings-button');
		settingsButtonSelect.setAttribute('src', 'images/settings2.png');
		// shows settings
		const settings = document.getElementById('settings');
		settings.style.display = 'block';
	});

	// "Add task" functionality for tasklist
	const addTaskButton = document.getElementById('add-task-container');
	addTaskButton.addEventListener('submit', function (event) {
		event.preventDefault();
		const newName = document.getElementById('new-task-name');
		const newCount = document.getElementById('new-task-count');
		datalist.addTask(newName.value, newCount.value);
		newName.value = '';
		newCount.value = 1;
	});

	// "Finish Task" functionality for tasklist
	const doneButton = document.getElementById('done-button');
  
	doneButton.addEventListener('click', function () {
		const currTask = document.getElementById('tasks-container').getSelected();
		if (currTask[0] === 'Default') return;
		document.getElementById('tasks-container').removeTask(currTask[0].substring(1));
		document.getElementById('stats-container').addStat(currTask[0].substring(1), currTask[1], currTask[2]);
	});
});
