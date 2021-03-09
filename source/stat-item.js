
export default class StatItem extends HTMLElement {
	/*
	* construct stat item
	*/
	constructor(taskName, expectedCount, pomoCount) {
		super();

		const shadow = this.attachShadow({ mode: 'open' });

		const stat = document.createElement('li');
		stat.setAttribute('class', 'task');

		const name = document.createElement('p');
		name.innerHTML = taskName;
		stat.appendChild(name);

		const expected = document.createElement('p');
		expected.innerHTML = expectedCount;
		stat.appendChild(expected);

		const count = document.createElement('p');
		count.innerHTML = pomoCount;
		stat.appendChild(count);

		shadow.prepend(stat);
	}
}

customElements.define('stat-item', StatItem);
