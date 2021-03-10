/**
 * A class representing a stat item.
 */
export default class StatItem extends HTMLElement {

	/**
	 * Constructs a stat item using the input task name, expected pomodoro count, and actual pomodoro count.
	 * @param {String} taskName - Name of completed task.
	 * @param {Number} expectedCount - Estimated pomodoro count for the task.
	 * @param {Number} pomoCount - Actual pomodoros used to complete the task.
	 */
	constructor(taskName, expectedCount, pomoCount) {
		super();

		const shadow = this.attachShadow({ mode: 'open' });

		shadow.innerHTML = `
			<style>
			li {
				width: 900px;
				position: relative;
				text-align: center;
				margin-left: 7%;
			}

			li:before, li:after {
				text-align: right;
				display: block;
				border-bottom: 0;
				width: 0%;
			}

			li:before {
				text-align: left;
			}

			li:after {
				position: absolute;
				top: 0;
				left: 48%;
				margin-left: 1px;
			}

			p {
				text-align: left;
				float: left;
				margin-top: 25px;
				font-size: 210%;
				max-width: 451px;
				word-wrap: break-word;
			}

			p + p {
				margin-left: 70px;
			}
			</style>
		`;

		const stat = document.createElement('li');
		stat.setAttribute('class', 'task');
		stat.setAttribute('color', 'true');
		// Remove bullet point from ul's li elements
		stat.style = 'list-style-type:none;';

		const name = document.createElement('p');
		name.textContent = taskName;
		name.style = 'width: 60%;';
		stat.appendChild(name);

		const expected = document.createElement('p');
		expected.textContent = expectedCount;
		expected.style = 'width: 10%;';
		stat.appendChild(expected);

		const count = document.createElement('p');
		count.textContent = pomoCount;
		count.style = 'width: 10%;';
		stat.appendChild(count);

		shadow.prepend(stat);
	}
}

customElements.define('stat-item', StatItem);
