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
	margin-top: 27px;
	
	font-size: 210%
  }

  li img{
	  text-align: left;
	  float: left;
	  height: 10px;
	  margin-bottom: -1px;
	  width: 100x; 
	  height: 100px


	}

	span::hover{
		background-color:green;
	}
	button::hover{
		background-color:blue;
	}


</style>
  `;
		// Creates list object representing the task
		const task = document.createElement('li');
		task.setAttribute('class', 'task');
		task.setAttribute('draggable', 'true');
		task.style = 'list-style-type:none;';

		// Set name of task
		const name = document.createElement('span');
		name.innerHTML = '';
		name.innerHTML += taskName;
		name.style = "width: 60%;";
		task.appendChild(name);

		// Set estimated pomodoros
		const count = document.createElement('span');
		count.innerHTML = '';
		count.innerHTML += pomoCount;
		count.style = 'width: 10%;';
		task.appendChild(count);
		// Set current pomodoro count
		this.currPomos = currPomoCount;

		// Select task button note: considering making this a radio option or making the text a clickable button
		const selectTaskButton = document.createElement('button');
		selectTaskButton.innerHTML = taskName;
		selectTaskButton.style = 'display:none;';
		task.appendChild(selectTaskButton);

		const selectPomoButton = document.createElement('button');
		selectPomoButton.innerHTML = pomoCount;
		selectPomoButton.style = 'display:none;';
		task.appendChild(selectPomoButton);

		// Remove task button
		const removeTaskButton = document.createElement('img');
		removeTaskButton.setAttribute('src', 'images/trashcan.png');
		removeTaskButton.innerHTML = 'Remove';
		removeTaskButton.style = ``;
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
