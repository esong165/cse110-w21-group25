/**
 * @jest-environment jsdom
 */
import Tasklist from './tasklist.js';

document.body.innerHTML = `
	<header>
		<h1 id="site-header">
			Tomato
		</h1>
	</header>
	
	<main>
		<div id="current-task-container">
			<h3 id="current-task">Default</h3>
			<h3 id="num-pomos">1</h3>
			<button id="done-button" type="submit" value="Done With Task" >
				Done
			</button>
		</div>

		<section id="timer-display">
		<p id="time-remaining">25:00</p>
		</section>

		<button id="timer-button"></button>
		<div>
		<button id="popup-button">Click</button>
		</div>

		<div id="task-list">
			<h3>Task Name:               Estimated pomodoros:</h3>

			<ul id="tasks-container" is="task-list"></ul>
			
			<form id="add-task-container">
				<label>Task name:</label>
				<input type="text" id="new-task-name" maxlength="30">
				<label>Estimated pomodoros:</label>
				<input type="number" id="new-task-count" value='1' min='1' max='99'>
				<input type="submit" id="add-task-btn" value="Add Task">
			</form>
		</div>

		<button id="tasklist-btn">Open Task List</button> 
	</main>
	<script src="./task-item.js" type="module"></script>
	<script src="./timer.js" type="module"></script>
	<script src="./tasklist.js" type="module"></script>
	<script src="./main.js"></script>


`;

jest.spyOn(window, 'alert').mockImplementation(() => {});

test('Constructor Test', () => {
	localStorage.clear();
	const tasklist = new Tasklist();
	const emptyArr = [];
	const selectedArr = ['Default', '1'];
	expect((tasklist.$tasks)).toEqual(emptyArr);
	expect((tasklist.$selected)).toEqual(selectedArr);
});

test('Basic Add Tasks', () => {
	localStorage.clear();
	const tasklist = new Tasklist();
	const addedTaskName = [];
	const addedTaskPomo = [];
	populateTasks(addedTaskName, addedTaskPomo, 10, 4, tasklist);
	checkArrEquals(tasklist, addedTaskName, addedTaskPomo, length);
});

test('Add Duplicate Tasks', () => {
	localStorage.clear();
	const tasklist = new Tasklist();
	expect(tasklist.$tasks.length).toBe(0);
	const name = 'Go to the mountain';
	const time = 30;
	for (let i = 0; i < 5; i++) {
		tasklist.addTask(name, time);
	}
	expect(tasklist.$tasks.length).toBe(1);
	expect(tasklist.$tasks[0][0]).toBe(name);
	expect(tasklist.$tasks[0][1]).toBe(time);
});

test('Remove one Task', () => {
	localStorage.clear();
	const tasklist = new Tasklist();
	const addedTaskName = [];
	const addedTaskPomo = [];
	populateTasks(addedTaskName, addedTaskPomo, 3, 4, tasklist);
	expect(tasklist.$tasks.length).toBe(addedTaskName.length);

	const indexToRemove = Math.floor(Math.random() * addedTaskName.length);
	expect(tasklist.$tasks[indexToRemove][0]).toBe(addedTaskName[indexToRemove]);
	tasklist.removeTask(tasklist.$tasks[indexToRemove][0]);
	addedTaskName.pop();
	addedTaskPomo.pop();

	expect(tasklist.$tasks.length).toBe(addedTaskName.length);
	checkArrEquals(tasklist, addedTaskName, addedTaskPomo, length);
});

test('Remove All Tasks', () => {
	localStorage.clear();
	const tasklist = new Tasklist();
	const addedTaskName = [];
	const addedTaskPomo = [];
	populateTasks(addedTaskName, addedTaskPomo, 10, 4, tasklist);
	expect(tasklist.$tasks.length).toBe(addedTaskName.length);
	while (addedTaskName.length > length / 2) {
		const indexToRemove = Math.floor(Math.random() * addedTaskName.length);
		tasklist.removeTask(addedTaskName[indexToRemove]);
		addedTaskName.splice(indexToRemove, 1);
		addedTaskPomo.splice(indexToRemove, 1);
	}
	expect(tasklist.$tasks.length).toBe(addedTaskName.length);
	checkArrEquals(tasklist, addedTaskName, addedTaskPomo, length);

	while (addedTaskName.length > 0) {
		tasklist.removeTask(addedTaskName[0]);
		addedTaskName.splice(0, 1);
		addedTaskPomo.splice(0, 1);
	}
	expect(tasklist.$tasks.length).toBe(0);
});

function populateTasks(nameArr, countArr, length, nameLength, tasklist) {
	for (let j = 0; j < length; j++) {
		let name = '';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+`~,<.>/?;:\'"\\[]{}';
		for (let i = 0; i < nameLength; i++) {
			name += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		nameArr.push(name);
		const time = (Math.floor(Math.random() * 99) + 1).toString(10);
		countArr.push(time);
		tasklist.addTask(name, time);
	}
}

function checkArrEquals(tasklist, nameArr, countArr, length) {
	for (let i = 0; i < length; i++) {
		expect(tasklist.$tasks[i][0]).toBe(nameArr[i]);
		expect(tasklist.$tasks[i][1]).toBe(countArr[i]);
	}
}
