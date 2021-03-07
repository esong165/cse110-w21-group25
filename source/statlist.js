import StatItem from './stat-item.js';

export default class Statlist extends HTMLUListElement {

	constructor() {
		super();
		let totalTasks = 0;
		let totalPomos = 0;
		let avgPomos = 0;
		this.$stats = [];

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
		totalTasks++;
		totalPomos+= count;
		avgPomos = totalTasks/totalStat;

		if (!JSON.stringify(statItemArr).includes(JSON.stringify(statArray))) {
			statItemArr.push(statArray);
			this.$stats.push([name, count]);
			this.prepend(stat);
		} else {
			return;
		}

		localStorage.setItem('statItemArr', JSON.stringify(statItemArr));
		localStorage.setItem('totalTasks', JSON.stringify(totalTasks));
		localStorage.setItem('totalPomos', JSON.stringify(totalPomos));
		localStorage.setItem('avgPomos', JSON.stringify(avgPomos));
	}
}
customElements.define('stat-list', Statlist, { extends: 'ul' });
