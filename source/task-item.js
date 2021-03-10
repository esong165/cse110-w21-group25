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

		// styles the elements in TaskItem to look like a table
		shadow.innerHTML = `
	<style>
	li {
		width: 700px;
		position: relative;
		text-align: center;
		margin-left: 7%;
	}
	
	li:before, li:after {
		text-align: right;
		display: block;
		border-bottom: 0;
		width: 0%; 
	}
	
	li:before {
		text-align: left;
	}
	
	li:after {
		position: absolute;
		top: 0;
		left: 48%;
		margin-left: 1px;  

	}
		
	p{
		text-align: left;
		float: left;
		margin-top: 25px;
		font-size: 210%
	}

	li img{
		text-align: left;
		float: left;
		margin-bottom: -20px;
		width: 100x; 
		height: 100px;

		}

	p:first-of-type:hover{
			background-color: rgb(191,191,191);
			box-shadow: 20px 0px 0px 10px rgb(191,191,191), 0px 0px 0px 10px rgb(191,191,191);
		}

	img:hover{
			background-color: rgb(191,191,191);
			
		}
	</style>
  		`;

		// Creates list object representing the task
		const task = document.createElement('li');
		task.setAttribute('class', 'task');
		task.setAttribute('draggable', 'true');
		task.setAttribute('color', 'true');
		//removes bullet point from ul's li elements
		task.style = 'list-style-type:none;';

		//Select functionalilty now on pomoCount and taskname spans
		// Set name of task
		const name = document.createElement('p');
		name.textContent = taskName;
		name.style = 'width: 60%;';
		task.appendChild(name);

		// Set estimated pomodoros
		const count = document.createElement('p');
		count.textContent = pomoCount;
		count.style = 'width: 10%;';
		task.appendChild(count);
		// Set current pomodoro count
		this.currPomos = currPomoCount;

		// Remove task button
		const removeTaskButton = document.createElement('img');
		//sets image of removeTaskButton
		removeTaskButton.setAttribute('src', 'images/trashcan.png');
		//currently the following line is probably uncessary
		removeTaskButton.innerHTML = 'Remove';
		task.appendChild(removeTaskButton);

		// Add task to shadow DOM
		shadow.appendChild(task);
	}

	/**
	 * Gets the dragged task's id and prepares it to be transferred to the dropped task.
	 * @param {Event} event - Event of task item being dragged.
	 */
	drag(event) {
		// Sets dragged task's ID as data to be transferred
		event.dataTransfer.setData('text/plain', event.target.id);
	}

	/**
	 * Moves the dragged task to the position of the dropped task and updates all positions accordingly.
	 * @param {Event} event - Event of some task being dropped onto another task.
	 */
	drop(event) {
		// Enables dropping on this task item
		event.preventDefault();

		const draggedTask = document.getElementById(event.dataTransfer.getData('text/plain'));
		const droppedTask = document.getElementById(event.target.id);
		const draggedPos = Array.from(document.getElementById('tasks-container').childNodes)
			.indexOf(document.getElementById(draggedTask.id));
		const droppedPos = Array.from(document.getElementById('tasks-container').childNodes)
			.indexOf(document.getElementById(droppedTask.id));
		const tasklist = document.getElementById('tasks-container');

		// Insert task before or at the task being dropped on, depending on their relative positions
		if (draggedPos > droppedPos) {
			droppedTask.parentNode.insertBefore(draggedTask, droppedTask);
		} else if (draggedPos < droppedPos) {
			droppedTask.parentNode.insertBefore(draggedTask, droppedTask.nextSibling);
		}

		// Update $tasks and localStorage positions
		const removedTask = tasklist.$tasks[draggedPos];
		tasklist.$tasks.splice(draggedPos, 1);
		tasklist.$tasks.splice(droppedPos, 0, removedTask);
		localStorage.setItem('taskItemArr', JSON.stringify(tasklist.$tasks));
	}

	/**
	 * Allows a task to be dropped onto another task.
	 * @param {Event} event - Event of mouse hovering over a task while holding a dragged item.
	 */
	allowDrop(event) {
		event.preventDefault();
	}
}

customElements.define('task-item', TaskItem);
