import Component from '@ember/component';

export default Component.extend({
  actions: {
    sayHi(person) {
      alert(`Hello ${person}`);
    }
  }
});
