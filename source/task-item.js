/**
 * A class representing a task item.
 */
export default class TaskItem extends HTMLElement {
	/**
	 * Constructs a task item using the input task name and estimated pomodoro count.
	 * Sets the current pomodoro count to 0.
	 * @param {String} taskName - Name of the task.
	 * @param {Number} pomoCount - Estimated pomodoro count.
	 * @param {Number} currPomoCount - Number of pomodoro cycles that have been completed with this task.
	 */
	constructor(taskName, pomoCount, currPomoCount) {
		// Required call to super in custom web component
		super();

		// Initializes shadow DOM
		const shadow = this.attachShadow({ mode: 'open' });

		// Creates list object representing the task
		const task = document.createElement('li');
		task.setAttribute('class', 'task');
		task.setAttribute('draggable', 'true');
		task.style = 'list-style-type:none; ';

		// Set name of task
		const name = document.createElement('p');
		name.innerHTML = '';
		name.innerHTML += taskName;
		name.style = 'display:none;';
		task.appendChild(name);

		// Set estimated pomodoros
		const count = document.createElement('p');
		count.innerHTML = '';
		count.innerHTML += pomoCount;
		count.style = 'display:none;';
		task.appendChild(count);
		// Set current pomodoro count
		this.currPomos = currPomoCount;

		// Select task button note: considering making this a radio option or making the text a clickable button
		const selectTaskButton = document.createElement('button');
		selectTaskButton.innerHTML = taskName;
		task.appendChild(selectTaskButton);

		const selectPomoButton = document.createElement('button');
		selectPomoButton.innerHTML = pomoCount;
		task.appendChild(selectPomoButton);

		// Remove task button
		const removeTaskButton = document.createElement('button');
		removeTaskButton.innerHTML = 'Remove';
		task.appendChild(removeTaskButton);

		// Add task to shadow DOM
		shadow.appendChild(task);
	}

	drag(event) {
		console.log('drag');
	}

	drop(event) {
		event.preventDefault();
		console.log('drop');
	}

	allowDrop(event) {
		event.preventDefault();
	}
}

customElements.define('task-item', TaskItem);
