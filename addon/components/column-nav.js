import Component from '@ember/component';
import layout from '../templates/components/column-nav';
import { A } from '@ember/array';

export default Component.extend({
  layout,
	classNames: ['column-nav', 'flex','column'],

	init() {
		this._super(...arguments);
		this.set('pageStack', A());
		this.set('contextStack', A());
	},

	onNavigation: (page, context) => {},

	navigateToPage(page, context) {
		this.get('pageStack').pushObject(this.get('currentPage'));
		this.get('contextStack').pushObject(this.get('context'));
		this.set('forward', true);
		this.set('currentPage', page);
		this.set('context', context);
		this.onNavigation(page, context);
	},

	navigateBack() {
		if (this.get('pageStack.length') > 0) {
			let page = this.get('pageStack').popObject();
			let context = this.get('contextStack').popObject();
			this.set('forward', false);
			this.set('currentPage', page);
			this.set('context', context);
		}
	}
});
