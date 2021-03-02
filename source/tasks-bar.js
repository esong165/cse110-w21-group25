function home() {
    /* add listeners or something to change color for timer */
    /* hides non timer elements and makes timer elements visible */

    let home = document.getElementById('timer');
    let display1 = window.getComputedStyle(home).display;
    home.style.display1 = 'block';    
    
    let tasklist = document.getElementById('tasklist');
    let display2 = window.getComputedStyle(tasklist).display;
    tasklist.style.display2 = 'none';    

    let faq = document.getElementById('faq');
    let display3 = window.getComputedStyle(faq).display;
    faq.style.display3 = 'none'; 

    let settings = document.getElementById('settings');
    let display4 = window.getComputedStyle(settings).display;
    settings.style.display4 = 'none'; 

    let stats = document.getElementById('stats');
    let display5 = window.getComputedStyle(stats).display;
    stats.style.display5 = 'none'; 
};

function tasklist() {
    /*  hides non tasklist elements and makes tasklist elements visible */
    /* see if we have to do anything to make new tasklist items show appropriately */

    let home = document.getElementById('timer');
    let display1 = window.getComputedStyle(home).display;
    home.style.display1 = 'none'; 
    
    let tasklist = document.getElementById('tasklist');
    let display2 = window.getComputedStyle(tasklist).display;
    tasklist.style.display2 = 'block';    

    let faq = document.getElementById('faq');
    let display3 = window.getComputedStyle(faq).display;
    faq.style.display3 = 'none'; 

    let settings = document.getElementById('settings');
    let display4 = window.getComputedStyle(settings).display;
    settings.style.display4 = 'none'; 

    let stats = document.getElementById('stats');
    let display5 = window.getComputedStyle(stats).display;
    stats.style.display5 = 'none';
};

function stats() {
    /* hides non stats elements and makes stats elements visible */
    
    let home = document.getElementById('timer');
    let display1 = window.getComputedStyle(home).display;
    home.style.display1 = 'none';    
    
    let tasklist = document.getElementById('tasklist');
    let display2 = window.getComputedStyle(tasklist).display;
    tasklist.style.display2 = 'none';    

    let faq = document.getElementById('faq');
    let display3 = window.getComputedStyle(faq).display;
    faq.style.display3 = 'none'; 

    let settings = document.getElementById('settings');
    let display4 = window.getComputedStyle(settings).display;
    settings.style.display4 = 'none'; 

    let stats = document.getElementById('stats');
    let display5 = window.getComputedStyle(stats).display;
    stats.style.display5 = 'block'; 
};

function faq() {
    /* hides non faq elements and makes faq elements visible */

    let home = document.getElementById('timer');
    let display1 = window.getComputedStyle(home).display;
    home.style.display1 = 'none';
    
    let tasklist = document.getElementById('tasklist');
    let display2 = window.getComputedStyle(tasklist).display;
    tasklist.style.display2 = 'none';    

    let faq = document.getElementById('faq');
    let display3 = window.getComputedStyle(faq).display;
    faq.style.display3 = 'block';    

    let settings = document.getElementById('settings');
    let display4 = window.getComputedStyle(settings).display;
    settings.style.display4 = 'none'; 

    let stats = document.getElementById('stats');
    let display5 = window.getComputedStyle(stats).display;
    stats.style.display5 = 'none'; 
};

function settings() {
    /* hides non settings elements and makes settings elements visible */

    let home = document.getElementById('timer');
    let display1 = window.getComputedStyle(home).display;
    home.style.display1 = 'none';
    
    let tasklist = document.getElementById('tasklist');
    let display2 = window.getComputedStyle(tasklist).display;
    tasklist.style.display2 = 'none';    

    let faq = document.getElementById('faq');
    let display3 = window.getComputedStyle(faq).display;
    faq.style.display3 = 'none'; 

    let settings = document.getElementById('settings');
    let display4 = window.getComputedStyle(settings).display;
    settings.style.display4 = 'block';    

    let stats = document.getElementById('stats');
    let display5 = window.getComputedStyle(stats).display;
    stats.style.display5 = 'none'; 
};