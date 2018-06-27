import Component from '@ember/component';
import layout from '../templates/components/column-nav-page';
import { computed } from '@ember/object';
import { equal, alias } from '@ember/object/computed';

export default Component.extend({
  layout,
	classNames: ['no-border'],
	classNameBindings: ['showPage:h-100', 'showPage:show'],
	currentNavPage: alias('nav.currentPage'),
	showPage: computed('currentNavPage', 'page', function() {
		let { currentNavPage, page } = this.getProperties('currentNavPage', 'page');
		return currentNavPage === page;
	})
});
