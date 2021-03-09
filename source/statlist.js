import StatItem from './stat-item.js';

export default class Statlist extends HTMLUListElement {
	constructor() {
		super();
		this.totalTasks = 0;
		this.totalPomos = 0;
		this.avgPomos = 0;
		this.$stats = [];

		document.getElementById('avg-pomos').innerHTML = avgPomos;
		document.getElementById('total-tasks').innerHTML = totalTasks;

		const statItemArr = JSON.parse(localStorage.getItem('statItemArr'));
		if (statItemArr !== null) {
			this.$stats = statItemArr;
		}

		for (const stat of this.$stats) {
			const current = new StatItem(stat[0], stat[1]);

			document.getElementById('stat-container').prepend(current);
		}
	}

	addStat(name, count) {
		const stat = new StatItem(name, count);
		stat.id = name;

		let statItemArr = JSON.parse(localStorage.getItem('statItemArr'));
		if (statItemArr == null) {
			statItemArr = [];
		}

		const statArray = [];
		statArray.push(name);
		statArray.push(count);
		this.totalTasks++;
		this.totalPomos += count;
		this.avgPomos = this.totalTasks / this.totalPomos;

		if (!JSON.stringify(statItemArr).includes(JSON.stringify(statArray))) {
			statItemArr.push(statArray);
			this.$stats.push([name, count]);
			this.prepend(stat);
		} else {
			return;
		}

		document.getElementById('avg-pomos').innerHTML = avgPomos;
		document.getElementById('total-tasks').innerHTML = totalTasks;''
		localStorage.setItem('statItemArr', JSON.stringify(statItemArr));
		localStorage.setItem('totalTasks', JSON.stringify(totalTasks));
		localStorage.setItem('totalPomos', JSON.stringify(totalPomos));
		localStorage.setItem('avgPomos', JSON.stringify(avgPomos));
	}
}
customElements.define('stat-list', Statlist, { extends: 'ul' });
