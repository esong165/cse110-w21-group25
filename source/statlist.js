import StatItem from './stat-item.js';

/**
 * A class representing a list of stats.
 */
export default class Statlist extends HTMLUListElement {
	/**
	 * Constructs a Statlist with default or localStorage values.
	 */
	constructor() {
		super();
		this.totalTasks = 0;
		this.totalPomos = 0;
		this.avgPomos = 0;
		this.$stats = [];

		const statItemArr = JSON.parse(localStorage.getItem('statItemArr'));
		if (statItemArr !== null) {
			this.$stats = statItemArr;
		}

		for (const stat of this.$stats) {
			const current = new StatItem(stat[0], stat[1], stat[2]);
			this.totalTasks++;
			this.totalPomos += stat[2];
			document.getElementById('stats-container').prepend(current);
		}

		if (this.totalTasks === 0) {
			this.avgPomos = 0;
		} else {
			this.avgPomos = this.totalPomos / this.totalTasks;
		}

		document.getElementById('avg-pomos').innerHTML = 'Average pomodoros per task: ' + this.avgPomos;
		document.getElementById('total-tasks').innerHTML = 'Total tasks completed: ' + this.totalTasks;

		this.clearHistory.bind(this);
	}
	/**
	 * Clears the stat page resetting the list and average pomos/pomos-taken
	 * @param none
	 */
	clearHistory() {
		this.totalTasks = 0;
		this.totalPomos = 0;
		this.avgPomos = 0;
		this.$stats = [];
		//resets all the variables in local storage
		localStorage.setItem('statItemArr', JSON.stringify(this.$stats));
		localStorage.setItem('totalTasks', JSON.stringify(this.totalTasks));
		localStorage.setItem('totalPomos', JSON.stringify(this.totalPomos));
		localStorage.setItem('avgPomos', JSON.stringify(this.avgPomos));

		//updates the elements on the page
		document.getElementById('stats-container').innerHTML = "";
		document.getElementById('avg-pomos').innerHTML = 'Average pomodoros per task: ' + this.avgPomos;
		document.getElementById('total-tasks').innerHTML = 'Total tasks completed: ' + this.totalTasks;
	}
	/**
	 * Add a stat item with the completed task's name, expected pomodoro count, and actual pomodoro count to the statlist.
	 * @param {String} name - Name of the completed task.
	 * @param {Number} expected - Estimated pomodoro count for the task.
	 * @param {Number} count - Actual pomodoros used to complete the task.
	 */
	addStat(name, expected, count) {
		if (count === -1) {
			return;
		}
		const stat = new StatItem(name, expected, count);
		stat.id = '~' + name;

		let statItemArr = JSON.parse(localStorage.getItem('statItemArr'));
		if (statItemArr == null) {
			statItemArr = [];
		}

		const statArray = [];
		statArray.push(name);
		statArray.push(expected);
		statArray.push(count);
		this.totalTasks++;
		this.totalPomos += count;
		this.avgPomos = this.totalPomos / this.totalTasks;

		statItemArr.push(statArray);
		this.$stats.push([name, expected, count]);
		this.prepend(stat);

		document.getElementById('avg-pomos').innerHTML = 'Average pomodoros per task: ' + this.avgPomos;
		document.getElementById('total-tasks').innerHTML = 'Total tasks completed: ' + this.totalTasks;
		localStorage.setItem('statItemArr', JSON.stringify(statItemArr));
		localStorage.setItem('totalTasks', JSON.stringify(this.totalTasks));
		localStorage.setItem('totalPomos', JSON.stringify(this.totalPomos));
		localStorage.setItem('avgPomos', JSON.stringify(this.avgPomos));
	}
}
customElements.define('stat-list', Statlist, { extends: 'ul' });

document.addEventListener('DOMContentLoaded', () => {
	
	document.getElementById('clear-button').addEventListener('click', () => {
		document.getElementById("stats-container").clearHistory();
	});
});