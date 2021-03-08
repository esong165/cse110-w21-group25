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
	
		
	span{
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

	span:first-of-type:hover{
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
		const name = document.createElement('span');
		name.innerHTML = '';
		name.innerHTML += taskName;
		//sets task name witdth to be 60% of li
		name.style = "width: 60%;";
		task.appendChild(name);

		// Set estimated pomodoros
		const count = document.createElement('span');
		count.innerHTML = '';
		count.innerHTML += pomoCount;
		//sets num pomos witdth to be 10% of li
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
