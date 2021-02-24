// Run on DOM load
document.addEventListener('DOMContentLoaded', () => {
	let tasklist = document.getElementById('tasks-container');

	// "Open/close" functionality for tasklist
	let taskListButton = document.getElementById('tasklist-btn');
	taskListButton.addEventListener('click', function() {
		let taskList = document.getElementById('task-list');
		let display = window.getComputedStyle(taskList).display;
		if(display === 'none') {
			taskList.style.display = 'block';
			this.innerHTML = 'Close Task List';
		} else {
			taskList.style.display = 'none';
			this.innerHTML = 'Open Task List';
		}
	});

	// "Add task" functionality for tasklist
	let addTaskButton = document.getElementById('add-task-container');
	addTaskButton.addEventListener('submit', function(event) {
		event.preventDefault();
		let newName = document.getElementById('new-task-name');
		let newCount = document.getElementById('new-task-count');
		tasklist.addTask(newName.value, newCount.value);
		newName.value = '';
		newCount.value = 1;
	});

	// "Finish Task" functionality for tasklist
	let doneButton = document.getElementById('done-button');
	doneButton.addEventListener('click', function() {
		let currTask = document.getElementById('current-task').innerHTML;
		if(currTask === 'Default') return; // Come back to this in case user wants to have a task named "Default"
		document.getElementById('tasks-container').removeTask(currTask);
	});
});
