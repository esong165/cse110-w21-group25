// Run on DOM load
document.addEventListener('DOMContentLoaded', () => {
	const tasklist = document.getElementById('tasks-container');

	// "Open/close" functionality for tasklist
	const taskListButton = document.getElementById('tasklist-btn');
	taskListButton.addEventListener('click', function() {
		const taskList = document.getElementById('task-list');
		const display = window.getComputedStyle(taskList).display;
		if (display === 'none') {
			taskList.style.display = 'block';
			this.innerHTML = 'Close Task List';
		} else {
			taskList.style.display = 'none';
			this.innerHTML = 'Open Task List';
		}
	});

	// "Add task" functionality for tasklist
	const addTaskButton = document.getElementById('add-task-container');
	addTaskButton.addEventListener('submit', function(event) {
		event.preventDefault();
		const newName = document.getElementById('new-task-name');
		const newCount = document.getElementById('new-task-count');
		tasklist.addTask(newName.value, newCount.value);
		newName.value = '';
		newCount.value = 1;
	});

	// "Finish Task" functionality for tasklist
	const doneButton = document.getElementById('done-button');
	doneButton.addEventListener('click', function() {
		const currTask = document.getElementById('current-task').innerHTML;
		if (currTask === 'Default') return; // Come back to this in case user wants to have a task named "Default"
		document.getElementById('tasks-container').removeTask(currTask);
	});
});
