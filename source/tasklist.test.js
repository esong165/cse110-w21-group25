
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
            <input type="image" src="images/home.png" name="Home" class="taskbar-button" id="home-button" title="Home" />
            <input type="image" src="images/tasklist.png" name="TaskList" class="taskbar-button" id="task-list-button" title="Tasklist" />
            <input type="image" src="images/stats.png" name="Stats" class="taskbar-button" id="stats-button" title="Statistics" />
            <input type="image" src="images/faq.png" name="FAQ" class="taskbar-button" id="faq-button" title="FAQ" />
            <input type="image" src="images/settings.png" name="Settings" class="taskbar-button" id="settings-button" title="Settings" />
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

            <div id="timer-button-container">
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

            <table id="task-table">
                <tbody id="task-table-body">
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
	const selectedArr = ['Choose Task', '1', '-1'];
	expect((tasklist.$tasks)).toEqual(emptyArr);
	expect((tasklist.$selected)).toEqual(selectedArr);
});
