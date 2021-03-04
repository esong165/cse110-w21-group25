
/**
 * @jest-environment jsdom
 */
import Tasklist from './tasklist.js';

document.body.innerHTML = `


<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8" />
	<title>Our Timer</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" href="./main.css" />
    <!--
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
    -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap" rel="stylesheet">
</head>

<body>
    <header>
        <h1 id="site-header">
            Pomodoro Timer
        </h1>
    </header>
    
    <main>
        <div id="task-bar">
            <input type="image" src="images/home.png" name="Home" class="taskbar-but" id="HomeBut" title="Home" />
            <input type="image" src="images/tasklist.png" name="TaskList" class="taskbar-but" id="TaskListBut" title="Tasklist" />
            <input type="image" src="images/stats.png" name="Stats" class="taskbar-but" id="StatsBut" title="Statistics" />
            <input type="image" src="images/faq.png" name="FAQ" class="taskbar-but" id="FAQBut" title="FAQ" />
            <input type="image" src="images/settings.png" name="Settings" class="taskbar-but" id="SettingsBut" title="Settings" />    
        </div>

        <div id="timer">
            <div id="current-task-container">
                    <p id="current-task">Default Task</p>
                    <input id="done-button"  type="image" src="images/done.png" class="done-but" title="Finish Task">    
            </div>

            <h3 id="num-pomos">1</h3>   

            <section id="timer-display">
            <p id="time-remaining">25:00</p>
            <p id="mode-message">Long Break in 3 Pomos</p>
            </section>

            <div id="timerButtonContainer">
                <button id="timer-button">Start</button>
            </div>
            <audio id="alarm" src="./air-horn.mp3"></audio>
        </div>
        
        <div id="task-list">
            <!-- <h3>Task Name:               Estimated pomodoros:</h3> -->
            
            <ul id="tasks-container" is="task-list"></ul>
            
            <form id="add-task-container">
                <label id='task-name'>Task name:</label>
                <input type="text" id="new-task-name" maxlength="30">
                <label id='est-pomos'>Estimated pomodoros:</label>
                <input type="number" id="new-task-count" value='1' min='1' max='99'>
                <input type="submit" id="add-task-btn" value="Add Task">
            </form>

            <table id="taskTable">
                <tbody id="tbodyID">
                    <tr>
                        <th>Task Name: </th>
                        <th>Estimated Pomos: </th> 
                        <th>Remove Task: </th>
                    </tr>
                </tbody>
            </table>

        </div>
        <div id="stats">

        </div>
        <div id="settings">

        </div>

        <div id="faqBox">
            <div id="faq">
                <h3>Where do I get started?</h3>
                <ol>
                    <li> Click on the Task List tab to add tasks. Specify task name and estimated pomo #. </li> 
                    <li> Click on the task you would like to work on. </li> 
                    <li> Start Timer!</li> 
                </ol>
            

                <h3>What is a Pomodoro Timer?</h3>
                                
                <div>A Pomodoro timer is a time-management technique. One Pomodoro is a 25 min work session followed by a 5 min break. 
                    On the 4th Pomodoro, there is a longer 15 min break. This technique keeps energy and motivation levels high throughout the work schedule.</div>


                <h3>What is the TaskList?</h3>
                    
                <div>This is the work schedule for the Pomodoro. Here we can add and remove tasks to do. 
                    In order to add a task, you only need to specify task name and estimated pomo #. 
                    Once all tasks are added, select one to start with!</div>

                <h3>How to see completed tasks?</h3>
                    
                <div>Visit the statistics tab on the page to view a list of completed tasks and other stats.</div>
                    
                <h3>How to customize page?</h3>
                    
                <div>Visit the settings tab to configure the timer to your liking.</div>
                
            </div>
        </div>
        <!-- <button id="tasklist-btn">Open Task List</button> --> 
    </main>
    <script src="./task-item.js" type="module"></script>
    <script src="./timer.js" type="module"></script>
    <script src="./tasklist.js" type="module"></script>
    <script src="./main.js" ></script>
   
</body>
</html>


`;

jest.spyOn(window, 'alert').mockImplementation(() => { });

test('Constructor Test', () => {
    localStorage.clear();
    const tasklist = new Tasklist();
    const emptyArr = [];
    const selectedArr = ['Default', '1', '-1'];
    expect((tasklist.$tasks)).toEqual(emptyArr);
    expect((tasklist.$selected)).toEqual(selectedArr);
});

/*
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
*/