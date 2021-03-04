// Run on DOM load
document.addEventListener('DOMContentLoaded', () => {
	let datasklist = document.getElementById('tasks-container');

    let taskListButtonStart = document.getElementById('TaskListBut');
    let homeButtonStart = document.getElementById('HomeBut');
    let statsButtonStart = document.getElementById('StatsBut');
    let settingsButtonStart = document.getElementById('SettingsBut');
    let faqButtonStart = document.getElementById('FAQBut');

    taskListButtonStart.setAttribute('src', 'images/tasklist.png');
    homeButtonStart.setAttribute('src', 'images/home2.png');
    statsButtonStart.setAttribute('src', 'images/stats.png');
    settingsButtonStart.setAttribute('src', 'images/settings.png');
    faqButtonStart.setAttribute('src', 'images/faq.png');

    /* initial load home page */
    let home = document.getElementById('timer');
    home.style.display = 'block';    
        
    let tasklist = document.getElementById('task-list');
    tasklist.style.display = 'none';    

    let faq = document.getElementById('faq');
    faq.style.display = 'none'; 

    let settings = document.getElementById('settings');
    settings.style.display = 'none'; 

    let stats = document.getElementById('stats');
    stats.style.display = 'none'; 
    
    // If tasklist icon clicked on
    let taskListButton = document.getElementById('TaskListBut');
    taskListButton.addEventListener('click',     function tasklist() {
        /*  hides non tasklist elements and makes tasklist elements visible */
        /* see if we have to do anything to make new tasklist items show appropriately */
        let taskListButton1 = document.getElementById('TaskListBut');
        let homeButton1 = document.getElementById('HomeBut');
        let statsButton1 = document.getElementById('StatsBut');
        let settingsButton1 = document.getElementById('SettingsBut');
        let faqButton1 = document.getElementById('FAQBut');

        taskListButton1.setAttribute('src', 'images/tasklist2.png');
        homeButton1.setAttribute('src', 'images/home.png');
        statsButton1.setAttribute('src', 'images/stats.png');
        settingsButton1.setAttribute('src', 'images/settings.png');
        faqButton1.setAttribute('src', 'images/faq.png');

        let home = document.getElementById('timer');
        home.style.display = 'none'; 
        
        let tasklist = document.getElementById('task-list');
        tasklist.style.display = 'block';    

        let faq = document.getElementById('faq');
        faq.style.display = 'none'; 

        let settings = document.getElementById('settings');
        settings.style.display = 'none'; 

        let stats = document.getElementById('stats');
        stats.style.display = 'none';
    });
    
    // If home icon clicked on
    let homeButton = document.getElementById("HomeBut");
    homeButton.addEventListener('click', function home() {
        /* add listeners or something to change color for timer */
        /* hides non timer elements and makes timer elements visible */

        let taskListButton1 = document.getElementById('TaskListBut');
        let homeButton1 = document.getElementById('HomeBut');
        let statsButton1 = document.getElementById('StatsBut');
        let settingsButton1 = document.getElementById('SettingsBut');
        let faqButton1 = document.getElementById('FAQBut');

        taskListButton1.setAttribute('src', 'images/tasklist.png');
        homeButton1.setAttribute('src', 'images/home2.png');
        statsButton1.setAttribute('src', 'images/stats.png');
        settingsButton1.setAttribute('src', 'images/settings.png');
        faqButton1.setAttribute('src', 'images/faq.png');

        let home = document.getElementById('timer');
        home.style.display = 'block';    
        
        let tasklist = document.getElementById('task-list');
        tasklist.style.display = 'none';    

        let faq = document.getElementById('faq');
        faq.style.display = 'none'; 

        let settings = document.getElementById('settings');
        settings.style.display = 'none'; 

        let stats = document.getElementById('stats');
        stats.style.display = 'none'; 
    });

    // If stats icon clicked on
    let statsButton = document.getElementById("StatsBut");
    statsButton.addEventListener('click', function stats() {
        /* hides non stats elements and makes stats elements visible */
        
        let taskListButton1 = document.getElementById('TaskListBut');
        let homeButton1 = document.getElementById('HomeBut');
        let statsButton1 = document.getElementById('StatsBut');
        let settingsButton1 = document.getElementById('SettingsBut');
        let faqButton1 = document.getElementById('FAQBut');

        taskListButton1.setAttribute('src', 'images/tasklist.png');
        homeButton1.setAttribute('src', 'images/home.png');
        statsButton1.setAttribute('src', 'images/stats2.png');
        settingsButton1.setAttribute('src', 'images/settings.png');
        faqButton1.setAttribute('src', 'images/faq.png');

        let home = document.getElementById('timer');
        home.style.display = 'none';    
        
        let tasklist = document.getElementById('task-list');
        tasklist.style.display = 'none';    

        let faq = document.getElementById('faq');
        faq.style.display = 'none'; 

        let settings = document.getElementById('settings');
        settings.style.display = 'none'; 

        let stats = document.getElementById('stats');
        stats.style.display = 'block'; 
    });

    // If faq icon clicked on
    let faqButton = document.getElementById("FAQBut");
    faqButton.addEventListener('click',     function faq() {
        /* hides non faq elements and makes faq elements visible */
        let taskListButton1 = document.getElementById('TaskListBut');
        let homeButton1 = document.getElementById('HomeBut');
        let statsButton1 = document.getElementById('StatsBut');
        let settingsButton1 = document.getElementById('SettingsBut');
        let faqButton1 = document.getElementById('FAQBut');

        taskListButton1.setAttribute('src', 'images/tasklist.png');
        homeButton1.setAttribute('src', 'images/home.png');
        statsButton1.setAttribute('src', 'images/stats.png');
        settingsButton1.setAttribute('src', 'images/settings.png');
        faqButton1.setAttribute('src', 'images/faq2.png');

        let home = document.getElementById('timer');
        home.style.display = 'none';
        
        let tasklist = document.getElementById('task-list');
        tasklist.style.display = 'none';    

        let faq = document.getElementById('faq');
        faq.style.display = 'block';    

        let settings = document.getElementById('settings');
        settings.style.display = 'none'; 

        let stats = document.getElementById('stats');
        stats.style.display = 'none'; 
    });

    // If settings icon clicked on
    let settingsButton = document.getElementById("SettingsBut");
    settingsButton.addEventListener('click',  function settings() {
        /* hides non settings elements and makes settings elements visible */

        let taskListButton1 = document.getElementById('TaskListBut');
        let homeButton1 = document.getElementById('HomeBut');
        let statsButton1 = document.getElementById('StatsBut');
        let settingsButton1 = document.getElementById('SettingsBut');
        let faqButton1 = document.getElementById('FAQBut');

        taskListButton1.setAttribute('src', 'images/tasklist.png');
        homeButton1.setAttribute('src', 'images/home.png');
        statsButton1.setAttribute('src', 'images/stats.png');
        settingsButton1.setAttribute('src', 'images/settings2.png');
        faqButton1.setAttribute('src', 'images/faq.png');

        let home = document.getElementById('timer');
        home.style.display = 'none';

        let tasklist = document.getElementById('task-list');
        tasklist.style.display = 'none';    

        let faq = document.getElementById('faq');
        faq.style.display = 'none'; 

        let settings = document.getElementById('settings');
        settings.style.display = 'block';    
        
        let stats = document.getElementById('stats');
        stats.style.display = 'none'; 
    });


    // "Add task" functionality for tasklist
    let addTaskButton = document.getElementById('add-task-container');
    addTaskButton.addEventListener('submit', function(event) {
        event.preventDefault();
        let newName = document.getElementById('new-task-name');
        let newCount = document.getElementById('new-task-count');
        datasklist.addTask(newName.value, newCount.value);
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
