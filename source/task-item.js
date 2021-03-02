
export default class TaskItem extends HTMLElement {

    constructor(taskName, pomoCount) {
        super();


        let shadow = this.attachShadow({mode: 'open'});

        let task = document.createElement('li');
        task.setAttribute('class', 'task');

        // Set name of task
        let name = document.createElement('span');

        name.innerHTML = '';
        name.innerHTML += taskName;

        task.appendChild(name);

        // Set estimated pomodoros
        let count = document.createElement('span');

        count.innerHTML = '';
        count.innerHTML += pomoCount;
        task.appendChild(count);

        // Select task button note: considering making this a radio option or making the text a clickable button
        let selectTaskButton = document.createElement('button');
        selectTaskButton.innerHTML = 'Select';
        task.appendChild(selectTaskButton);
        
        // Remove task button
        let removeTaskButton = document.createElement('button');
        removeTaskButton.innerHTML = 'Remove';
        task.appendChild(removeTaskButton);
        
        

        shadow.appendChild(task);

        /*
        let style = document.createElement('style');
 
        style.textContent = `
            .task > button {}
            visibility: visible;
        `;
        
        shadow.appendChild(style);
        */  
    }
}

customElements.define('task-item', TaskItem);

