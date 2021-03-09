
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
		name.textContent = taskName;
		stat.appendChild(name);

		const expected = document.createElement('p');
		expected.textContent = expectedCount;
		stat.appendChild(expected);

		const count = document.createElement('p');
		count.textContent = pomoCount;
		stat.appendChild(count);

		shadow.prepend(stat);
	}
}

customElements.define('stat-item', StatItem);
