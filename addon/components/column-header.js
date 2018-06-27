import Component from '@ember/component';
import layout from '../templates/components/column-header';

export default Component.extend({
  layout,
  classNames: ['column-header', 'firm', 'header'],
	onLeftIconClick: () => {},
  onRightIconClick: () => {}
});
