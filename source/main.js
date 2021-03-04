// Run on DOM load
document.addEventListener('DOMContentLoaded', () => {
    let datasklist = document.getElementById('tasks-container');

    /**
     * Sets all taskbar icons to not selected 
     * and all style.displays to none
     */
    function setAllNone() {

        let home = document.getElementById('timer');
        home.style.display = 'none';

        let tasklist = document.getElementById('task-list');
        tasklist.style.display = 'none';

        let faq = document.getElementById('faq');
        faq.style.display = 'none';

        let settings = document.getElementById('settings');
        settings.style.display = 'none';

        let stats = document.getElementById('stats');
        stats.style.display = 'none';

        let taskListButtonStart = document.getElementById('task-list-button');
        let homeButtonStart = document.getElementById('home-button');
        let statsButtonStart = document.getElementById('stats-button');
        let settingsButtonStart = document.getElementById('settings-button');
        let faqButtonStart = document.getElementById('faq-button');

        taskListButtonStart.setAttribute('src', 'images/tasklist.png');
        homeButtonStart.setAttribute('src', 'images/home.png');
        statsButtonStart.setAttribute('src', 'images/stats.png');
        settingsButtonStart.setAttribute('src', 'images/settings.png');
        faqButtonStart.setAttribute('src', 'images/faq.png');

    }


    /* initial load home page */
    setAllNone();
    let homeButtonSelect = document.getElementById('home-button');
    homeButtonSelect.setAttribute('src', 'images/home2.png');

    /* Changes Color of selected button. Default is home*/
    let home = document.getElementById('timer');
    home.style.display = 'block';

    // If tasklist icon clicked on
    let taskListButton = document.getElementById('task-list-button');
    taskListButton.addEventListener('click', function tasklist() {
        /*  hides non tasklist elements and makes tasklist elements visible */
        /* see if we have to do anything to make new tasklist items show appropriately */

        setAllNone();
        /* Changes Color of selected button. */
        let tasklistButtonSelect = document.getElementById('task-list-button');
        tasklistButtonSelect.setAttribute('src', 'images/tasklist2.png');
        /*shows tasklist */
        let tasklist = document.getElementById('task-list');
        tasklist.style.display = 'block';
    });

    // If home icon clicked on
    let homeButton = document.getElementById("home-button");
    homeButton.addEventListener('click', function home() {
        /* add listeners or something to change color for timer */
        /* hides non timer elements and makes timer elements visible */

        setAllNone();
        /* Changes Color of selected button. */
        let homeButtonSelect = document.getElementById('home-button');
        homeButtonSelect.setAttribute('src', 'images/home2.png');
        /*shows timer */
        let home = document.getElementById('timer');
        home.style.display = 'block';
    });

    // If stats icon clicked on
    let statsButton = document.getElementById("stats-button");
    statsButton.addEventListener('click', function stats() {
        /* hides non stats elements and makes stats elements visible */

        setAllNone();
        /* Changes Color of selected button. */
        let statsButtonSelect = document.getElementById('stats-button');
        statsButtonSelect.setAttribute('src', 'images/stats2.png');
        /*shows settings */
        let stats = document.getElementById('stats');
        stats.style.display = 'block';
    });

    let faqButton = document.getElementById("faq-button");
    faqButton.addEventListener('click', function faq() {
        /* hides non stats elements and makes stats elements visible */

        setAllNone();
        /* Changes Color of selected button. */
        let faqButtonSelect = document.getElementById('faq-button');
        faqButtonSelect.setAttribute('src', 'images/faq2.png');
        /*shows settings */
        let faq = document.getElementById('faq');
        faq.style.display = 'block';
    });

    let settingsButton = document.getElementById("settings-button");
    settingsButton.addEventListener('click', function settings() {
        /* hides non stats elements and makes stats elements visible */

        setAllNone();
        /* Changes Color of selected button. */
        let settingsButtonSelect = document.getElementById('settings-button');
        settingsButtonSelect.setAttribute('src', 'images/settings2.png');
        /*shows settings */
        let settings = document.getElementById('settings');
        settings.style.display = 'block';
    });

    // "Add task" functionality for tasklist
    let addTaskButton = document.getElementById('add-task-container');
    addTaskButton.addEventListener('submit', function (event) {
        event.preventDefault();
        let newName = document.getElementById('new-task-name');
        let newCount = document.getElementById('new-task-count');
        datasklist.addTask(newName.value, newCount.value);
        newName.value = '';
        newCount.value = 1;
    });

    // "Finish Task" functionality for tasklist
    let doneButton = document.getElementById('done-button');
    doneButton.addEventListener('click', function () {
        let currTask = document.getElementById('current-task').innerHTML;
        if (currTask === 'Default') return; // Come back to this in case user wants to have a task named "Default"
        document.getElementById('tasks-container').removeTask(currTask);
    });
});

