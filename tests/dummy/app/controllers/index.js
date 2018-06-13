import { inject } from '@ember/service';
import FreestyleController from 'ember-freestyle/controllers/freestyle';

export default FreestyleController.extend({
  emberFreestyle: inject(),
});
