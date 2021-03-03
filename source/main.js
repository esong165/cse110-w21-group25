
// Run on DOM load


document.addEventListener('DOMContentLoaded', () => {
	let datasklist = document.getElementById('tasks-container');

    function home() {
        /* add listeners or something to change color for timer */
        /* hides non timer elements and makes timer elements visible */

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
    };

    function tasklist() {
        /*  hides non tasklist elements and makes tasklist elements visible */
        /* see if we have to do anything to make new tasklist items show appropriately */

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
    };

    function stats() {
        /* hides non stats elements and makes stats elements visible */
        
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
    };

    function faq() {
        /* hides non faq elements and makes faq elements visible */

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
    };

    function settings() {
        /* hides non settings elements and makes settings elements visible */

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
    };



    // "Open/close" functionality for tasklist
    let taskListButton = document.getElementById('TaskListBut');
    taskListButton.addEventListener('click', tasklist());
    
    let homeButton = document.getElementById("HomeBut");
    homeButton.addEventListener('click', home());

    let statsButton = document.getElementById("StatsBut");
    statsButton.addEventListener('click', stats());

    let faqButton = document.getElementById("FAQBut");
    faqButton.addEventListener('click', faq());

    let settingsButton = document.getElementById("SettingsBut");
    settingsButton.addEventListener('click', settings());


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
