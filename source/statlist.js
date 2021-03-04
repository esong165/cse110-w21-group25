import StatItem from './stat-item.js';

export default class Statlist extends HTMLUListElement {
	constructor() {
		super();

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

		if (!JSON.stringify(statItemArr).includes(JSON.stringify(statArray))) {
			statItemArr.push(statArray);
			this.$stats.push([name, count]);
			this.prepend(stat);
		} else {
			return;
		}

		localStorage.setItem('statItemArr', JSON.stringify(statItemArr));
	}
}
customElements.define('stat-list', Statlist, { extends: 'ul' });
