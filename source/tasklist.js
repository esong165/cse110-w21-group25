import TaskItem from './task-item.js';

/**
 * A class representing a Tasklist.
 */
export default class Tasklist extends HTMLUListElement {
	/**
	 * Constructs the Tasklist with a default tasklist and selected task, or
	 * the tasklist and selected task stored in localStorage if they exist.
	 */
	constructor() {
		// Required call to super in custom web component
		super();

		// Initialize $tasks and $selected to default values
		this.$tasks = [];
		this.$selected = ['Default', '1', '-1'];

		// Get values from localStorage and updating $tasks and $selected if these are not null
		const taskItemArr = JSON.parse(localStorage.getItem('taskItemArr'));
		const selectedArr = JSON.parse(localStorage.getItem('selectedTask'));
		if (taskItemArr !== null) {
			this.$tasks = taskItemArr;
		}
		if (selectedArr !== null) {
			this.$selected = selectedArr;
		}

		// Update current task display
		if (this.$selected[0] === 'Default') {
			document.getElementById('current-task').innerHTML = 'Default';
		} else {
			document.getElementById('current-task').innerHTML = this.$selected[0].substring(1);
		}

		// Update tasklist display
		for (const task of this.$tasks) {
			const currTask = new TaskItem(task[0], task[1], task[2]);
			currTask.id = '_' + task[0];

			// Add select and remove buttons to each task fetched from localStorage
			currTask.shadowRoot.children[0].children[2].addEventListener('click',
				function() { document.getElementById('tasks-container').selectTask(currTask.id); });
			currTask.shadowRoot.children[0].children[3].addEventListener('click',
				function() { document.getElementById('tasks-container').selectTask(currTask.id); });
			currTask.shadowRoot.children[0].children[4].addEventListener('click',
				function() { document.getElementById('tasks-container').removeTask(currTask.id); });

			document.getElementById('tasks-container').appendChild(currTask);

			// Add drag/drop functionality
			document.getElementById(currTask.id).setAttribute('ondragstart', 'drag(event);');
			document.getElementById(currTask.id).setAttribute('ondragover', 'allowDrop(event);');
			document.getElementById(currTask.id).setAttribute('ondrop', 'drop(event);');
		}
	}

	/**
	 * Gets the current selected task as an array.
	 * @returns {Array} Array containing task name at position 0 and estimated count at position 1.
	 */
	getSelected() {
		return this.$selected;
	}

	/**
	 * Add a task to the tasklist.
	 * @param {String} name - the name of the task
	 * @param {Number} count - the estimated number of pomodoro cycles
	 */
	addTask(name, count) {
		// Validity checking
		if (name.trim() === '') {
			alert('Please enter a valid task name.');
			return;
		}
		const task = new TaskItem(name, count, 0);
		task.id = '_' + name;

		// Add select and remove buttons to the task
		task.shadowRoot.children[0].children[2].addEventListener('click',
			function() { document.getElementById('tasks-container').selectTask(task.id); });
		task.shadowRoot.children[0].children[3].addEventListener('click',
			function() { document.getElementById('tasks-container').selectTask(task.id); });
		task.shadowRoot.children[0].children[4].addEventListener('click',
			function() { document.getElementById('tasks-container').removeTask(task.id); });

		// Store task as array of array in local storage -- could refactor into separate method
		let taskItemArr = JSON.parse(localStorage.getItem('taskItemArr'));
		if (taskItemArr == null) {
			taskItemArr = [];
		}

		// Create array version of the task
		const taskAsArr = [];
		taskAsArr.push(name);
		taskAsArr.push(count);
		taskAsArr.push(task.currPomos);

		// Validity checking
		if (!JSON.stringify(taskItemArr).includes(JSON.stringify(taskAsArr))) {
			taskItemArr.push(taskAsArr);
			this.$tasks.push([name, count, task.currPomos]);
			this.appendChild(task);

			// Add drag/drop functionality to task
			document.getElementById(task.id).setAttribute('ondragstart', 'drag(event);');
			document.getElementById(task.id).setAttribute('ondragover', 'allowDrop(event);');
			document.getElementById(task.id).setAttribute('ondrop', 'drop(event);');
		} else {
			alert('Task is already in tasklist.');
			return;
		}
		localStorage.setItem('taskItemArr', JSON.stringify(taskItemArr));
	}

