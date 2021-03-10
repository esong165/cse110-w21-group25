// Run on DOM load
document.addEventListener('DOMContentLoaded', () => {
	const datalist = document.getElementById('tasks-container');

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

		taskListButtonStart.setAttribute('style', '');
		homeButtonStart.setAttribute('style', '');
		statsButtonStart.setAttribute('style', '');
		settingsButtonStart.setAttribute('style','');
		faqButtonStart.setAttribute('style', '');
	}

		/* initial load home page */
		setAllNone();
		const homeButtonSelect = document.getElementById('home-button');
		homeButtonSelect.setAttribute('src', 'images/home2.png');
	
		// Changes Color of selected button. Default is home
		const home = document.getElementById('timer');
		home.style.display = 'block';
		homeButtonSelect.setAttribute('style',"border:3px solid; border-radius: 10px; margin: -3px;");

	// If tasklist icon clicked on
	const taskListButton = document.getElementById('task-list-button');
	taskListButton.addEventListener('click', function tasklist() {
		/* hides non tasklist elements and makes tasklist elements visible */
		/* see if we have to do anything to make new tasklist items show appropriately */

		setAllNone();
		/* Changes Color of selected button. */
		const tasklistButtonSelect = document.getElementById('task-list-button');
		tasklistButtonSelect.setAttribute('src', 'images/tasklist2.png');
		tasklistButtonSelect.setAttribute('style',"border:3px solid; border-radius: 10px; margin: -3px;");
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
		homeButtonSelect.setAttribute('style',"border:3px solid; border-radius: 10px; margin: -3px;");
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
		statsButtonSelect.setAttribute('style',"border:3px solid; border-radius: 10px; margin: -3px;");
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
		faqButtonSelect.setAttribute('style',"border:3px solid; border-radius: 10px; margin: -3px;");
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
		settingsButtonSelect.setAttribute('style',"border:3px solid; border-radius: 10px; margin: -3px;");
		// shows settings
		const settings = document.getElementById('settings');
		settings.style.display = 'block';
		
	});

	// "Add task" functionality for tasklist
	const addTaskForm = document.getElementById('add-task-container');
	addTaskForm.addEventListener('submit', function(event) {
		event.preventDefault();
		const newName = document.getElementById('new-task-name');
		const newCount = document.getElementById('new-task-count');
		datalist.addTask(newName.value, newCount.value);
		newName.value = '';
		newCount.value = 1;
	});

	const addTaskButton = document.getElementById('add-task-btn');
	addTaskButton.addEventListener('mouseover', function(event) {
		event.preventDefault();
		event.target.style.color = 'white';
		event.target.style.backgroundColor = 'black';
	}
	);
	addTaskButton.addEventListener('mouseout', function(event) {
		event.preventDefault();
		event.target.style.color = 'black';
		event.target.style.backgroundColor = 'rgb(242, 197, 247)';
		
	}
	);


	// "Finish Task" functionality for tasklist
	const doneButton = document.getElementById('done-button');

	doneButton.addEventListener('click', function() {
		const currTask = document.getElementById('tasks-container').getSelected();
		if (currTask[0] === 'Default') return;
		document.getElementById('tasks-container').removeTask(currTask[0]);
		document.getElementById('stats-container').addStat(currTask[0].substring(1), currTask[1], currTask[2]);
	});

	doneButton.addEventListener('mouseover', function(event) {
		event.target.setAttribute('src', 'images/done.png');
	});
	doneButton.addEventListener('mouseout', function(event) {
		event.target.setAttribute('src', 'images/done2.png');
	});

});
