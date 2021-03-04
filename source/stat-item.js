
export default class StatItem extends HTMLElement {
	/*
	* construct stat item 
	*/
	constructor(taskName, pomoCount) {
		super();
		
		const shadow = this.attachShadow({mode: 'open'});

		const stat = document.createElement('li');
		stat.setAttribute('class', 'task');

		const name = document.createElement('span');
		name.innerHTML = '';
		name.innerHTML += taskName;
		stat.appendChild(name);

		const count = document.createElement('span');
		count.innerHTML = '';
		count.innerHTML += pomoCount;
		stat.appendChild(count);

		shadow.prepend(stat);
	}
}

customElements.define('stat-item', StatItem);