	/**
	 * Select a task as the current task.
	 * @param {String} taskId - name of selected task.
	 */
	selectTask(taskId) {
		const task = document.getElementById(taskId).shadowRoot.children[0];
		const name = task.children[0].innerHTML;
		const pomos = task.children[1].innerHTML;

		// Update current task display
		document.getElementById('current-task').innerHTML = name;

		// Update $selected instance variable
		this.$selected = ['_' + name, pomos, document.getElementById(taskId).currPomos];

		// Store selected task in local storage
		localStorage.setItem('selectedTask', JSON.stringify(this.$selected));
		// goes to timer page to see task set
		home();
	}

	/**
	 * Remove a task from the tasklist.
	 * @param {String} taskId - name of task to be removed.
	 */
	removeTask(taskId) {
		const currTaskId = document.getElementById('current-task').innerHTML;
		const taskContainer = document.getElementById('tasks-container');

		const task = document.getElementById(taskId);

		// Remove task from $tasks instance variable
		this.$tasks = arrayRemove(this.$tasks, taskId.substring(1));

		/* Edge case check for a bug I could not figure out -- without this line,
			sometimes a task enters the tasklist with undefined, undefined --
			occurs when you add a task, select it, then remove it and refresh
			Justin Check how local storage works with select and see what's wrong with case
			*/
		if (JSON.stringify(this.$tasks) === '[{}]') this.$tasks = [];

		// Update tasklist display
		if (task != null) {
			taskContainer.removeChild(task);
		}

		// If current task is the removed task, move to next task in tasklist or default task
		if (currTaskId === taskId.substring(1)) {
			// Select the next task if there are any left in list
			if (taskContainer.hasChildNodes()) {
				const tasklist = document.getElementById('tasks-container');
				tasklist.selectTask(tasklist.firstChild.id);
			} else {
				// Update displays and $selected to defaults if there are no tasks left in list
				document.getElementById('current-task').innerHTML = 'Default';
				this.$selected = ['Default', '1', '-1'];
			}
		}

		// Update localStorage with $tasks and $selected
		localStorage.setItem('taskItemArr', JSON.stringify(this.$tasks));
		localStorage.setItem('selectedTask', JSON.stringify(this.$selected));
	}

	/**
	 * Increments the currPomos field of a task once a Pomodoro session ends.
	 * @param {String} taskId - ID of the task item being updated
	 */
	updateCurrPomos(taskId) {
		const currTaskItem = document.getElementById(taskId);

		// If task exists, increment its currPomos field
		if (currTaskItem !== null) {
			currTaskItem.currPomos++;

			// Update currPomos field in $tasks and localStorage accordingly
			for (let i = 0; i < this.$tasks.length; i++) {
				if (this.$tasks[i][0] === taskId) {
					this.$tasks[i][2]++;
					localStorage.setItem('taskItemArr', JSON.stringify(this.$tasks));
					break;
				}
			}

			// Update currPomos field in $selected and localStorage accordingly
			this.$selected[2]++;
			localStorage.setItem('selectedTask', JSON.stringify(this.$selected));
		}
	}
}

customElements.define('task-list', Tasklist, { extends: 'ul' });

function home() {
	/* add listeners or something to change color for timer */
	/* hides non timer elements and makes timer elements visible */

	const home = document.getElementById('timer');
	home.style.display = 'block';

	const tasklist = document.getElementById('task-list');
	tasklist.style.display = 'none';

	const faq = document.getElementById('faq');
	faq.style.display = 'none';

	const settings = document.getElementById('settings');
	settings.style.display = 'none';

	const stats = document.getElementById('stats');
	stats.style.display = 'none';
}

/**
 * Helper function to remove task from $tasks.
 * @param {*} arr - array to remove from.
 * @param {*} toRemove - element to be removed.
 */
function arrayRemove(arr, toRemove) {
	return arr.filter(function(el) {
		return el[0] !== toRemove;
	});
}
