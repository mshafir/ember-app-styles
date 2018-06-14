import Component from '@ember/component';
import layout from '../templates/components/list-item';

export default Component.extend({
  layout,

  classNames: ['list-item'],
  classNameBindings: ['selected'],
  indent: 0,
  onClick: () => {},
  onLeftIconClick: null,
  onRightIconClick: null,
  click() {
    this.onClick();
  },
  actions: {
    onLeftIconClick() {
      if (!this.onLeftIconClick) {
        this.onClick();
      } else {
        this.onLeftIconClick();
      }
    },
    onRightIconClick() {
      if (!this.onRightIconClick) {
        this.onClick();
      } else {
        this.onRightIconClick();
      }
    }
  }
});
